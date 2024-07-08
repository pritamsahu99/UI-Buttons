import React from "react";

const SbscribeFollow2 = () => {
  return (
    <>
      <h1 className="text-center absolute top-14 text-2xl border-2 border-[#DCA47C] rounded-xl px-2 text-[#508D4E] font-semibold tracking-wider flex flex-col">
        UI Premium Buttons Idea with Tutorial
      </h1>
      <div className="text-sm absolute top-24 text-[#698474]">
        Subscribe my
        <span className="relative mx-0.5 cursor-pointer group z-30 hover:text-zinc-300 px-1.5 py-0.5 duration-300">
          YouTube
          <span className="bg-[#508D4E] w-full h-[1.5px] bottom-0 absolute left-0 group-hover:h-full duration-300 group-hover:rounded-lg -z-10">
            <h1 className="-translate-x-7 group-hover:translate-y-6 text-[#939185] font-semibold tracking-wide opacity-0 group-hover:opacity-100 duration-500">
              @thecodecrafted
            </h1>
          </span>
          <div className="absolute top-14 left-14 h-40 w-40 bg-[#0CC0DF] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 scale-90 group-hover:scale-100 duration-500">
            <img
              src="./src/my-components/images/Untitled design.png"
              className="h-full w-full object-cover"
            />
          </div>
        </span>
        Channel and Follow me on
        <span className="relative mx-0.5 cursor-pointer group z-30 hover:text-zinc-300 px-1.5 py-0.5 duration-300 ">
          Instagram
          <span className="bg-[#508D4E] w-full h-[1.5px] bottom-0 absolute left-0 group-hover:h-full duration-300 group-hover:rounded-lg -z-10">
            <h1 className="-translate-x-7 group-hover:translate-y-6 text-[#939185] font-semibold tracking-wide opacity-0 group-hover:opacity-100 duration-500">
              @thecodecrafted
            </h1>
          </span>
          <div className="absolute top-14 -left-44 h-40 w-40 bg-[#0CC0DF] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 scale-90 group-hover:scale-100 duration-500">
            <img
              src="./src/my-components/images/Untitled design.png"
              className="h-full w-full object-cover"
            />
          </div>
        </span>
      </div>
    </>
  );
};

export default SbscribeFollow2;
