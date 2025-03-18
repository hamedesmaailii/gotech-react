import React from "react";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Navigation } from "swiper/modules";
import spCard1 from '../assets/sp-card1.png';
import spCard2 from '../assets/sp-card2.png';
import spCard3 from '../assets/sp-card3.png';
import SpecialityCard from "./SpecialityCard";
import ArrowLeft from '../assets/arrow-left.svg';
import ArrowRight from '../assets/arrow-right.svg';

type CardSliderProps = {
    title: string,
}

const CardSlider : React.FC<CardSliderProps> = ({title}) => {
    const swiper = useSwiper();

    return (
        <div className="text-center">
            <h2 className="text-black2 text-large leading-[46px]" dangerouslySetInnerHTML={{__html:title}}></h2>

            <Swiper
                modules={[ Navigation ]}
                slidesPerView={3}
                spaceBetween={-10}
                navigation={{
                    prevEl:'.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
            >
                <SwiperSlide className="pt-[60px] ml-[30px]">
                    <SpecialityCard 
                        image={spCard1}
                        imgAlt="img-card1"
                        cardTitle="Quick Response"
                        cardDescription="Lorem ipsum dolor sit amet, vel </br> accumsan liberavisse ex, ea nec </br> concludaturque ndo. Verear"
                    />
                </SwiperSlide>
                <SwiperSlide className="pt-[60px]">
                    <SpecialityCard 
                        image={spCard2}
                        imgAlt="img-card2"
                        cardTitle="Great Communication"
                        cardDescription="Lorem ipsum dolor sit amet, vel </br> accumsan liberavisse ex, ea nec </br> concludaturque ndo. Verear"
                    />
                </SwiperSlide>
                <SwiperSlide className="pt-[60px]">
                    <SpecialityCard 
                        image={spCard3}
                        imgAlt="img-card3"
                        cardTitle="Customer Satisfaction"
                        cardDescription="Lorem ipsum dolor sit amet, vel </br> accumsan liberavisse ex, ea nec </br> concludaturque ndo. Verear"
                    />
                </SwiperSlide>
                <SwiperSlide className="pt-[60px]">
                    <SpecialityCard 
                        image={spCard1}
                        imgAlt="img-card1"
                        cardTitle="Quick Response"
                        cardDescription="Lorem ipsum dolor sit amet, vel </br> accumsan liberavisse ex, ea nec </br> concludaturque ndo. Verear"
                    />
                </SwiperSlide>
                <SwiperSlide className="pt-[60px]">
                    <SpecialityCard 
                        image={spCard2}
                        imgAlt="img-card2"
                        cardTitle="Great Communication"
                        cardDescription="Lorem ipsum dolor sit amet, vel </br> accumsan liberavisse ex, ea nec </br> concludaturque ndo. Verear"
                    />
                </SwiperSlide>
                <SwiperSlide className="pt-[60px]">
                    <SpecialityCard 
                        image={spCard3}
                        imgAlt="img-card3"
                        cardTitle="Customer Satisfaction"
                        cardDescription="Lorem ipsum dolor sit amet, vel </br> accumsan liberavisse ex, ea nec </br> concludaturque ndo. Verear"
                    />
                </SwiperSlide>
                <div className="flex justify-center gap-[30px] my-[30px]">
                    <button className="swiper-button-prev hover:cursor-pointer bg-white w-[50px] h-[50px] rounded-[50px] flex items-center justify-center z-[1] shadow-regular" onClick={() => swiper.slidePrev()}>
                        <img src={ArrowLeft} alt="arrow left"/>
                    </button>
                    <button className="swiper-button-next hover:cursor-pointer bg-white w-[50px] h-[50px] rounded-[50px] flex items-center justify-center z-[1] shadow-regular" onClick={() => swiper.slideNext()}>
                        <img src={ArrowRight} alt="arrow right"/>
                    </button>
                </div>
            </Swiper>
        </div>
    )
}

export default CardSlider;