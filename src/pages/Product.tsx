import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import ProductsSection from "../components/ProductsSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

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
            <div className="container mx-auto mb-110">
                <ProductsSection
                    title="Our Owning Products"
                    subTitle="Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec <br/> habemus sea ut. His nibh scripta in. In sea vocibus facilisis."
                />
            </div>
            <div className='mb-100'>
                <ContactUs
                    title='Facing Problem? <br/> Lets Get In Touch Now'
                    firstName='First Name'
                    lastName='Last Name'
                    email='Your Email Address'
                    problem='Which Related Problem You Are Facing?'
                    message='Type Your Message'
                />
            </div>
            <footer>
                <Footer
                    copyRight="Copyright@themefisher2020"
                />
            </footer>
        </div>
    )
}

export default Product;