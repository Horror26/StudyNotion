import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { TbBinaryTree2 } from "react-icons/tb";
import "../../../App.css";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isSelected = cardData.heading === currentCard;
  
  return (
    <div
      className={`flex flex-col bg-[#161D29] px-5 py-5 ${
        isSelected ? "bg-[#FFFFFF] hello3 " : "bg-[#161D29]"
      }`}
    >
      <div className="mb-[0.7rem]">
        <h1
          className={`font-semibold text-[20px] leading-[28px] ${
            isSelected ? "text-[#161D29]" : "text-[#DBDDEA]"
          }`}
        >
          {cardData.heading}
        </h1>
      </div>
      <div className="font-normal text-[16px] leading-[24px] border-b-2 border-dashed pb-[4.5rem] text-[#6E727F]">
        {cardData.description}
      </div>

      <div className="flex justify-between text-[#6E727F] pt-[0.8rem]">
        <div className="flex items-center gap-1">
          <FaUserFriends />
          <div>{cardData.level}</div>
        </div>
        <div className="flex items-center gap-1">
          <TbBinaryTree2 />
          <div>{cardData.lessionNumber} Lessons</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
