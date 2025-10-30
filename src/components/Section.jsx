//import React from "react";
import Button from "./Button";

function Section({ img, title, descr1, descr2, havebutton }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-screen items-center justify-center px-6 md:px-24 py-12 md:py-0">
      {/* IMAGE - Order changes based on screen size */}
      <div className="w-full md:w-[50%] flex items-center justify-center order-1 md:order-2 mb-8 md:mb-0">
        <img
          src={img}
          className="w-full max-w-md md:max-w-full object-contain"
          alt={`Illustration for ${title}`}
        />
      </div>
      
      {/* INFO */}
      <div className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center space-y-4 md:space-y-6 order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl text-[#091133] font-medium text-center md:text-left">
          {title}
        </h2>
        <p className="text-[#6F7CB2] text-[14px] md:text-[16px] font-normal text-center md:text-left leading-relaxed">
          {descr1}
        </p>
        <p className="text-[#6F7CB2] text-[14px] md:text-[16px] font-normal text-center md:text-left leading-relaxed">
          {descr2}
        </p>
        {havebutton && (
          <div className="flex justify-center md:justify-start w-full mt-4">
            <Button title="Purchase Now" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Section;