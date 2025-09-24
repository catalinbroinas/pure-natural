
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
            <div className="row align-items-center gx-xl-5 g-lg-4 g-md-5 g-4">
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
                />

                <div className="mask mask-strong-dark">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="px-4 py-5 px-md-5 text-white text-center">
                            <h3 className="text-uppercase fw-bold m-0">
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
    const icons = {
        amountIcon: 'fa-bottle-water',
        targetGroupIcon: {
            women: 'fa-venus',
            men: 'fa-mars',
            all: 'fa-mars-and-venus'
        },
        compositionIcon: 'fa-leaf',
        descriptionIcon: 'fa-bolt'
    };

    const targetGroupLabel = {
        women: 'femei',
        men: 'bărbați',
        all: 'toate genurile'
    };

    const details = [
        amount && {
            icon: icons.amountIcon,
            title: 'Cantitate',
            text: `Pet de plastic de ${amount}ml.`
        },
        targetGroup && {
            icon: icons.targetGroupIcon[targetGroup],
            title: 'Grup țintă',
            text: `Potrivit pentru ${targetGroupLabel[targetGroup]}.`
        },
        composition && {
            icon: icons.compositionIcon,
            title: 'Compoziție',
            text: composition
        },
        description && {
            icon: icons.descriptionIcon,
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
                        iconClass={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    );
}

function ProductDetailsItem({ iconClass, title, text }) {
    return (
        <div className="d-flex align-items-start">
            <div className="flex-shrink-0">
                <div className="rounded-4 shadow-2-strong bg-accent p-3">
                    <i className={`fa-solid ${iconClass} text-white fa-lg fa-fw`}></i>
                </div>
            </div>

            <div className="flex-grow-1 ms-4">
                <h6 className="fw-bold mb-1">{title}</h6>
                <p className="text-muted mb-0">{text}</p>
            </div>
        </div>
    );
}

export default ProductModalBody;
