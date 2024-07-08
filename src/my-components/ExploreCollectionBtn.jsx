import React from "react";
import ArrowRightIcon2 from "./ArrowRightIcon2";

const ExploreCollectionBtn = () => {
  return (
   <div className="relative h-10 w-60 group">
     <div className="h-full w-full uppercase md:-translate-y-5 font-gilroy font-semibold px-4 py-6 bg-slate-50 relative rounded-md flex justify-between items-center overflow-hidden cursor-pointer">
      <h1 className="group-hover:-translate-y-4 group-hover:opacity-0 group-hover:duration-0 duration-300 whitespace-nowrap text-sm tracking-wide">Follow For UI Ideas</h1>
      <span className="group-hover:-translate-y-4 group-hover:opacity-0 group-hover:duration-0 duration-300"><ArrowRightIcon2/></span>
    </div>
    <div className="absolute md:-translate-y-5 bottom-0 left-1 group-hover:-bottom-2 group-hover:left-0 w-[95%] group-hover:h-full h-0 group-hover:w-full uppercase font-gilroy font-semibold group-hover:px-4 px-3 group-hover:py-6 text-white bg-red-500 group rounded-md flex justify-between items-center cursor-pointer duration-300">
      <h1 className="whitespace-nowrap text-sm tracking-wide opacity-0 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2 delay-150 group-hover:duration-300">Follow For UI Ideas</h1>
      <span className="translate-y-2 delay-150 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:duration-300 "><ArrowRightIcon2/></span>
    </div>
   </div>
  );
};

export default ExploreCollectionBtn;
