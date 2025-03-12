import { Link } from 'react-router-dom';

type LogoProps = {
    image: string;
    name: string;
    link: string
}

const Logo : React.FC<LogoProps> = ( {image, name, link} ) => {
    return (
    <div>
        <Link to={link}>
            <img src={image} alt={name} />
        </Link>
    </div>
    )
}

export default Logo;