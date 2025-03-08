import React from "react";

type SpecialityCardProps = {
    image: string,
    imgAlt: string,
    cardTitle: string,
    cardDescription: string
}

const SpecialityCard : React.FC<SpecialityCardProps> = ({image, imgAlt, cardTitle, cardDescription}) => {
    return (
        <div className="flex flex-col items-center bg-white rounded-[8px] shadow-regular pt-[38px] pb-[53px] w-[350px]">
            <img className="w-[210px] h-[210px] rounded-[50px]" src={image} alt={imgAlt}/>
            <div className="text-medium leading-[24px] text-black2 mt-[14px] mb-[17px]">{cardTitle}</div>
            <p className="text-regular leading-[27px] text-black5 text-center" dangerouslySetInnerHTML={{__html:cardDescription}}></p>
        </div>
    )
}

export default SpecialityCard;