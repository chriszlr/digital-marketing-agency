import React from "react";
import analysisImg from "../assets/analysis.svg";

const Hero = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-4 flex flex-col md:flex-row justify-between items-center overflow-hidden">
      <div className="">
        <div className="flex flex-col justify-between">
          <h1 className="font-light text-3xl md:text-3xl lg:text-4xl flex flex-col my-1">
            Sales Optimization <span>& Data Analysis</span>
          </h1>

          <p className="font-light text-xs lg:text-md xl:text-lg mb-2 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            distinctio inventore magnam nihil officiis!
          </p>
        </div>
        <button className="bg-orange-400 rounded-full py-1 px-2 text-xs font-medium hover:bg-orange-500 duration-300 my-2">
          View Work -{">"}
        </button>
      </div>

      <img
        className="max-w-[80%] max-h-[300px]"
        src={analysisImg}
        alt="Analysis Image"
      />
    </div>
  );
};

export default Hero;
