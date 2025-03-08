import React from "react";

type ProductCardProps = {
    imageSrc: string,
    imageAlt: string,
    cardDescription: string,
    buttonLink: string,
    buttonText: string
}

const ProductCard : React.FC<ProductCardProps> = ({imageSrc, imageAlt, cardDescription, buttonLink, buttonText}) => {
    return (
        <div className="flex flex-col items-center bg-white shadow-regular rounded-[8px] px-[38px] py-[53px] w-[320px] h-[280px]">
            <img src={imageSrc} alt={imageAlt} />
            <p className="text-black9 text-regular leading-[27px] font-normal my-[35px] text-center" dangerouslySetInnerHTML={{__html:cardDescription}}></p>
            <a className="text-secondary text-normal leading-[21px] font-medium" href={buttonLink}>{buttonText}</a>
        </div>
    )
}

export default ProductCard;