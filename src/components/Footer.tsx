import React from "react";
import FooterWidgets from "./FooterWidgets";
import Logo from "./Logo";
import logoImage from '../assets/header-logo.png'
import SocialIcons from "./FooterSocialIcons";
import facebookIcon from '../assets/facebook.png';
import skypeIcon from '../assets/skype.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';
import { FaPhoneAlt, FaLocationArrow, FaEnvelopeSquare } from 'react-icons/fa'

type FooterProps = {
    copyRight: string
}

const FooterIconLinks = [
    {name: '+(290) 520-7927', icon: <FaPhoneAlt />},
    {name: 'Dhaka,Bangladesh', icon: <FaLocationArrow />},
    {name: 'themefisher.com', icon: <FaEnvelopeSquare />},
]

const Footer : React.FC<FooterProps> = ({copyRight}) => {
    return (
        <footer className="w-full flex flex-col items-center bg-[url('assets/footerBg.png')] bg-contain bg-no-repeat bg-bottom">
            <div className="mb-[70px]">
                <Logo
                    image={logoImage}
                    link='#'
                    name="footer logo"
                />
            </div>
            <div className="container grid grid-cols-4 justify-items-center">
                <FooterWidgets
                    title='Contact Us'
                    items={FooterIconLinks}
                />
                <FooterWidgets
                    title='Our Company'
                    items={
                        [
                            {name: 'About', link: '#'},
                            {name: 'Product', link: '#'},
                            {name: 'Portfolio', link: '#'},
                            {name: 'Career', link: '#'},
                            {name: 'Blog', link: '#'},
                        ]
                    }
                />
                <FooterWidgets
                    title='Social Contacts'
                    items={
                        [
                            {name: 'Facebook', link: '#'},
                            {name: 'Linked In', link: '#'},
                            {name: 'Youtube', link: '#'},
                            {name: 'Vimeo', link: '#'},
                            {name: 'Skype', link: '#'},
                        ]
                    }
                />
                <div className="flex flex-col">
                    <div className="mb-[20px]">
                        <strong className="text-FT text-regular leading-[20px] font-medium mb-[24px] block">Address</strong>
                        <p className="text-black7 text-xsmall leading-[28px] font-normal">Internet Systems Consortium, Inc. 950 <br/> Charter Street Redwood City, CA USA.</p>
                    </div>
                <SocialIcons
                    title="Follow Us"
                    items={[
                        {imgSrc: facebookIcon, imgLink: 'https://facebook.com', imgAlt: 'facebook.com'},
                        {imgSrc: skypeIcon, imgLink: 'https://skype.com', imgAlt: 'skype.com'},
                        {imgSrc: linkedinIcon, imgLink: 'https://linkedin.com', imgAlt: 'linkedin.com'},
                        {imgSrc: instagramIcon, imgLink: 'https://instagram.com', imgAlt: 'instagram.com'},
                    ]}
                />
                </div>
            </div>
            <div className="mt-110 mb-[200px]">{copyRight}</div>
        </footer>
    )
}

export default Footer;