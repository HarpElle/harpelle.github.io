const MAX_LENGTHS = {
  role: 40,
  name: 120,
  email: 160,
  team: 160,
  device: 160,
  appVersion: 80,
  workflow: 80,
  matchContext: 500,
  blockers: 800,
  notes: 2000,
  sourceUrl: 300,
};

const ROLE_VALUES = new Set(['coach', 'assistant-coach', 'parent-fan', 'player', 'club-admin', 'other']);
const WORKFLOW_VALUES = new Set([
  'first-setup',
  'live-scoring',
  'substitutions-libero',
  'voice-input',
  'fan-mode',
  'summary-ai',
  'premium-ads',
  'general',
]);

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowedOrigins = parseAllowedOrigins(env.ALLOWED_ORIGINS);

    if (request.method === 'OPTIONS') {
      return withCors(new Response(null, { status: 204 }), origin, allowedOrigins);
    }

    const url = new URL(request.url);
    if (request.method !== 'POST' || url.pathname !== '/feedback') {
      return withCors(json({ error: 'Not found' }, 404), origin, allowedOrigins);
    }

    if (origin && !allowedOrigins.has(origin)) {
      return json({ error: 'This feedback form is not available from this origin.' }, 403);
    }

    let payload;
    try {
      payload = await request.json();
    } catch {
      return withCors(json({ error: 'Please check the form and try again.' }, 400), origin, allowedOrigins);
    }

    const spamCheck = checkSpam(payload);
    if (!spamCheck.ok) {
      return withCors(json({ ok: true, id: crypto.randomUUID() }), origin, allowedOrigins);
    }

    const validation = validatePayload(payload);
    if (!validation.ok) {
      return withCors(json({ error: validation.error }, 400), origin, allowedOrigins);
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const data = validation.data;

    await env.DB.prepare(`
      INSERT INTO feedback (
        id, created_at, role, name, email, team, device, app_version,
        workflow, match_context, rating, blockers, notes, source_url, user_agent
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      id,
      createdAt,
      data.role,
      data.name,
      data.email,
      data.team,
      data.device,
      data.appVersion,
      data.workflow,
      data.matchContext,
      data.rating,
      data.blockers,
      data.notes,
      data.sourceUrl,
      request.headers.get('User-Agent') || '',
    ).run();

    const notifyTo = parseEmailList(env.NOTIFY_TO);
    if (env.EMAIL && notifyTo.length && env.NOTIFY_FROM) {
      try {
        await env.EMAIL.send({
          to: notifyTo,
          from: { email: env.NOTIFY_FROM, name: 'VolleyTrack Feedback' },
          subject: `VolleyTrack feedback: ${labelWorkflow(data.workflow)}`,
          text: buildEmailText({ id, createdAt, ...data }),
          replyTo: data.email || undefined,
        });
      } catch (error) {
        console.warn('feedback email failed', error);
      }
    }

    return withCors(json({ ok: true, id }), origin, allowedOrigins);
  },
};

function parseAllowedOrigins(value = '') {
  return new Set(value.split(',').map((item) => item.trim()).filter(Boolean));
}

function parseEmailList(value = '') {
  return value.split(',').map((item) => item.trim()).filter(Boolean);
}

function withCors(response, origin, allowedOrigins) {
  if (origin && allowedOrigins.has(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Vary', 'Origin');
  }
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  response.headers.set('Access-Control-Max-Age', '86400');
  return response;
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

function checkSpam(payload) {
  if (payload.website) return { ok: false };
  const startedAt = Number(payload.startedAt || 0);
  if (Number.isFinite(startedAt) && Date.now() - startedAt < 2500) return { ok: false };
  return { ok: true };
}

function validatePayload(payload) {
  const data = {
    role: clean(payload.role, MAX_LENGTHS.role) || 'other',
    name: clean(payload.name, MAX_LENGTHS.name),
    email: clean(payload.email, MAX_LENGTHS.email),
    team: clean(payload.team, MAX_LENGTHS.team),
    device: clean(payload.device, MAX_LENGTHS.device),
    appVersion: clean(payload.appVersion, MAX_LENGTHS.appVersion),
    workflow: clean(payload.workflow, MAX_LENGTHS.workflow) || 'general',
    matchContext: clean(payload.matchContext, MAX_LENGTHS.matchContext),
    blockers: clean(payload.blockers, MAX_LENGTHS.blockers),
    notes: clean(payload.notes, MAX_LENGTHS.notes),
    sourceUrl: clean(payload.sourceUrl, MAX_LENGTHS.sourceUrl),
    rating: Number.parseInt(payload.rating, 10),
  };

  if (!ROLE_VALUES.has(data.role)) data.role = 'other';
  if (!WORKFLOW_VALUES.has(data.workflow)) data.workflow = 'general';
  if (!data.notes || data.notes.length < 8) return { ok: false, error: 'Please include a few details before sending.' };
  if (!Number.isFinite(data.rating) || data.rating < 1 || data.rating > 5) data.rating = null;
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, error: 'Please enter a valid email address or leave it blank.' };
  }

  return { ok: true, data };
}

function clean(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function labelWorkflow(workflow) {
  return workflow.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function buildEmailText(data) {
  return [
    'New VolleyTrack feedback',
    '',
    `ID: ${data.id}`,
    `Submitted: ${data.createdAt}`,
    `Role: ${data.role}`,
    `Name: ${data.name || 'Not provided'}`,
    `Email: ${data.email || 'Not provided'}`,
    `Team: ${data.team || 'Not provided'}`,
    `Device: ${data.device || 'Not provided'}`,
    `App version: ${data.appVersion || 'Not provided'}`,
    `Workflow: ${data.workflow}`,
    `Rating: ${data.rating || 'Not provided'}`,
    '',
    'Match context:',
    data.matchContext || 'Not provided',
    '',
    'Blockers:',
    data.blockers || 'Not provided',
    '',
    'Notes:',
    data.notes,
    '',
    `Source URL: ${data.sourceUrl || 'Not provided'}`,
  ].join('\n');
}
