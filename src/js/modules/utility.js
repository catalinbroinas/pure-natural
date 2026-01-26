import { Collapse } from "mdb-ui-kit/js/mdb.es.min";

function UtilityDomManager() {
    const scrollNavbar = (navbar) => {
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            (window.pageYOffset > 100)
                ? navbar.classList.add('scrolled')
                : navbar.classList.remove('scrolled');
        });
    };

    const collapseNavbar = (navbar) => {
        if (!navbar) return;

        const navbarCollapse = navbar.querySelector('#navbarSupportedContent');
        if (!navbarCollapse) return;

        const MOBILE_BREAKPOINT = 992;
        const HIDE_DELAY = 300;

        const navbarLinks = navbarCollapse.querySelectorAll('.nav-link');
        const toggleButton = navbar.querySelector('.navbar-toggler');
        const collapseInstance = new Collapse(navbarCollapse, { toggle: false });

        const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

        // Tap on link
        navbarLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (!isMobile()) return;
                setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
            });
        });

        // Scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            if (!isMobile()) return;
            const scrollY = window.scrollY;
            if (
                scrollY - lastScroll > 19 &&
                navbarCollapse.classList.contains('show')
            ) {
                setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
            }
        });

        // Tap outside
        document.addEventListener('click', (e) => {
            if (!isMobile()) return;
            if (!navbarCollapse.classList.contains('show')) return;

            const clickedInsideMenu = navbarCollapse.contains(e.target);
            const clickedToggle = toggleButton.contains(e.target);

            if (!clickedInsideMenu && !clickedToggle) {
                setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
            }
        });
    };

    return { scrollNavbar, collapseNavbar };
}

export { UtilityDomManager };
