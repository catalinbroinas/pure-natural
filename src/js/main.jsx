// Styles
import '../scss/main.scss';

// MDBootstrap
import { Modal, Ripple, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

// Modules
import { NavbarManager } from './modules/dom/navbarManager';

// React
import { createRoot } from 'react-dom/client';

// Components
import ProductList from './components/ProductList';

// Data
import products from './data/products';

function MainDomManager() {
    const addEvents = () => {
        const navbar = document.querySelector('#navbar');
        const navbarManager = NavbarManager(navbar);

        navbarManager.scrollNavbar();
        navbarManager.collapseNavbar();
    };

    const renderProducts = () => {
        const container = document.querySelector('#react-products');
        if (!container) return;

        const root = createRoot(container);
        root.render(<ProductList products={products} />);
    };

    const initApp = () => {
        initMDB({ Modal, Ripple, Collapse });
        addEvents();
        renderProducts();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
