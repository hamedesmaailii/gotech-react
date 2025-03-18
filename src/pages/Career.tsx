import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const Career = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Header />
            </div>
            <Breadcrumb
                title="Career"
                items={[
                    {label: 'Home', path:'/'},
                    {label: 'Career'}
                ]}
            />
            <div className="mt-30 mb-[94px] text-center border border-dashed">Video Section</div>
            <div className="mb-[94px] text-center border border-dashed">Gallery Section</div>
            <div className="mb-[94px] text-center border border-dashed">Jobs Section</div>
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

export default Career;