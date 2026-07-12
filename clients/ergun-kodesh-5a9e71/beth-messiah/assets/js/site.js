// Beth Messiah — shared site behavior (nav, search, accordion, filters, forms).
// No network calls. Demo-safe: nothing here submits data anywhere.
(function () {
  var SEARCH_INDEX = [
    { title: 'Home', href: 'index.html', keywords: 'home welcome shabbat' },
    { title: 'About — Our Story & Mission', href: 'about.html', keywords: 'about story mission messianic judaism' },
    { title: 'What We Believe', href: 'beliefs.html', keywords: 'beliefs statement of faith doctrine torah messiah' },
    { title: 'Our Team', href: 'team.html', keywords: 'team staff rabbi leaders' },
    { title: 'Plan Your Visit', href: 'visit.html', keywords: 'visit new here directions parking what to wear faq oneg' },
    { title: 'Events & Calendar', href: 'events.html', keywords: 'events calendar shabbat feasts holy days' },
    { title: 'Ministries & Groups', href: 'ministries.html', keywords: 'ministries groups youth children havurah equip shabbat school pogs' },
    { title: 'Messages', href: 'messages.html', keywords: 'messages sermons watch listen youtube' },
    { title: 'Resources', href: 'resources.html', keywords: 'resources brochures scripture reading plan links' },
    { title: 'Give', href: 'give.html', keywords: 'give giving donate tithe offering' },
    { title: 'Contact', href: 'contact.html', keywords: 'contact prayer request email phone map' }
  ];

  function qs(sel, el) { return (el || document).querySelector(sel); }
  function qsa(sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }

  document.addEventListener('DOMContentLoaded', function () {
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

    qsa('[data-demo-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.setAttribute('data-submitted', 'true');
      });
    });
  });
})();
