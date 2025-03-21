import Header from '../components/Header.tsx';
import HeroSection from '../components/HeroSection.tsx';
import FeatureBlock from '../components/FeatureBlock.tsx';
import secondImg from '../assets/second-img.png';
import thirdImage from '../assets/third-img.png';
import CardSlider from '../components/CardSlider.tsx';
import ProductsSection from '../components/ProductsSection.tsx';
import ClientSlider from '../components/ClientSlider.tsx';
import ContactUs from '../components/ContactUs.tsx';
import Footer from '../components/Footer.tsx';

const Home = () => {
    return (
        <>
            <header className='container mx-auto'>
                <Header />
            </header>
            <div className='w-full bg-[url(assets/hero-bg.png)] bg-no-repeat bg-contain h-screen mb-[170px]'>
                <HeroSection
                    title="We Create Simple Solution <br/> For Your Complex Task"
                    subTitle="Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret <br/> interpretaris, sed diceret concludaturque no. Verear habemus sea ut"
                />
            </div>
            <div className='container mx-auto mb-110'>
                <FeatureBlock
                    imageSrc={secondImg}
                    imagePosition='right'
                    altText='secondImage'
                    title='The Process <br/> About Our Work'
                    firstDescription='Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec <br/> elaboraret interpretaris, sed diceret concludaturque ndo. Verear <br/> habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed'
                    secondDescription='vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos <br/> In detraxit eleifend duo, alterum iudicabit consectetuer per ad.'
                    buttonLink='#'
                    buttonText='Know More'
                />
            </div>
            <div className='container mx-auto mb-110'>
                <FeatureBlock
                    imageSrc={thirdImage}
                    imagePosition='left'
                    altText='thirdImage'
                    title= 'We are here to <br/> always help you'
                    firstDescription='Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, a <br/> elaboraret interpretaris, sed diceret concludaturque nasdo </br> habemus sea ut. His nibh scripta in. In sea vocibus facilisis. '
                    secondDescription='vel cu paulo doctus vidsse. Iudico dicant nostrum nec aIn <br/> detraxit eleifend duo, alterum iudicabit consectetuer per.'
                />
            </div>
            <div className='mx-auto my-100 w-[1200px]'>
                <CardSlider
                    title="What is the <br/> Speciality Of Us?"
                />
            </div>
            <div className='container mx-auto mb-110'>
                <ProductsSection
                    title="Our Owning Products"
                    subTitle="Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec <br/> habemus sea ut. His nibh scripta in. In sea vocibus facilisis."
                />
            </div>
            <div className="container mx-auto text-center relative mb-100">
                <ClientSlider
                    title="What Our Client Says?"
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
        </>
      )
}

export default Home;