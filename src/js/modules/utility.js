
function UtilityDomManager() {
    const scrollNavbar = (navbar) => {
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            (window.pageYOffset > 100)
                ? navbar.classList.add('scrolled')
                : navbar.classList.remove('scrolled');
        });
    };

    return { scrollNavbar };
}

export { UtilityDomManager };
