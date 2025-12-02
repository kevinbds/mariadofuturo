document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    const storedDarkMode = localStorage.getItem('darkMode');
    let isDarkMode;

    if (storedDarkMode !== null) {
        isDarkMode = storedDarkMode === 'true';
    } else {
        isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    darkModeToggle.addEventListener('click', function() {
        const isCurrentlyDark = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isCurrentlyDark);
        darkModeToggle.textContent = isCurrentlyDark ? '☀️' : '🌙';
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                body.classList.add('dark-mode');
                darkModeToggle.textContent = '☀️';
            } else {
                body.classList.remove('dark-mode');
                darkModeToggle.textContent = '🌙';
            }
        }
    });
});
