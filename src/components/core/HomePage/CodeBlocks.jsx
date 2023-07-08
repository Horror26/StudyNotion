import React from "react";
import CTAButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "../../../App.css"

const CodeBlocks = ({
  position,
  heading,
  subHeading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className="mx-auto w-full">
      <div className={`md:flex flex flex-col ${position} relative justify-between gap-10 mx-[0px] w-full `}>
      {/* left section */}
      <div className="w-full md:w-[50%] flex flex-col gap-5">
        <div className="w-full">{heading}</div>
        <div className="text-richblack-300 font-medium pr-5 ">{subHeading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto} >
            <div className="flex gap-2 items-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto} >
            <div className="flex gap-2 items-center text-white">
              {ctabtn2.btnText}
            </div>
          </CTAButton>
        </div>
      </div>

      {/* right part animation waala */}
      <div className="flex h-fit relative z-100 text-[12px] w-[100%] py-4 lg:w-[500px] glass">
        {/* bg gradient HW TODO */}
        <div>{backgroundGradient}</div>
        <div className="text-center flex flex-col gap-[6px] w-[10%] text-richblack-400 font-inter font-bold mt-1">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
        </div>

        <div className={`md:w-[90%] flex flex-col tracking-tighter font-normal md:font-bold text-[16px] font-mono ${codeColor} pr-2 `}>
            <TypeAnimation
            sequence={[codeblock,2000,""]}
            repeat={Infinity}
            cursor={true}
            style={
                {
                    whiteSpace:"pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
            />
        </div>

      </div>
    </div>

    </div>
    
  );
};

export default CodeBlocks;
