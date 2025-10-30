import React from "react";
import Button from "./Button";

function Section({img,title,descr1,descr2,havebutton}) {
  return (
    <div className="flex gap-8 h-[80vh] items-center justify-center px-24 ">
      {/* IMAGE */}
      <div className="w-[50%] flex items-center justify-center relative">
        <img
          src={img}
          className="w-[60%] object-cover absolute right-24"
          alt="heroimage"
        />
      </div>
      {/* info */}
      <div className="w-[50%] flex flex-col items-start justify-center space-y-4">
        <h2 className="text-[#091133] text-3xl font-medium">
         {title}
        </h2>
        <p className="text-[#6F7CB2] text-[16px] font-normal">
         {descr1}{" "}
        </p>
        <p className="text-[#6F7CB2] text-[16px] font-normal">
          {descr2}
        </p>
        {havebutton && <Button title={"Purchase now"}/>}
      </div>
    </div>
  );
}

export default Section;
