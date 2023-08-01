import React from "react";
import CountryList from "./CountryList";

const TranslationScreen = () => {
  return (
    <div className="max-w-md min-w-full bg-black h-screen border-2 mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl font-man font-bold p-4 text-center">
        Welcome
      </h1>
      <h1 className="text-white text-3xl font-man font-extrabold leading-8 text-center">
        Select Language
      </h1>
      <CountryList />
    </div>
  );
};

export default TranslationScreen;
