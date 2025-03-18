import React from "react";
import ProductCard from "./ProductCard";
import earth from '../assets/earth-2.0.png';
import lightAI from '../assets/lighting.png';
import hexLab from '../assets/hex-lab.png';
import aven from '../assets/aven.png';
import liva from '../assets/liva.png';
import ideaa from '../assets/ideaa.png';

type ProductsSectionProps = {
    title: string,
    subTitle: string,
}

const ProductsSection : React.FC<ProductsSectionProps> = ({title, subTitle}) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-black2 text-large leading-[46px]">{title}</h2>
            <p className="text-black5 text-regular leading-[27px] text-center mt-[30px] mb-[90px]" dangerouslySetInnerHTML={{__html:subTitle}}></p>
            <div className="grid grid-cols-3 gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                    <ProductCard
                        imageSrc={earth}
                        imageAlt="erath-2.0"
                        cardDescription="Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec"
                        buttonLink="#"
                        buttonText="Learn More"
                    />
                    <ProductCard
                        imageSrc={lightAI}
                        imageAlt="erath-2.0"
                        cardDescription="Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec"
                        buttonLink="#"
                        buttonText="Learn More"
                    />
                </div>
                <div className="flex flex-col gap-[30px] -mt-[50px]">
                    <ProductCard
                        imageSrc={hexLab}
                        imageAlt="erath-2.0"
                        cardDescription="Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec"
                        buttonLink="#"
                        buttonText="Learn More"
                    />
                    <ProductCard
                        imageSrc={aven}
                        imageAlt="erath-2.0"
                        cardDescription="Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec"
                        buttonLink="#"
                        buttonText="Learn More"
                    />
                </div>
                <div className="flex flex-col gap-[30px]">
                    <ProductCard
                        imageSrc={liva}
                        imageAlt="erath-2.0"
                        cardDescription="Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec"
                        buttonLink="#"
                        buttonText="Learn More"
                    />
                    <ProductCard
                        imageSrc={ideaa}
                        imageAlt="erath-2.0"
                        cardDescription="Lorem ipsum dolor sit amet, el accumsan liberavisse ex, ea nec"
                        buttonLink="#"
                        buttonText="Learn More"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductsSection;