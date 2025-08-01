
function ProductModalHeader({ product: { name } }) {
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="product-modalLabel">
                {name} – Detalii produs
            </h5>

            <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Închide"
            ></button>
        </div>
    );
}

export default ProductModalHeader;
