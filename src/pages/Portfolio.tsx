import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import PortfolioCardSection from "../components/PortfolioCardsSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Portfolio = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header />
            </div>
            <Breadcrumb
                title="Our Portfolio"
                items={[
                    {label: "Home", path: "/"},
                    {label: "Portfolio"}
                ]}
            />
            <div className="mb-110">
                <PortfolioCardSection
                    title="Some Of Our Works"
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

export default Portfolio;