
function ProductModalHeader({ product: { name, id } }) {
    return (
        <div className="modal-header">
            <h5 className="modal-title" id={`product-modalLabel-${id}`}>
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
