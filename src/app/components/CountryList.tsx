"use client";
import React, { useState, useRef } from "react";
import USA from "../../assets/pngtree-rounded-flag-of-usa-png-image_8344463.png";
import Spain from "../../assets/istockphoto-1313888685-612x612.jpg";
import France from "../../assets/france.png";
import China from "../../assets/china.png";
import Japan from "../../assets/japan.jpg";
import Russia from "../../assets/russia.jpg";
import Germany from "../../assets/germany.webp";
import Image from "next/image";

const CountryList = () => {
  const flags = [
    {
      flag: USA,
      language: "English",
      active: false,
    },
    {
      flag: Spain,
      language: "Spanish",
      active: false,
    },
    {
      flag: France,
      language: "French",
      active: false,
    },
    {
      flag: China,
      language: "Chinese",
      active: false,
    },
    {
      flag: Japan,
      language: "Japanese",
      active: false,
    },
    {
      flag: Russia,
      language: "Russian",
      active: false,
    },
    {
      flag: Germany,
      language: "German",
      active: false,
    },
  ];

  const [active, setActive] = useState(3);
  const startXRef = useRef(null);

  const handleTouchStart = (index) => (event) => {
    startXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (index) => (event) => {
    const endX = event.changedTouches[0].clientX;
    const diffX = startXRef.current - endX;
    if (diffX > 100) {
      // Right swipe, decrease active by 1
      setActive((prev) => (prev === 0 ? prev : prev - 1));
    } else if (diffX < -100) {
      // Left swipe, increase active by 1
      setActive((prev) => (prev === flags.length - 1 ? prev : prev + 1));
    }
  };

  return (
    <div className="w-[350px] my-4">
      <div className="flex items-center justify-center gap-2">
        {[
          active - 3,
          active - 2,
          active - 1,
          active,
          active + 1,
          active + 2,
          active + 3,
        ].map((index) => {
          if (index < 0 || index >= flags.length) {
            return null;
          }
          return (
            <div
              key={index}
              className={`w-[${index === active ? 52 : 30}px] rounded-full ${
                index === active ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setActive(index)}
              onTouchStart={handleTouchStart(index)}
              onTouchEnd={handleTouchEnd(index)}
            >
              <Image
                src={flags[index].flag}
                alt="flag"
                className="object-contain rounded-full"
                width={index === active ? 52 : 30}
                height={index === active ? 52 : 30}
              />
            </div>
          );
        })}
      </div>
      <h2 className="text-white my-3 text-center text-2xl">
        {flags[active].language}
      </h2>
    </div>
  );
};

export default CountryList;
