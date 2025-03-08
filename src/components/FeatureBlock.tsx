import React from "react";
import Button from "./Button";

type FeatureBlockProps = {
    imageSrc: string,
    title: string,
    firstDescription: string,
    secondDescription: string,
    altText: string,
    imagePosition: 'left' | 'right',
    buttonText?: string,
    buttonLink?: string
};

const FeatureBlock: React.FC<FeatureBlockProps> = ({imageSrc, title, firstDescription, secondDescription, altText, imagePosition, buttonText, buttonLink}) => {
    return (
        <div className={`flex ${imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center justify-around`}>
            <div className="flex">
                <img src={imageSrc} alt={altText}/>
            </div>
            <div className="flex flex-col">
                <h2 className="text-black2 text-large leading-[46px]" dangerouslySetInnerHTML={{__html: title}}></h2>
                <p className="text-black5 text-regular leading-[27px] mt-[30px] mb-[20px]" dangerouslySetInnerHTML={{__html: firstDescription}}></p>
                <p className="text-black5 text-regular leading-[27px] mb-[25px]" dangerouslySetInnerHTML={{__html: secondDescription}}></p>
                {buttonText && buttonLink && (
                    <a href={buttonLink}>
                        <Button text={buttonText} color="primary" />
                    </a>
                )}
            </div>
        </div>
    )
}

export default FeatureBlock;