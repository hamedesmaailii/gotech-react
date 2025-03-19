import React from 'react';

type VideoProps = {
    title: string,
    description: string,
}

const Video : React.FC<VideoProps> = ({title, description}) => {
    return (
        <div className='flex flex-col items-center'>
            <h3 className='text-black2 text-large leading-[46px] mb-[34px]'>{title}</h3>
            <p className='text-black5 text-regular leading-[27px] font-normal mb-[26px] text-center' dangerouslySetInnerHTML={{__html: description}}></p>
            <video className='w-[930px] h-[522px] rounded-[24px]' controls>
                <source src='src/assets/video/demo.mp4' type='video/mp4' />
                Your browser dos not support the video tag
            </video>
        </div>
    )
}

export default Video;