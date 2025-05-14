// Styles
import '../scss/main.scss';

// MDBootstrap
import { Ripple, Dropdown, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

// Modules
import { UtilityDomManager } from './modules/utility';

function MainDomManager() {
    const domUtils = UtilityDomManager();

    const addEvents = () => {
        const navbar = document.querySelector('#navbar');
        domUtils.scrollNavbar(navbar);
    };

    const initApp = () => {
        initMDB({ Ripple, Dropdown, Collapse });
        addEvents();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
