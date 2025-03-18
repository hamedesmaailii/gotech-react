import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProductsSection from "../components/ProductsSection";

const Product = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header />
            </div>
            <Breadcrumb
                title="All Products"
                items={[
                    {label: "Home", path: '/'},
                    {label: "Product"}
                ]}
            />
            <div className="container mx-auto">
                <ProductsSection
                    title="Our Owning Products"
                    subTitle="Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec <br/> habemus sea ut. His nibh scripta in. In sea vocibus facilisis."
                />
            </div>
        </div>
    )
}

export default Product;