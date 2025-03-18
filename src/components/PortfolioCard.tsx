import React from "react";

interface PortfolioCardProps {
    imgSrc: string,
    imgAlt: string,
    cardTitle: string,
    cardDescription: string,
    buttonTitle: string,
    buttonLink: string
}

const PortfolioCard : React.FC<PortfolioCardProps> = ({imgSrc, imgAlt, cardTitle, cardDescription, buttonTitle, buttonLink}) => {
    return (
        <div className="flex flex-col bg-white shadow-regular rounded-[8px]">
            <img className="w-[370px] h-[280px]" src={imgSrc} alt={imgAlt} />
            <div className="px-[30px]">
                <strong className="text-black2 text-medium leading-[32px] font-normal mt-[33px] mb-[17px] block">{cardTitle}</strong>
                <p className="text-black5 text-regular leading-[27px] font-normal mb-[30px]" dangerouslySetInnerHTML={{__html: cardDescription}}></p>
                <a className="text-secondary text-normal leading-[21px] font-medium block mb-[52px]" href={buttonLink}>{buttonTitle}</a>
            </div>
        </div>
    )
}

export default PortfolioCard;