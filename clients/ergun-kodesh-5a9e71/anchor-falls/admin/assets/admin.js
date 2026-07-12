// Shared simulated-admin engine. Used by both congregations' staff demos.
// Everything persists to localStorage only (per browser, per site prefix) — nothing is ever
// sent over a network, no email is sent, no production content is touched.
window.AdminDemo = (function () {
  var ROLES = ['contributor', 'reviewer', 'publisher', 'administrator'];
  var ROLE_LABELS = { contributor: 'Contributor', reviewer: 'Reviewer', publisher: 'Publisher', administrator: 'Administrator' };

  function prefix(key, ns) { return ns + '-' + key; }

  function getRole(ns) {
    return localStorage.getItem(prefix('role', ns)) || 'administrator';
  }
  function setRole(ns, role) {
    localStorage.setItem(prefix('role', ns), role);
  }

  function loadList(ns, key, seed) {
    var raw = localStorage.getItem(prefix(key, ns));
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* fall through to reseed */ }
    }
    localStorage.setItem(prefix(key, ns), JSON.stringify(seed));
    return JSON.parse(JSON.stringify(seed));
  }
  function saveList(ns, key, list) {
    localStorage.setItem(prefix(key, ns), JSON.stringify(list));
  }

  function resetAll(ns, keys) {
    keys.forEach(function (k) { localStorage.removeItem(prefix(k, ns)); });
    localStorage.removeItem(prefix('role', ns));
  }

  // Capability matrix for the draft -> review -> publish pipeline.
  var CAN = {
    edit: ['contributor', 'reviewer', 'publisher', 'administrator'],
    submitForReview: ['contributor', 'reviewer', 'publisher', 'administrator'],
    markReviewed: ['reviewer', 'publisher', 'administrator'],
    publish: ['publisher', 'administrator'],
    revertToDraft: ['administrator'],
    markPageCurrent: ['publisher', 'administrator'],
    requestPageReview: ['contributor', 'reviewer', 'publisher', 'administrator']
  };
  function can(role, action) {
    return (CAN[action] || []).indexOf(role) > -1;
  }

  function statusPillHtml(status, reviewed) {
    if (status === 'published') return '<span class="admin-pill admin-pill--published"><span class="material-symbols-outlined" style="font-size:14px;" aria-hidden="true">check_circle</span>Published</span>';
    if (status === 'in_review') return reviewed
      ? '<span class="admin-pill admin-pill--reviewed"><span class="material-symbols-outlined" style="font-size:14px;" aria-hidden="true">verified</span>Reviewed — ready to publish</span>'
      : '<span class="admin-pill admin-pill--review"><span class="material-symbols-outlined" style="font-size:14px;" aria-hidden="true">visibility</span>In review</span>';
    return '<span class="admin-pill admin-pill--draft"><span class="material-symbols-outlined" style="font-size:14px;" aria-hidden="true">edit</span>Draft</span>';
  }

  function initRoleSwitcher(ns, onChange) {
    document.querySelectorAll('[data-role-switcher]').forEach(function (sel) {
      sel.value = getRole(ns);
      sel.addEventListener('change', function () {
        setRole(ns, sel.value);
        document.querySelectorAll('[data-role-switcher]').forEach(function (other) { other.value = sel.value; });
        onChange && onChange(sel.value);
      });
    });
  }

  function initResetButton(ns, keys, extra) {
    document.querySelectorAll('[data-reset-demo]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        resetAll(ns, keys);
        extra && extra();
        location.reload();
      });
    });
  }

  return {
    ROLES: ROLES, ROLE_LABELS: ROLE_LABELS,
    getRole: getRole, setRole: setRole,
    loadList: loadList, saveList: saveList, resetAll: resetAll,
    can: can, statusPillHtml: statusPillHtml,
    initRoleSwitcher: initRoleSwitcher, initResetButton: initResetButton
  };
})();
