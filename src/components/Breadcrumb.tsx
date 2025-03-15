import React from "react";
import { Link } from 'react-router-dom';


type BreadcrumbProps = {
    items: BreadcrumbItems[],
    title: string
}

interface BreadcrumbItems {
    label: string,
    path?: string,
}

const Breadcrumb : React.FC<BreadcrumbProps> = ({items, title}) => {
    return (
        <div className="flex flex-col justify-center text-center bg-[url('assets/breadCrumbBg.png')] bg-no-repeat bg-cover bg-center h-[471px] -mt-[87px] mx-[50px]">
            <h2 className="text-black2 text-xlarge leading-[58px] mb-[35px] mt-[76px]">{title}</h2>
            <nav aria-label="breadcrumb">
                <ul className="flex justify-center">
                    {items.map((item, index) => (
                        <li key={index} className="">
                            {item.path ? (
                                <Link to={item.path} className="text-black5 text-semi-normal leading-[24px] font-normal hover:text-primary transition duration-[0.3s]">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-black5 text-semi-normal leading-[24px] font-normal">{item.label}</span>
                            )}
                            {index < items.length - 1 && <span className="mx-2">/</span>}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Breadcrumb;