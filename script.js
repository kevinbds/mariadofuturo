document.addEventListener('DOMContentLoaded', function () {
    var root = document.documentElement;
    var toggle = document.getElementById('themeToggle');
    var icon = toggle ? toggle.querySelector('.theme-toggle__icon') : null;

    function syncIcon() {
        if (!icon) return;
        icon.textContent = root.classList.contains('dark-mode') ? '☀️' : '🌙';
    }

    syncIcon();

    if (toggle) {
        toggle.addEventListener('click', function () {
            var isDark = root.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', isDark);
            syncIcon();
        });
    }

    // Follow the system preference only while the user hasn't chosen manually.
    var media = window.matchMedia('(prefers-color-scheme: dark)');
    media.addEventListener('change', function (e) {
        if (localStorage.getItem('darkMode') !== null) return;
        root.classList.toggle('dark-mode', e.matches);
        syncIcon();
    });

    // Current year in the footer.
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Scroll-reveal animations.
    var revealEls = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        revealEls.forEach(function (el) { el.classList.add('is-visible'); });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });
});
