import React, { useState } from "react";
import CourseCard from "./CourseCard"; // Make sure to import the CourseCard component
import { HomePageExplore } from "../../../data/homepage-explore"; // Import the HomePageExplore data

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.find((item) => item.tag === value);
    const defaultCardHeading = result.courses[0].heading;
    setCurrentCard(defaultCardHeading);
  };

  const courses =
    HomePageExplore.find((item) => item.tag === currentTab)?.courses || []; // Retrieve the courses array based on the current tab

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-white text-4xl mt-44 md:mt-6 font-semibold md:text-center">
        Unlock the <span className="hello1">Power of Code</span>
      </div>

      <p className="text-center text-richblack-300 text-md pb-[0.5rem] text-[16px] mt-3">
        Learn to Build Anything You Can Imagine
      </p>

      <div className="hidden md:block">
        <div className="mt-8 w-[75%]  justify-between mx-auto flex flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100 px-1 py-1">
          {tabsName.map((element, index) => {
            return (
              <div
                className={`text-[16px] flex flex-row items-center gap-2 
                ${
                  currentTab === element
                    ? "bg-richblack-900 text-richblack-5 font-medium"
                    : "text-richblack-200"
                } rounded-full transition-all duration-200 cursor-pointer
                hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
                key={index}
                onClick={() => setMyCards(element)}
              >
                {element}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3 cards */}
      <div className="absolute flex flex-col md:flex-row gap-10 mt-7 text-white left-[4%] w-[90%] ">
        {courses.map((element, index) => {
          return (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;
