import React from "react";
import PortfolioCard from "../components/PortfolioCard";

type PortfolioCardSectionProp = {
    title: string
}

const PortfolioCardSection : React.FC<PortfolioCardSectionProp> = ({title}) => {
    return (
        <div>
            <div>
                <h3 className="text-black2 text-large leading-[46px] mb-[44px] text-center">{title}</h3>
            </div>
            <div className="grid grid-cols-3 mx-auto w-[1170px] gap-[30px] mt-[74px] mb-110">
                <div className="flex flex-col gap-[50px]">
                    <PortfolioCard
                        imgSrc="src/assets/portfolioImg0.png"
                        imgAlt="image0"
                        cardTitle="Bibendum elit lacus"
                        cardDescription="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmo <br/> tempor invidunt ut labore de kostiabina."
                        buttonTitle="Learn More"
                        buttonLink="#"
                    />
                    <PortfolioCard
                        imgSrc="src/assets/portfolioImg3.png"
                        imgAlt="image3"
                        cardTitle="Laoreet metus"
                        cardDescription="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmo <br/> tempor invidunt ut labore de kostiabina."
                        buttonTitle="Learn More"
                        buttonLink="#"
                    />
                </div>
                <div className="flex flex-col gap-[50px]">
                    <PortfolioCard
                        imgSrc="src/assets/portfolioImg1.png"
                        imgAlt="image1"
                        cardTitle="Est urna nec"
                        cardDescription="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmo <br/> tempor invidunt ut labore de kostiabina."
                        buttonTitle="Learn More"
                        buttonLink="#"
                    />
                    <PortfolioCard
                        imgSrc="src/assets/portfolioImg4.png"
                        imgAlt="image4"
                        cardTitle="Eros magna posuere"
                        cardDescription="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmo <br/> tempor invidunt ut labore de kostiabina."
                        buttonTitle="Learn More"
                        buttonLink="#"
                    />
                </div>
                <div className="flex flex-col gap-[50px]">
                    <PortfolioCard
                        imgSrc="src/assets/portfolioImg2.png"
                        imgAlt="image2"
                        cardTitle="Dapibus vivamus"
                        cardDescription="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmo <br/> tempor invidunt ut labore de kostiabina."
                        buttonTitle="Learn More"
                        buttonLink="#"
                    />
                    <PortfolioCard
                        imgSrc="src/assets/portfolioImg5.png"
                        imgAlt="image5"
                        cardTitle="Metus tincidunt"
                        cardDescription="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmo <br/> tempor invidunt ut labore de kostiabina."
                        buttonTitle="Learn More"
                        buttonLink="#"
                    />
                </div>
            </div>
        </div>
    )
}

export default PortfolioCardSection;