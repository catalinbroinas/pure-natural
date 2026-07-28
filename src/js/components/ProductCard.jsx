import { useEffect } from "react";

// Constants
import {
    PRODUCT_CATEGORY_ICONS,
    PRODUCT_DEFAULT_ICON
} from "../constants/products";

// MDB
import { Modal, Ripple, initMDB } from "mdb-ui-kit/js/mdb.es.min";

function ProductCard({ product }) {
    const { image: productImage, name, category, price } = product;
    const icon = PRODUCT_CATEGORY_ICONS[category] ?? PRODUCT_DEFAULT_ICON;

    useEffect(() => {
        initMDB({ Ripple, Modal });
    }, []);

    return (
        <div className="card card-product h-100">
            <div
                className="overflow-hidden shadow-4-strong rounded-6 mx-3 mt-n3"
            >
                <div
                className="bg-image hover-overlay hover-zoom no-hover-mobile ratio ratio-4x3"
                data-mdb-ripple-init=""
                data-mdb-ripple-color="light"
                >
                    <img
                        src={productImage.cardImage}
                        className="object-fit-cover"
                        alt={name}
                        loading="lazy"
                    />
                    <button
                        className="btn-reset mask mask-product"
                        type="button"
                        data-mdb-modal-init
                        data-mdb-target={`#product-modal-${product.id}`}
                        aria-label={`Detalii despre ${name}`}
                    ></button>
                </div>
            </div>

            <div className="card-body d-flex flex-column">
                <h3 className="card-title mb-2">{name}</h3>
                <h4 className="card-subtitle mb-2 mt-auto">
                    <i className={`fa-solid ${icon} text-muted me-2`} aria-hidden="true"></i>
                    {category}
                </h4>
                <p className="price m-0">{price} lei</p>
            </div>
        </div>
    );
}

export default ProductCard;
