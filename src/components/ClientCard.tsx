import React from "react";

type ClientCardProps = {
    imgSrc: string,
    imgAlt: string,
    description: string,
    fullName: string,
    jobTitle: string
}

const ClientCard : React.FC<ClientCardProps> = ({imgSrc, imgAlt, description, fullName, jobTitle}) => {
    return (
        <div className="flex flex-col items-center">
            <img className=" w-[187px] h-[187px] rounded-[50px]" src={imgSrc} alt={imgAlt}/>
            <p className="text-black3 text-medium leading-[34px] font-normal mt-[23px] mb-[33px]" dangerouslySetInnerHTML={{__html: description}}></p>
            <span className="text-black2 text-normal leading-[30px] font-medium" dangerouslySetInnerHTML={{__html: fullName}}></span>
            <span className="text-black2 text-small leading-[30px] font-normal mt-[20px]" dangerouslySetInnerHTML={{__html: jobTitle}}></span>
        </div>
    )
}

export default ClientCard;