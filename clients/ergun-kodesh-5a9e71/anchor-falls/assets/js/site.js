// Anchor Falls Church — shared site behavior (nav, search, accordion, filters, forms).
// No network calls. Demo-safe: nothing here submits data anywhere.
(function () {
  var SEARCH_INDEX = [
    { title: 'Home', href: 'index.html', keywords: 'home welcome' },
    { title: 'About — Our Story', href: 'about.html', keywords: 'about story history frank jim susler' },
    { title: 'About — Our Beliefs', href: 'about.html#beliefs', keywords: 'beliefs statement of faith doctrine' },
    { title: 'About — Our Team', href: 'about.html#team', keywords: 'team staff pastors leaders' },
    { title: 'Plan Your Visit', href: 'visit.html', keywords: 'visit new here directions parking what to wear faq' },
    { title: 'Ministries', href: 'ministries.html', keywords: 'ministries kids the crew equip groups youth children' },
    { title: 'Sermons', href: 'sermons.html', keywords: 'sermons messages watch listen youtube' },
    { title: 'Events', href: 'events.html', keywords: 'events calendar upcoming weekly' },
    { title: 'Give', href: 'give.html', keywords: 'give giving donate tithe offering' },
    { title: 'Resources', href: 'resources.html', keywords: 'resources bulletin documents guides' },
    { title: 'Contact', href: 'contact.html', keywords: 'contact prayer request email phone map' }
  ];

  function qs(sel, el) { return (el || document).querySelector(sel); }
  function qsa(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }

  document.addEventListener('DOMContentLoaded', function () {
    // Mobile drawer
    var drawer = qs('[data-drawer]');
    qsa('[data-drawer-open]').forEach(function (btn) {
      btn.addEventListener('click', function () { drawer && drawer.classList.add('is-open'); });
    });
    qsa('[data-drawer-close]').forEach(function (btn) {
      btn.addEventListener('click', function () { drawer && drawer.classList.remove('is-open'); });
    });
    if (drawer) {
      qsa('a', drawer).forEach(function (a) {
        a.addEventListener('click', function () { drawer.classList.remove('is-open'); });
      });
    }

    // About dropdown (hover + click + keyboard)
    qsa('[data-dropdown]').forEach(function (dd) {
      var trigger = qs('[data-dropdown-trigger]', dd);
      function open() { dd.classList.add('is-open'); trigger && trigger.setAttribute('aria-expanded', 'true'); }
      function close() { dd.classList.remove('is-open'); trigger && trigger.setAttribute('aria-expanded', 'false'); }
      dd.addEventListener('mouseenter', open);
      dd.addEventListener('mouseleave', close);
      if (trigger) {
        trigger.addEventListener('click', function (e) {
          e.preventDefault();
          dd.classList.contains('is-open') ? close() : open();
        });
        trigger.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') close();
        });
      }
    });

    // Search overlay
    var searchOverlay = qs('[data-search-overlay]');
    var searchInput = qs('[data-search-input]');
    var searchResults = qs('[data-search-results]');
    function renderResults(query) {
      if (!searchResults) return;
      var q = (query || '').trim().toLowerCase();
      var matches = SEARCH_INDEX.filter(function (item) {
        return !q || item.title.toLowerCase().indexOf(q) > -1 || item.keywords.indexOf(q) > -1;
      }).slice(0, 8);
      searchResults.innerHTML = matches.map(function (item) {
        return '<a href="' + item.href + '">' + item.title + '</a>';
      }).join('') || '<p style="color:var(--ek-gray-soft);padding:10px;">No matches.</p>';
    }
    qsa('[data-search-open]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!searchOverlay) return;
        searchOverlay.classList.add('is-open');
        renderResults('');
        setTimeout(function () { searchInput && searchInput.focus(); }, 10);
      });
    });
    qsa('[data-search-close]').forEach(function (btn) {
      btn.addEventListener('click', function () { searchOverlay && searchOverlay.classList.remove('is-open'); });
    });
    if (searchInput) searchInput.addEventListener('input', function () { renderResults(searchInput.value); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && searchOverlay) searchOverlay.classList.remove('is-open');
    });

    // Accordion (FAQ, beliefs)
    qsa('[data-accordion-item]').forEach(function (item) {
      var trigger = qs('[data-accordion-trigger]', item);
      if (!trigger) return;
      trigger.addEventListener('click', function () {
        var isOpen = item.getAttribute('data-open') === 'true';
        var group = item.closest('[data-accordion]');
        if (group && group.getAttribute('data-single') === 'true') {
          qsa('[data-accordion-item]', group).forEach(function (i) {
            i.setAttribute('data-open', 'false');
            var t = qs('[data-accordion-trigger]', i);
            if (t) t.setAttribute('aria-expanded', 'false');
          });
        }
        item.setAttribute('data-open', isOpen ? 'false' : 'true');
        trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      });
    });

    // Filter pills
    qsa('[data-filter-group]').forEach(function (group) {
      var pills = qsa('[data-filter-value]', group);
      var targetSel = group.getAttribute('data-filter-target');
      var items = targetSel ? qsa(targetSel) : [];
      pills.forEach(function (pill) {
        pill.addEventListener('click', function () {
          pills.forEach(function (p) { p.setAttribute('aria-pressed', 'false'); });
          pill.setAttribute('aria-pressed', 'true');
          var val = pill.getAttribute('data-filter-value');
          items.forEach(function (item) {
            var tags = (item.getAttribute('data-filter-tags') || '').split(',');
            item.style.display = (val === 'all' || tags.indexOf(val) > -1) ? '' : 'none';
          });
        });
      });
    });

    // Tabs (About page)
    qsa('[data-tabs]').forEach(function (tabs) {
      var buttons = qsa('[data-tab]', tabs);
      var panels = qsa('[data-tabpanel]', tabs);
      function activate(name) {
        var match = buttons.filter(function (b) { return b.getAttribute('data-tab') === name; })[0];
        if (!match) return;
        buttons.forEach(function (b) { b.setAttribute('aria-selected', b === match ? 'true' : 'false'); });
        panels.forEach(function (p) { p.setAttribute('data-active', p.getAttribute('data-tabpanel') === name ? 'true' : 'false'); });
      }
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          activate(btn.getAttribute('data-tab'));
          history.replaceState(null, '', '#' + btn.getAttribute('data-tab'));
        });
      });
      window.addEventListener('hashchange', function () {
        var hash = (location.hash || '').replace('#', '');
        if (hash) activate(hash);
      });
      var initialHash = (location.hash || '').replace('#', '');
      if (initialHash) activate(initialHash);
    });

    // Demo-safe forms: no network calls, just a local success state
    qsa('[data-demo-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.setAttribute('data-submitted', 'true');
      });
    });
  });
})();
