import ProductModalHeader from "./product-modal/ProductModalHeader";
import ProductModalBody from "./product-modal/ProductModalBody";
import ProductModalFooter from "./product-modal/ProductModalFooter";

function ProductModal({ product }) {
    return (
        <div
            className="modal fade"
            id={`product-modal-${product.id}`}
            tabIndex="-1"
            aria-labelledby={`product-modalLabel-${product.id}`}
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <ProductModalHeader product={product} />
                    <ProductModalBody product={product} />
                    <ProductModalFooter />
                </div>
            </div>
        </div>
    );
}

export default ProductModal;
