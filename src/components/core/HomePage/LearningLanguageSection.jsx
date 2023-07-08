import React from 'react'
import "../../../App.css"
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "./Button"

const LearningLanguageSection = () => {
  return (
    <div className='mb-[100px] mt-[130px] w-11/12 mx-auto'>
      <div className='flex flex-col gap-3 w-full'>
        <div className='w-full'>
          <h1 className='md:text-[36px] text-[32px] leading-[44px] font-semibold w-full md:text-center'>Your Swiss knife for <span className='hello1'> learning any language</span></h1>
        </div>
        <div className='text-center text-richblack-600 w-full md:w-[65%] mx-auto text-base font-medium mt-3'>
        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center mt-5'>
          <img 
          src={know_your_progress}
          alt='KnowYourProgressImage'
          className='object-contain w-[375px] md:-mr-32 md:mt-0 mt-6 -mb-11 md:-mb-0'
          />

          <img 
          src={compare_with_others}
          alt='CompareWithOthers'
          className='object-contain w-[375px]'
          />

          <img 
          src={plan_your_lessons}
          alt='PlanYourLessons'
          className='object-contain w-[375px] md:-ml-32 -mt-20 md:-mt-0'
          />

        </div>

      </div>
      <div className='flex flex-row mx-auto mt-10 text-richblack-900 w-fit'>
      <CTAButton active={true} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguageSection

