"use client";
import React, { useState } from "react";
import CountryList from "./CountryList";
import SettingMenu from "./SettingMenu";

const TranslationScreen: React.FC = () => {
  const [showSetting, setShowSetting] = useState(false);

  const handleSetting = () => {
    setShowSetting(!showSetting);
  };

  const handleCloseSetting = () => {
    setShowSetting(false);
  };

  return (
    <div
      className={`max-w-md min-w-full bg-black h-screen border-2 mx-auto p-4 flex flex-col items-center ${
        !showSetting ? "justify-center" : "pt-32"
      }`}
    >
      <h1 className="text-white text-3xl font-man font-bold p-4 text-center p-">
        Welcome
      </h1>
      <h1 className="text-white text-3xl font-man font-extrabold leading-8 text-center">
        Select Language
      </h1>
      {!showSetting && <CountryList />}
      {showSetting && <SettingMenu close={handleCloseSetting} />}
      {!showSetting && (
        <button
          className="text-white absolute bottom-4 text-2xl font-semibold"
          onClick={handleSetting}
        >
          Settings
        </button>
      )}
    </div>
  );
};

export default TranslationScreen;
