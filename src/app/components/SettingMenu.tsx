"use client";
import React from "react";
import Setting from "../../assets/Vector.svg";
import Image from "next/image";
import Arrow from "../../assets/Vector.png";
import Right from "../../assets/right.png";
import Down from "../../assets/down.png";

interface SettingMenuProps {
  close: () => void;
}

const SettingMenu: React.FC<SettingMenuProps> = ({ close }) => {
  const handleClose = () => {
    close();
  };

  return (
    <div className="w-full flex flex-col items-center mt-5 py-5 shadow-xl shadow-inner h-[90%] rounded-3xl p-3">
      <button onClick={handleClose}>
        <Image src={Arrow} alt="arrow" width={15} height={15} />
      </button>
      <div className="flex items-center justify-center gap-2 bg-blac my-2">
        <Image
          src={Setting}
          alt="Setting"
          width={34}
          height={34}
          color="white"
        />
        <h3 className="text-2xl text-white font-medium">Settings</h3>
      </div>
      <section className="w-full p-3">
        <div className=" flex justify-between mb-4">
          <h3 className="text-white text-xl">Language</h3>
          <h4 className="text-[#d3d3d3] flex items-center gap-8">
            English <Image src={Right} alt="right-arrow" width={10} />
          </h4>
        </div>
        <div className=" flex justify-between mb-4">
          <h3 className="text-white text-xl">Text Color</h3>
          <h4 className="text-[#d3d3d3] flex items-center gap-10 ">
            White <Image src={Right} alt="right-arrow" width={10} />
          </h4>
        </div>
        <div className=" flex justify-between mb-4">
          <h3 className="text-white text-xl">Text Size</h3>
          <h4 className="text-[#d3d3d3] flex items-center text-left gap-4">
            X-Large{" "}
            <Image src={Down} alt="right-arrow" width={20} height={10} />
          </h4>
        </div>
        <div className=" flex justify-between mb-4">
          <h3 className="text-white text-xl">Theme</h3>
          <h4 className="text-[#d3d3d3] flex items-center text-left gap-4">
            Custom
            <Image src={Down} alt="right-arrow" width={20} height={10} />
          </h4>
        </div>
        <div className="w-full h-[64px] my-8 flex items-center justify-around bg-custom rounded-[50px]  border-[1.5px solid linear-gradient(#D9D9D9,#FFFFFF)] ">
          <div className="w-[44px] h-[44px] bg-button bg-blend-overlay hover:border-2 border-[#30E5D3] rounded-full"></div>
          <div className="w-[44px] h-[44px] bg-button bg-blend-overlay hover:border-2 border-[#30E5D3] rounded-full"></div>
          <div className="w-[44px] h-[44px] bg-button bg-blend-overlay hover:border-2 border-[#30E5D3] rounded-full"></div>
          <div className="w-[44px] h-[44px] bg-button bg-blend-overlay  hover:border-2 border-[#30E5D3] rounded-full"></div>
        </div>
        <div className="flex items-center justify-around text-white my-8 w-full">
          <h4 className="text-lg">Aa</h4>
          <h4 className="text-xl">Aa</h4>
          <h4 className="text-2xl">Aa</h4>
          <h4 className="text-3xl">Aa</h4>
        </div>
      </section>
    </div>
  );
};

export default SettingMenu;
