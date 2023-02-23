import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-between h-32">
      <div className="bg-[#b0c2d4]">
        <h2 className="uppercase text-center font-bold">
          Redes sociales institucionales
        </h2>
      </div>
      <div className="flex pb-4 gap-10 items-center justify-center">
        <img src="./facebook.svg" className="w-14" alt="" />
        <img src="./instagram.svg" className="w-14" alt="" />
        <img src="./twitch.svg" className="w-14" alt="" />
        <img src="./twitter.svg" className="w-14" alt="" />
        <img src="./youtube.svg" className="w-14" alt="" />
      </div>
    </footer>
  );
};
