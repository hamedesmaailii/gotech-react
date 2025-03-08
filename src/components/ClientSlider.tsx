import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import ClientCard from "./ClientCard";
import CenterImg from "../assets/clientCenterPic.png";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";

type ClientSliderProps = {
    title: string
}

const ClientSlider : React.FC<ClientSliderProps> = ({title}) => {
    const swiper = useSwiper();

    return (
        <div className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[url('assets/clientLeftPics.png')] before:bg-no-repeat before:w-[231px] before:h-[514px] after:content-[''] after:bg-no-repeat after:absolute after:right-0 after:top-0 after:bg-[url('assets/clientRightPics.png')] after:w-[269px] after:h-[508px]">
            <h3 className="text-black2 text-large leading-[42px] mb-[50px]">{title}</h3>

            <Swiper className="w-[1000px] before:content-[''] before:absolute before:left-[20%] before:top-[40%] before:bg-[url('assets/quoteLeft.png')] before:bg-no-repeat before:w-[41px] before:h-[29px] after:content-[''] after:absolute after:right-[20%] after:top-[40%] after:bg-[url('assets/quoteRight.png')] after:bg-no-repeat after:w-[41px] after:h-[29px]"
                modules={[ Navigation ]}
                slidesPerView={1}
                spaceBetween={30}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                }}
            >
                <SwiperSlide>
                    <ClientCard
                        imgSrc={CenterImg}
                        imgAlt="client image"
                        description="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmod <br/> tempor invidunt ut labore dolore magna"
                        fullName="Rubiya Mond De-Patrica"
                        jobTitle="CEO, Zexbay-Fine"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard
                        imgSrc={CenterImg}
                        imgAlt="client image"
                        description="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmod <br/> tempor invidunt ut labore dolore magna"
                        fullName="Rubiya Mond De-Patrica"
                        jobTitle="CEO, Zexbay-Fine"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ClientCard
                        imgSrc={CenterImg}
                        imgAlt="client image"
                        description="Lorem ipsum dolor sit amet, consetetur <br/> sadipscing elitr, sed diam nonumy eirmod <br/> tempor invidunt ut labore dolore magna"
                        fullName="Rubiya Mond De-Patrica"
                        jobTitle="CEO, Zexbay-Fine"
                    />
                </SwiperSlide>

                <div className="flex felx-row justify-center gap-[60px] mt-[36px]">
                    <button className="swiper-button-prev text-black0 w-[15px] h-[15px] hover:cursor-pointer" onClick={() => swiper.slidePrev()}>
                        <img src={ArrowLeft} alt="arrow-left" />
                    </button>
                    <button className="swiper-button-next text-black0 w-[15px] h-[15px] hover:cursor-pointer" onClick={() => swiper.slideNext()}>
                        <img src={ArrowRight} alt="arrow-right" />
                    </button>
                </div>
            </Swiper>
        </div>
    )
}

export default ClientSlider;