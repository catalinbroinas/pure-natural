import { useEffect } from "react";
import { Ripple, initMDB } from "mdb-ui-kit/js/mdb.es.min";

function ProductCard({ product }) {
    const { image: productImage, name, category, price } = product;
    const icons = {
        'Parfum': 'fa-leaf',
        'Spray anti-țânțari': 'fa-spray-can',
        'Dezinfectant': 'fa-pump-medical',
        'Aromaterapie': 'fa-spa'
    };
    const DEFAULT_ICON = 'fa-leaf';
    const iconProduct = icons[category.trim()] || DEFAULT_ICON;

    useEffect(() => {
        initMDB({ Ripple });
    }, []);

    return (
        <div className="card card-product h-100">
            <div
                className="overflow-hidden shadow-4-strong rounded-6 mx-3 mt-n3"
            >
                <div
                className="bg-image hover-overlay hover-zoom ratio ratio-4x3"
                data-mdb-ripple-init=""
                data-mdb-ripple-color="light"
                >
                    <img
                        src={productImage.cardImage}
                        className="object-fit-cover"
                        alt={name}
                        loading="lazy"
                    />
                    <a
                        href="#!"
                        role="button"
                    >
                        <div className="mask mask-product" aria-hidden="true"></div>
                    </a>
                </div>
            </div>

            <div className="card-body d-flex flex-column">
                <h3 className="card-title mb-2">{name}</h3>
                <h4 className="card-sub-title mb-2 mt-auto">
                    <i className={`fa-solid ${iconProduct} text-muted me-2`} aria-hidden="true"></i>
                    {category}
                </h4>
                <p className="price m-0">{price} lei</p>
            </div>
        </div>
    );
}

export default ProductCard;
