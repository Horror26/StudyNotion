import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"
import "../../../App.css"

const timeline =[
    {
        Logo: Logo1,
        Heading:"Leadership",
        Description: "Fully Committed to the success company",
    },
    {
        Logo: Logo2,
        Heading:"Leadership",
        Description: "Fully Committed to the success company",
    },
    {
        Logo: Logo3,
        Heading:"Leadership",
        Description: "Fully Committed to the success company",
    },
    {
        Logo: Logo4,
        Heading:"Leadership",
        Description: "Fully Committed to the success company",
    }
]

const TimelineSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-15 items-center w-11/12 mt-[30px]'>
        {/* left waala box with the timeline */}
        <div className='flex flex-col gap-11 w-[90%] md:w-[45%]'>
            {
                timeline.map((element,index) =>{
                    return (
                        <div className='flex flex-row gap-6' key={index}>
                            <div className='w-[50px] border-b-2 border-dotted h-[50px] bg-white rounded-full justify-center flex items-center'>
                                <img src={element.Logo} alt='element logo'/>
                            </div>
                            

                            <div>
                                <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                                <p className='text-base'>{element.Description}</p>
                            </div>

                        </div>

                    )
                })
            }
            
        </div>
        {/* image waali div */}
        <div className='boxShadow mt-10 md:mt-0 video1 relative shadow-blue-200 z-20'>
            <img src={timelineImage} alt='timelineImage'
            className='object-cover'/>

            <div className='absolute left-[50%] translate-x-[-50%] translate-y-[-50%]    bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 w-[90%] md:w-[70%]'>
                <div className='flex flex-row gap-1 md:gap-5 items-center border-r border-caribbeangreen-300 px-1 md:px-7'>
                    <p className='text-3xl font-bold'>10</p>
                    <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                </div>

                <div className='flex gap-1 md:gap-5 items-center px-1 md:px-7'>
                <p className='text-3xl font-bold'>250</p>
                    <p className='text-caribbeangreen-300 text-sm'>Types of courses</p>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default TimelineSection
