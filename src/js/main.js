// Styles
import '../scss/main.scss';

// MDBootstrap
import { Modal, Ripple, Dropdown, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

// Modules
import { UtilityDomManager } from './modules/utility';

function MainDomManager() {
    const domUtils = UtilityDomManager();

    const addEvents = () => {
        const navbar = document.querySelector('#navbar');
        domUtils.scrollNavbar(navbar);
    };

    const initApp = () => {
        initMDB({ Modal, Ripple, Dropdown, Collapse });
        addEvents();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
