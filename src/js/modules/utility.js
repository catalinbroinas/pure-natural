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

        const MOBILE_BREAKPOINT = 992;
        const navbarCollapse = navbar.querySelector('#navbarSupportedContent');
        if (!navbarCollapse) return;

        const navbarLinks = navbarCollapse.querySelectorAll('.nav-link');
        const collapseInstance = new Collapse(navbarCollapse, { toggle: false });

        navbarLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (window.innerWidth < MOBILE_BREAKPOINT) {
                    collapseInstance.hide();
                }
            });
        });

        window.addEventListener('scroll', () => {
            if (
                window.innerWidth < MOBILE_BREAKPOINT &&
                navbarCollapse.classList.contains('show')
            ) {
                collapseInstance.hide();
            }
        });
    };

    return { scrollNavbar, collapseNavbar };
}

export { UtilityDomManager };
