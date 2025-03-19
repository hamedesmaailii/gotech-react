import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";

import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Video from "../components/Video";

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
            <div className="mt-30 mb-[94px]">
                <Video
                    title="Why GOtech??"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  diam nonumy eirmod tempor <br/> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et <br/> accusam et justo duo dolores et ea rebum Stet."
                />
            </div>
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