CREATE TABLE IF NOT EXISTS feedback (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  role TEXT NOT NULL,
  name TEXT,
  email TEXT,
  team TEXT,
  device TEXT,
  app_version TEXT,
  workflow TEXT NOT NULL,
  match_context TEXT,
  rating INTEGER,
  blockers TEXT,
  notes TEXT NOT NULL,
  source_url TEXT,
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback(created_at);
CREATE INDEX IF NOT EXISTS idx_feedback_workflow ON feedback(workflow);
