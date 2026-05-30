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

    // View All Projects Modal Trigger Logic
    const viewAllBtn = document.getElementById('view-all-projects-btn');
    const modal = document.getElementById('projects-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const okBtn = document.getElementById('modal-ok-btn');

    if (viewAllBtn && modal) {
        const openModal = () => {
            modal.classList.add('active');
            document.body.classList.add('modal-open');
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        };

        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        if (okBtn) {
            okBtn.addEventListener('click', closeModal);
        }

        // Close modal when clicking outside of the content box
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close modal when pressing the Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});
