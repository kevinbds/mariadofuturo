// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    const body = document.body;

    // Verifica se o dark mode já foi ativado antes
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }

    // Toggle dark mode ao clicar no botão
    darkModeToggle.addEventListener('click', function() {
        const isCurrentlyDark = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isCurrentlyDark);
        darkModeToggle.textContent = isCurrentlyDark ? '☀️' : '🌙';
    });
});
