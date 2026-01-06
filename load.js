// Theme sofort beim Laden anwenden (vor DOMContentLoaded)
(function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
    }
})();

// Theme Toggle und Footer Scroll
document.addEventListener('DOMContentLoaded', function () {
    // Theme auf body anwenden falls noch nicht geschehen
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Theme Toggle initialisieren
    initThemeToggle();

    // Footer Scroll Behavior initialisieren
    initFooterScroll();
});

// Theme Toggle Funktion
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    if (!themeToggleBtn) {
        console.error('Theme toggle Button nicht gefunden');
        return;
    }

    // SVG Icons direkt erstellen statt aus HTML zu lesen (wegen live-server Injection)
    const sunIconPath = 'M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708';
    const moonIconPath = 'M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286';

    let isDark = localStorage.getItem('theme') === 'dark';

    // Button Icon aktualisieren
    function updateIcon() {
        const path = isDark ? moonIconPath : sunIconPath;
        themeToggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="theme-icon" viewBox="0 0 16 16">
                <path d="${path}"></path>
            </svg>
        `;
    }

    // Initiales Icon setzen
    updateIcon();

    // Theme Toggle Event
    themeToggleBtn.addEventListener('click', function () {
        isDark = !isDark;

        if (isDark) {
            document.body.classList.add('dark-mode');
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }

        updateIcon();
    });
}

// Footer Scroll Behavior Funktion
function initFooterScroll() {
    const loadedFooter = document.querySelector('.scroll-activated-footer');
    if (!loadedFooter) {
        console.warn('Footer nicht gefunden');
        return;
    }

    let isFooterVisible = false;
    let baseContentHeight = null;

    // Speichere die ursprüngliche Content-Höhe (ohne Footer-Padding)
    setTimeout(() => {
        document.body.classList.remove('footer-visible');
        setTimeout(() => {
            baseContentHeight = document.querySelector('main').scrollHeight;
        }, 50);
    }, 50);

    function checkScroll() {
        if (baseContentHeight === null) return;

        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        // Berechne Schwellenwerte mit Hysterese
        // showThreshold: Wann Footer EINBLENDEN (wenn fast am Ende)
        // hideThreshold: Wann Footer AUSBLENDEN (wenn weiter oben)
        const showThreshold = (baseContentHeight - viewportHeight) * 0.8;  // 80% gescrollt
        const hideThreshold = (baseContentHeight - viewportHeight) * 0.6;  // 60% gescrollt

        let shouldShowFooter;
        if (isFooterVisible) {
            // Wenn Footer sichtbar: muss unter hideThreshold scrollen zum Ausblenden
            shouldShowFooter = scrollPosition > hideThreshold;
        } else {
            // Wenn Footer nicht sichtbar: muss über showThreshold scrollen zum Einblenden
            shouldShowFooter = scrollPosition > showThreshold;
        }

        // Nur aktualisieren, wenn sich der Zustand ändert
        if (shouldShowFooter !== isFooterVisible) {
            isFooterVisible = shouldShowFooter;

            if (shouldShowFooter) {
                loadedFooter.classList.add('visible');
                document.body.classList.add('footer-visible');
            } else {
                loadedFooter.classList.remove('visible');
                document.body.classList.remove('footer-visible');
            }
        }
    }

    // Throttle für bessere Performance
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(checkScroll);
    });

    // Initialen Zustand prüfen
    setTimeout(checkScroll, 200);
}