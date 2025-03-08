import React from "react";

type IconsProp = {
    items: IconsItems[],
    title: string,
}

interface IconsItems {
    imgSrc: string,
    imgLink: string,
    imgAlt: string,    
}

const getBgColor = (name: string) => {
    switch(name.toLocaleLowerCase()) {
        case 'facebook.com':
            return 'bg-linear-to-tr from-[var(--color-facebook-g-start)] to-[var(--color-facebook-g-end)]';
        case 'skype.com':
            return 'bg-linear-to-tr from-[var(--color-skype-g-start)] to-[var(--color-skype-g-end)]';
        case 'linkedin.com':
            return 'bg-linear-to-tr from-[var(--color-linkedin-g-start)] to-[var(--color-linkedin-g-end)]';
        case 'instagram.com':
            return 'bg-linear-to-tr from-[var(--color-instagram-g-start)] to-[var(--color-instagram-g-end)]';
        default:
            return 'bg-linear-to-tr from-[var(--color-facebook-g-start)] to-[var(--color-facebook-g-end)]';
    }
}

const SocialIcons: React.FC<IconsProp> = ({items, title}) => {
    return (
        <div className="flex flex-col">
            <strong className="text-FT text-regular leading-[20px] font-medium mb-[15px] block">{title}</strong>
            <ul className="flex gap-[20px]">
                {items.map((item: IconsItems, index) => {
                    return <li key={index}>
                            <a className={`flex justify-center items-center rounded-full w-[40px] h-[40px] ${getBgColor(item.imgAlt)}`} href={item.imgLink}>
                                <img src={item.imgSrc} alt={item.imgAlt} />
                            </a>
                           </li>
                })}
            </ul>
        </div>
    )
}

export default SocialIcons;