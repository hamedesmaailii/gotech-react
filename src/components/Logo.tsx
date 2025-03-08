type LogoProps = {
    image: string;
    name: string;
    link: string
}

const Logo : React.FC<LogoProps> = ( {image, name, link} ) => {
    return (
    <div>
        <a href={link}>
            <img src={image} alt={name} />
        </a>
    </div>
    )
}

export default Logo;