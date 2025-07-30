// Styles
import '../scss/main.scss';

// MDBootstrap
import { Modal, Ripple, Dropdown, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

// Modules
import { UtilityDomManager } from './modules/utility';

// React
import { createRoot } from 'react-dom/client';

// Components
import ProductList from './components/ProductList';

// Data
import products from './data/products';

function MainDomManager() {
    const domUtils = UtilityDomManager();

    const addEvents = () => {
        const navbar = document.querySelector('#navbar');
        domUtils.scrollNavbar(navbar);
    };

    const renderProducts = () => {
        const container = document.querySelector('#react-products');
        if (!container) return;

        const root = createRoot(container);
        root.render(<ProductList products={products} />);
    };

    const initApp = () => {
        initMDB({ Modal, Ripple, Dropdown, Collapse });
        addEvents();
        renderProducts();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
