import Logo from "./Logo";
import Menu from "./Menu";
import SearchBox from "./SearchBox";
import Button from "./Button";
import logoImage from '../assets/header-logo.png';
import SearchIcon from '../assets/search.svg';

const Header = () => {
    return (
        <div className="flex justify-between items-center mt-[40px]">
            <div>
                <Logo link='/' name='Site name' image={logoImage}/>
            </div>
            <div>
                <Menu items={
                    [
                        {name: 'Home', link: '/'},
                        {name: 'About', link: '/about'},
                        {name: 'Portfolio', link: '/portfolio'},
                        {name: 'Product', link: '/product'},
                        {name: 'Career', link: '/career'},
                        {name: 'Blog', link: '/blog'},
                    ]
                            }
                />
            </div>
            <div className="flex items-center">
                <div className="flex">
                    <SearchBox name='Search Here' image={SearchIcon}/>
                    <a href='#'>
                        <Button text='Contact Us' color='primary'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;