// Roots & Bloom: small progressive enhancements. The site works without this file.
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  // FAQ category tabs
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.faq-tab'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('.faq-group'));
  function showGroup(id) {
    tabs.forEach(function (tab) {
      var on = tab.getAttribute('data-group') === id;
      tab.setAttribute('aria-selected', String(on));
      tab.tabIndex = on ? 0 : -1;
    });
    groups.forEach(function (group) { group.hidden = group.id !== id; });
  }
  if (tabs.length) {
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { showGroup(tab.getAttribute('data-group')); });
      tab.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        var next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        next.focus();
        showGroup(next.getAttribute('data-group'));
      });
    });
    showGroup(tabs[0].getAttribute('data-group'));
  }

  // Commission calculator
  var range = document.getElementById('orders');
  var totalOut = document.getElementById('orders-total');
  var commissionOut = document.getElementById('orders-commission');
  function gbp(n) { return '£' + Math.round(n).toLocaleString('en-GB'); }
  function updateCalc() {
    var total = Number(range.value);
    totalOut.textContent = gbp(total);
    commissionOut.textContent = gbp(total * 0.1);
  }
  if (range && totalOut && commissionOut) {
    range.addEventListener('input', updateCalc);
    updateCalc();
  }

  // Enquiry form: opens the visitor's email app with the details filled in.
  // Swap for a form service (Formspree, Netlify Forms etc.) when one is chosen.
  var form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var subject = 'Nursery photography enquiry: ' + (data.get('setting') || '');
      var body = [
        'Name: ' + (data.get('name') || ''),
        'Setting: ' + (data.get('setting') || ''),
        'Email: ' + (data.get('email') || ''),
        '',
        data.get('message') || ''
      ].join('\n');
      window.location.href = 'mailto:hello@rootsandbloom.co?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
