document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    const isDarkMode = html.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';

    darkModeToggle.addEventListener('click', function() {
        const isNowDark = html.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
        darkModeToggle.textContent = isNowDark ? '☀️' : '🌙';
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                html.classList.add('dark-mode');
                darkModeToggle.textContent = '☀️';
            } else {
                html.classList.remove('dark-mode');
                darkModeToggle.textContent = '🌙';
            }
        }
    });
});
