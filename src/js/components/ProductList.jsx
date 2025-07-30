import ProductCard from "./ProductCard";

function ProductList({ products }) {
    return (
        <>
            {
                products.map(product => (
                    <div className="col" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))
            }
        </>
    );
}

export default ProductList;
