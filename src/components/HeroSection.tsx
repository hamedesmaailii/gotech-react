import React from "react";
import Button from "./Button";

type HeroSectionProps = {
    title: string;
    subTitle: string;
    
};

const HeroSection: React.FC<HeroSectionProps> = ({title, subTitle}) => {
    return (
        <section>
            <div className="flex flex-col items-center mt-[35px]">
                <h1 className="text-xlarge text-black2 leading-[58px] text-center mb-[24px]" dangerouslySetInnerHTML={{__html: title}}></h1>
                <p className="text-small text-black5 leading-[25px] text-center mb-[35px]" dangerouslySetInnerHTML={{__html: subTitle}}></p>
                <div className="flex flex-row gap-[36px]">
                    <a className="block" href="#">
                        <Button text="Our Works" color="primary"/>
                    </a>
                    <a className="block" href="#">
                        <Button text="Know More" outline={true}/>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default HeroSection;