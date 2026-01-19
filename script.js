document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme == 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else if (currentTheme == 'light') {
        document.body.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
         // If no preference is saved, match system preference
        document.body.setAttribute('data-theme', 'dark');
    }

    themeToggleBtn.addEventListener('click', function() {
        let theme = 'light';
        if (document.body.getAttribute('data-theme') === 'light' || !document.body.getAttribute('data-theme')) {
            document.body.setAttribute('data-theme', 'dark');
            theme = 'dark';
        } else {
            document.body.setAttribute('data-theme', 'light');
            theme = 'light';
        }
        localStorage.setItem('theme', theme);
    });
});
