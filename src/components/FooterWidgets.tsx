import React from "react";

type FooterWidgetsProps = {
    title: string,
    items: FooterWidgetsItems[]
}

interface FooterWidgetsItems {
    name: string,
    link?: string,
    icon?: React.ReactNode
}

const FooterWidgets : React.FC<FooterWidgetsProps> = ({items, title}) => {
    return (
        <div>
            <strong className="text-FT text-regular leading-[20px] font-medium mb-[24px] block">{title}</strong>
            <ul className="flex flex-col gap-[18px]">
                {items.map((item: FooterWidgetsItems) => {
                    let itemClasses = 'text-black7 text-xsmall leading-[28px] font-normal hover:text-primary transition duration-300';

                    return (
                        <li key={item.name} className="flex items-center">
                            {item.icon && <span className="text-primary text-normal mr-[10px]">{item.icon}</span>}
                            <a href={item.link} className={itemClasses}>{item.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FooterWidgets;