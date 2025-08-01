
function ProductModalBody({ 
    product : { 
        name,
        amount,
        targetGroup,
        composition,
        description
     }
}) {
    const imageSrc = 'https://mdbootstrap.com/img/new/textures/full/30.jpg';

    return (
        <div className="modal-body">
            <div className="row align-items-center gx-lg-5">
                <ProductName image={imageSrc} name={name} />
                <ProductDetails 
                    amount={amount}
                    targetGroup={targetGroup}
                    composition={composition}
                    description={description}
                />
            </div>
        </div>
    );
}

function ProductName({ image, name }) {
    return (
        <div className="col-lg-5 mb-5 mb-lg-0">
            <div 
                className="bg-image ripple rounded-6 shadow-5-strong"
                data-mdb-ripple-init
                data-mdb-ripple-color="light"
            >
                <img
                    src={image}
                    className="w-100"
                />

                <div className="mask mask-strong-dark">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="px-4 py-5 px-md-5 text-white text-center">
                            <h3 className="text-uppercase fw-bold mb-4">
                                {name}
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="hover-overlay">
                    <div className="mask mask-effect-1977"></div>
                </div>
            </div>
        </div>
    );
}

function ProductDetails({
    amount,
    targetGroup,
    composition,
    description
}) {
    return (
        <div className="col-lg-7 mb-4 mb-lg-0">
            {amount && (
                <div className="d-flex align-items-start mb-5">
                    <div className="flex-shrink-0">
                        <div className="rounded-4 shadow-2-strong bg-accent p-3">
                            <i className="fa-solid fa-bottle-water fa-lg text-white fa-fw"></i>
                        </div>
                    </div>

                    <div className="flex-grow-1 ms-4">
                        <h6 className="fw-bold mb-1">Cantitate</h6>
                        <p className="text-muted mb-0">
                            Pet din plastic de {amount}ml.
                        </p>
                    </div>
                </div>
            )}

            {targetGroup && (
                <div className="d-flex align-items-start mb-5">
                    <div className="flex-shrink-0">
                        <div className="rounded-4 shadow-2-strong bg-accent p-3">
                            <i className="fa-solid fa-venus fa-lg text-white fa-fw"></i>
                        </div>
                    </div>

                    <div className="flex-grow-1 ms-4">
                        <h6 className="fw-bold mb-1">Grup țintă</h6>
                        <p className="text-muted mb-0">
                            Destinat, in special, {targetGroup}lor.
                        </p>
                    </div>
                </div>
            )}

            {composition && (
                <div className="d-flex align-items-start mb-5">
                    <div className="flex-shrink-0">
                        <div className="rounded-4 shadow-2-strong bg-accent p-3">
                            <i className="fa-solid fa-leaf fa-lg text-white fa-fw"></i>
                        </div>
                    </div>

                    <div className="flex-grow-1 ms-4">
                        <h6 className="fw-bold mb-1">Compoziție</h6>
                        <p className="text-muted mb-0">
                            {composition}
                        </p>
                    </div>
                </div>
            )}

            {description && (
                <div className="d-flex align-items-start mb-5">
                    <div className="flex-shrink-0">
                        <div className="rounded-4 shadow-2-strong bg-accent p-3">
                            <i className="fa-solid fa-bolt fa-lg text-white fa-fw"></i>
                        </div>
                    </div>

                    <div className="flex-grow-1 ms-4">
                        <h6 className="fw-bold mb-1">Descriere</h6>
                        <p className="text-muted mb-0">
                            {description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductModalBody;
