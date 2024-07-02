import React from "react";

const SubscribeFollow = () => {
  return (
    <>
    <h1 className='text-center absolute top-14 text-2xl border-2 border-zinc-400 rounded-xl px-2 text-slate-200 font-semibold tracking-wider flex flex-col'>UI Buttons Tutorial
    </h1>
    <div className="text-sm absolute top-24 text-zinc-200">
      Subscribe my <span className="relative cursor-pointer group z-30 hover:text-zinc-700 px-1.5 py-0.5 duration-300">YouTube
    <span className="bg-gray-100 w-full h-[1.5px] bottom-0 absolute left-0 group-hover:h-full duration-300 group-hover:rounded-lg -z-10">
      <h1 className="-translate-x-7 group-hover:translate-y-6 text-neutral-400 font-semibold tracking-wide opacity-0 group-hover:opacity-100 duration-500">@thecodecrafted</h1>
    </span>
    <div className="absolute top-44 left-10 h-40 w-40 bg-[#0CC0DF] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 scale-90 group-hover:scale-100 duration-500">
      <img src="./src/my-components/images/Untitled design.png" className="h-full w-full object-cover" />
    </div>
    </span> Channel and Follow me on <span className="relative cursor-pointer group z-30 hover:text-zinc-700 px-1.5 py-0.5 duration-300 ">Instagram
    <span className="bg-gray-100 w-full h-[1.5px] bottom-0 absolute left-0 group-hover:h-full duration-300 group-hover:rounded-lg -z-10"><h1 className="-translate-x-7 group-hover:translate-y-6 text-neutral-400 font-semibold tracking-wide opacity-0 group-hover:opacity-100 duration-500">@thecodecrafted</h1>
    </span>
    <div className="absolute top-44 -left-52 h-40 w-40 bg-[#0CC0DF] rounded-full overflow-hidden opacity-0 group-hover:opacity-100 rotate-12 group-hover:rotate-0 scale-90 group-hover:scale-100 duration-500">
      <img src="./src/my-components/images/Untitled design.png" className="h-full w-full object-cover" />
    </div>
    </span>
    </div>
    </>
  );
};

export default SubscribeFollow;
