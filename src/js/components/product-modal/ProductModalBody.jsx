import {
    PRODUCT_TARGET_GROUP_LABEL,
    PRODUCT_DETAIL_ICONS
} from "../../constants/products";

function ProductModalBody({ product }) {
    const {
        name,
        image,
        amount,
        targetGroup,
        composition,
        description
    } = product;

    return (
        <div className="modal-body">
            <div className="row align-items-center gx-xl-5 g-lg-4 g-md-5 g-4">
                <ProductVisual image={image.modalImage} name={name} />

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

function ProductVisual({ image, name }) {
    return (
        <div className="col-xl-5 col-lg-6 col-12">
            <div
                className="bg-image rounded-6 shadow-5-strong"
                data-mdb-ripple-init
                data-mdb-ripple-color="light"
            >
                <img
                    src={image}
                    className="w-100"
                    alt=""
                    loading="lazy"
                />

                <div className="mask mask-dark">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="px-4 py-5 px-md-5 text-white text-center">
                            <span
                                className="h3 text-uppercase fw-bold m-0"
                                aria-hidden="true"
                            >
                                {name}
                            </span>
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
    const details = [
        amount && {
            icon: PRODUCT_DETAIL_ICONS.AMOUNT,
            title: 'Cantitate',
            text: `Sticlă de ${amount} ml.`
        },
        targetGroup && {
            icon: PRODUCT_DETAIL_ICONS.TARGET_GROUP[targetGroup],
            title: 'Grup țintă',
            text: `${PRODUCT_TARGET_GROUP_LABEL[targetGroup]}.`
        },
        composition && {
            icon: PRODUCT_DETAIL_ICONS.COMPOSITION,
            title: 'Compoziție',
            text: composition
        },
        description && {
            icon: PRODUCT_DETAIL_ICONS.DESCRIPTION,
            title: 'Descriere',
            text: description
        }
    ].filter(Boolean);

    return (
        <div className="col-xl-7 col-lg-6 col-12">
            <div className="d-flex flex-column gap-xl-5 gap-lg-4 gap-md-5 gap-4">
                 {details.map((item, index) => (
                    <ProductDetailsItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}

function ProductDetailsItem({ icon, title, text }) {
    const iconClass = `fa-solid ${icon} text-white fa-lg fa-fw`;

    return (
        <div className="d-flex align-items-start">
            <div className="flex-shrink-0">
                <div className="rounded-4 shadow-2-strong bg-brand p-3">
                    <i className={iconClass} aria-hidden="true"></i>
                </div>
            </div>

            <div className="flex-grow-1 ms-4">
                <h6 className="fw-bold mb-1">{title}</h6>
                <p className="text-muted-strong mb-0">{text}</p>
            </div>
        </div>
    );
}

export default ProductModalBody;
