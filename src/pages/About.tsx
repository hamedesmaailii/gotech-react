import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import FeatureBlock from "../components/FeatureBlock";
import firstImg from '../assets/about-feature-img.png';
import secondImg from '../assets/third-img.png';
import CardSlider from "../components/CardSlider";
import Gallery from "../components/Gallery";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <header>
                <div className="container mx-auto">  
                    <Header />
                </div>
            </header>
            <Breadcrumb
                title="About Us"
                items={[
                    {label: 'Home', path: '/'},
                    {label: 'About'}
                ]}
            />
            <div className="container mx-auto mt-[74px]">
                <FeatureBlock
                    imageSrc={firstImg}
                    altText="feature first img"
                    title="Overview Of Our <br/> Company"
                    firstDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br/> sed diam nonumy eirmod tempor invidunt ut labore et <br/> dolore magna aliquyam erat, sed diam voluptua. vero"
                    secondDescription="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed <br/> diam nonumy eirmod tempor invidunt ut labore ."
                    imagePosition="right"
                />
            </div>
            <div className="container mx-auto mt-110">
                <FeatureBlock
                    imageSrc={secondImg}
                    altText="about feature second img"
                    imagePosition="left"
                    title="We are here to <br/> always help you"
                    firstDescription="Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, a <br/> elaboraret interpretaris, sed diceret concludaturque nasdo <br/> habemus sea ut. His nibh scripta in. In sea vocibus facilisis. "
                    secondDescription="vel cu paulo doctus vidsse. Iudico dicant nostrum nec aIn <br/> detraxit eleifend duo, alterum iudicabit consectetuer per."
                />
            </div>
            <div className="container mx-auto my-100">
                <CardSlider
                    title="What is the <br/> Speciality Of Us?"
                />
            </div>
            <div className="container mx-auto mb-100">
                <Gallery
                    title="Our Featured Gallery"
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

export default About;