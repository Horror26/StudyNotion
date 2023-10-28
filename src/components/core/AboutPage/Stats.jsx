import React from "react";
import CountUp from "react-countup";

const Stats = [
  { count: "500", label: "Active Students" },
  { count: "10", label: "Mentors" },
  { count: "100", label: "Courses" },
  { count: "50", label: "Ratings" },
];

const StatsComponent = () => {
  return (
    <div className="bg-richblack-700">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-10" key={index}>
                <h1 className="text-[30px] font-bold text-richblack-5">
                  <CountUp duration={10} end={data.count} />+
                </h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
