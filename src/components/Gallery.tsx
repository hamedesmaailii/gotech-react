import React, { useState } from 'react';
import image1 from '../assets/galleryImg1.png';
import image2 from '../assets/galleryImg2.png';
import image3 from '../assets/galleryImg3.png';
import image4 from '../assets/galleryImg4.png';
import image5 from '../assets/galleryImg5.png';
import image6 from '../assets/galleryImg6.png';
import image7 from '../assets/galleryImg7.png';
import image8 from '../assets/galleryImg8.png';

interface GalleryProps {
    title: string
}

type GalleryItem = {
    id: number,
    image: string,
    imgTitle: string,
    imgDescription: string,
    large?: boolean
}

const GalleryData: GalleryItem[] = [
    { id: 1, image: image1, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed" },
    { id: 2, image: image2, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed" },
    { id: 3, image: image3, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed" },
    { id: 4, image: image4, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed" },
    { id: 5, image: image5, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", large: true },
    { id: 6, image: image6, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed", large: true },
    { id: 7, image: image7, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed" },
    { id: 8, image: image8, imgTitle: "Dumini Soliman's", imgDescription: "Lorem ipsum dolor sit amet, vel accumsan <br/> liberavisse ex, ea nec boraret interpretaris, sed" },
];

const Gallery: React.FC<GalleryProps> = ({title}) => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div className='container mx-auto'>
            <h3 className='text-center text-black2 text-xlarge leading-[46px] mb-[30px]' dangerouslySetInnerHTML={{__html:title}}></h3>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>
                {GalleryData.map((item) => (
                    <div key={item.id} className={`relative group cursor-pointer overflow-hidden ${item.large ? "col-span-1 row-span-2" : ""}`} onMouseEnter={() => setHoveredId(item.id)} onMouseLeave={() => setHoveredId(null)}>
                        <img src={item.image} alt={item.imgTitle} className='w-full h-full object-cover rounded-md transition duration-[0.3s] group-hover:scale-110' />
                        <div className={`absolute inset-0  flex flex-col items-start justify-end p-[20px] text-white transition duration-[0.3s] ${hoveredId === item.id ? "opacity-100" : "opacity-0"}`}>
                            <strong className='text-medium leading-[46px] font-medium mb-[14px]'>{item.imgTitle}</strong>
                            <p className='text-small leading-[25px] font-normal' dangerouslySetInnerHTML={{__html: item.imgDescription}}></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;