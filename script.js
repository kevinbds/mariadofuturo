document.addEventListener('DOMContentLoaded', function () {
    // Ano atual no rodapé.
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Animações de scroll-reveal.
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
