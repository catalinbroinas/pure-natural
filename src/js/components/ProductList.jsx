import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

function ProductList({ products }) {
    return (
        <>
            {
                products.map(product => (
                    <div className="col" key={product.id}>
                        <ProductCard product={product} />
                        <ProductModal product={product} />
                    </div>
                ))
            }
        </>
    );
}

export default ProductList;
