import React, { useState } from 'react';
import image0 from '../assets/galleryImg0.png';
import image1 from '../assets/galleryImg1.png';
import image2 from '../assets/galleryImg2.png';
import image3 from '../assets/galleryImg3.png';
import image4 from '../assets/galleryImg4.png';
import image5 from '../assets/galleryImg5.png';
import image6 from '../assets/galleryImg6.png';
import image7 from '../assets/galleryImg7.png';

interface GalleryProps {
    title: string
}

type GalleryItem = {
    image: string,
    imgTitle: string,
    imgDescription: string,
    size: "small" | "wide" | "large";
}

const GalleryData: GalleryItem[] = [
    { image: image0, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", size: "small"},
    { image: image1, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", size: "small"},
    { image: image2, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", size: "small"},
    { image: image3, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", size: "small"},
    { image: image4, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", size: "wide"},
    { image: image5, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", size: "large"},
    { image: image6, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", size: "small"},
    { image: image7, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", size: "small"},
];

const Gallery: React.FC<GalleryProps> = ({title}) => {
    return (
        <div className='container mx-auto'>
            <h3 className='text-center text-black2 text-xlarge leading-[46px] mb-[30px]' dangerouslySetInnerHTML={{__html:title}}></h3>
            <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='w-full aspect-square relative overflow-hidden rounded-lg'>
                        <img src={GalleryData[0].image} alt={GalleryData[0].image} className='w-full h-full object-cover transition duration-[0.3s] hover:scale-110'/>
                        <div className='absolute inset-0 opacity-0 hover:opacity-100 transition duration-[0.3s] pb-[40px] pl-[50px] flex flex-col items-start justify-end text-white'>
                            <strong className='text-medium leading-[46px] font-medium mb-[14px]'>{GalleryData[0].imgTitle}</strong>
                            <p className='text-small leading-[25px] font-normal' dangerouslySetInnerHTML={{__html:GalleryData[0].imgDescription}}></p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        {GalleryData.slice(1, 3).map((item, index) => (
                            <div key={index} className='relative overflow-hidden rounded-lg'>
                                <img src={item.image} alt={item.imgTitle} className='w-full h-full object-cover transition duration-[0.3s] hover:scale-110'/>
                                <div className='absolute inset-0 opacity-0 hover:opacity-100 transition duration-[0.3s] pb-[40px] pl-[50px] flex flex-col items-start justify-end text-white'>
                                    <strong className='text-medium leading-[46px] font-medium mb-[14px]'>{item.imgTitle}</strong>
                                    <p className='text-small leading-[25px] font-normal' dangerouslySetInnerHTML={{__html:item.imgDescription}}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <div className='grid grid-cols-2 gap-4'>
                        {GalleryData.slice(3, 5).map((item, index) => (
                            <div key={index} className='relative overflow-hidden rounded-lg'>
                                <img src={item.image} alt={item.imgTitle} className='w-full h-full object-cover transition duration-[0.3s] hover:scale-110'/>
                                <div className='absolute inset-0 opacity-0 hover:opacity-100 transition duration-[0.3s] pb-[40px] pl-[50px] flex flex-col items-start justify-end text-white'>
                                    <strong className='text-medium leading-[46px] font-medium mb-[14px]'>{item.imgTitle}</strong>
                                    <p className='text-small leading-[25px] font-normal' dangerouslySetInnerHTML={{__html:item.imgDescription}}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        {GalleryData.slice(5, 7).map((item, index) => (
                            <div key={index} className='relative overflow-hidden rounded-lg'>
                                <img src={item.image} alt={item.imgTitle} className='w-full h-full object-cover transition duration-[0.3s] hover:scale-110'/>
                                <div className='absolute inset-0 opacity-0 hover:opacity-100 transition duration-[0.3s] pb-[40px] pl-[50px] flex flex-col items-start justify-end text-white'>
                                    <strong className='text-medium leading-[46px] font-medium mb-[14px]'>{item.imgTitle}</strong>
                                    <p className='text-small leading-[25px] font-normal' dangerouslySetInnerHTML={{__html:item.imgDescription}}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <div className='w-full h-full relative overflow-hidden rounded-lg'>
                            <img src={GalleryData[7].image} alt={GalleryData[7].image} className='w-full h-full object-cover transition duration-[0.3s] hover:scale-110'/>
                            <div className='absolute inset-0 opacity-0 hover:opacity-100 transition duration-[0.3s] pb-[40px] pl-[50px] flex flex-col items-start justify-end text-white'>
                                <strong className='text-medium leading-[46px] font-medium mb-[14px]'>{GalleryData[7].imgTitle}</strong>
                                <p className='text-small leading-[25px] font-normal' dangerouslySetInnerHTML={{__html:GalleryData[7].imgDescription}}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;