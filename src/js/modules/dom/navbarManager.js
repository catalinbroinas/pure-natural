import { Collapse } from "mdb-ui-kit/js/mdb.es.min";

function NavbarManager(navbar) {
    if (!navbar) {
        console.error('Navbar not found!');
        return {
            scrollNavbar: () => { },
            collapseNavbar: () => { },
        };
    }

    const scrollNavbar = () => {
        window.addEventListener('scroll', () => {
            (window.pageYOffset > 100)
                ? navbar.classList.add('scrolled')
                : navbar.classList.remove('scrolled');
        });
    };

    const collapseNavbar = () => {
        const navbarCollapse = navbar.querySelector('#navbarSupportedContent');
        if (!navbarCollapse) return;

        const MOBILE_BREAKPOINT = 992;
        const HIDE_DELAY = 300;

        const navbarLinks = navbarCollapse.querySelectorAll('.nav-link');
        const toggleButton = navbar.querySelector('.navbar-toggler');
        const collapseInstance = new Collapse(navbarCollapse, { toggle: false });

        const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;
        const isOpen = () => navbarCollapse.classList.contains('show');

        // Tap on link
        navbarLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (!isMobile() || !isOpen()) return;
                setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
            });
        });

        // Scroll
        window.addEventListener('scroll', () => {
            if (!isMobile() || !isOpen()) return;

            if (window.scrollY > 20) {
                setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
            }
        });

        // Tap outside
        document.addEventListener('click', (e) => {
            if (!isMobile() || !isOpen()) return;

            const clickedInsideMenu = navbarCollapse.contains(e.target);
            const clickedToggle = toggleButton.contains(e.target);

            if (!clickedInsideMenu && !clickedToggle) {
                setTimeout(() => collapseInstance.hide(), HIDE_DELAY);
            }
        });
    };

    return { scrollNavbar, collapseNavbar };
}

export { NavbarManager };
