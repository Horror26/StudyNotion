import React from "react";
import Instructor from "../../../assets/Images/Instructor.png";
import "../../../App.css";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="flex md:flex-row flex-col-reverse gap-20 items center">
        {/* left part waali image */}
        <div className="md:w-[50%] w-screen md:boxShadow1 mx-auto">
          <img src={Instructor} alt="imstructor image" className="md:boxShadow1 " />
        </div>

        {/* right part */}
        <div className="md:w-[50%] w-[90%]  flex flex-col gap-10 mx-5 md:mx-0 justify-center">
          <div className="text-4xl font-semibold w-[95%]  md:w-[40%]">
            Become an <span className="hello1">Instructor</span>
          </div>

          <div className="text-richblack-300 -mt-5 md:-mt-0 font-medium text-[16px] w-[100%] md:w-[85%]">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </div>

          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-3 ">
                Start Teaching Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
