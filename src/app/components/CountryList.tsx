"use client";
import React, { useState, useRef, TouchEvent } from "react";
import Image, { StaticImageData } from "next/image";

interface FlagData {
  flag: StaticImageData;
  language: string;
  active: boolean;
}

const CountryList: React.FC = () => {
  const flags: FlagData[] = [
    {
      flag: require("../../assets/istockphoto-1313888685-612x612.jpg"),
      language: "Spanish",
      active: false,
    },
    {
      flag: require("../../assets/france.png"),
      language: "French",
      active: false,
    },
    {
      flag: require("../../assets/china.png"),
      language: "Chinese",
      active: false,
    },
    {
      flag: require("../../assets/pngtree-rounded-flag-of-usa-png-image_8344463.png"),
      language: "English",
      active: false,
    },
    {
      flag: require("../../assets/japan.jpg"),
      language: "Japanese",
      active: false,
    },
    {
      flag: require("../../assets/russia.jpg"),
      language: "Russian",
      active: false,
    },
    {
      flag: require("../../assets/germany.webp"),
      language: "German",
      active: false,
    },
  ];

  const [active, setActive] = useState<number>(3);
  const startXRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent) => {
    startXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (startXRef.current === null) {
      return;
    }

    const endX = event.changedTouches[0].clientX;
    const diffX = startXRef.current - endX;
    const threshold = 20;

    if (diffX > threshold && active > 0 && active < flags.length - 1) {
      setActive((prev) => prev + 1);
    } else if (diffX < -threshold && active < flags.length && active > 0) {
      setActive((prev) => prev - 1);
    }

    startXRef.current = null;
  };

  const renderFlagElement = (index: number) => {
    if (index < 0 || index >= flags.length) {
      return null;
    }

    const activeClass = index === active ? "border-2 border-blue-500" : "";
    let size = 30;

    const distance = Math.abs(index - active);
    if (distance === 0) {
      size = 52;
    } else if (distance === 1) {
      size = 40;
    } else if (distance === 2) {
      size = 30;
    }

    if (index === active - 3 || index === active + 3) {
      size = 20;
    }

    return (
      <div
        key={index}
        className={`w-[${size}px] rounded-full ${activeClass} my-5`}
        onClick={() => setActive(index)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={flags[index].flag}
          alt="flag"
          className="object-contain rounded-full"
          width={size}
          height={size}
        />
      </div>
    );
  };

  return (
    <div className="w-[350px] my-4">
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: 7 }, (_, index) =>
          renderFlagElement(active - 3 + index)
        )}
      </div>
      <h2 className="text-white my-3 text-center text-2xl">
        {flags[active]?.language || "Language Not Found"}
      </h2>
      <style jsx>{`
        .flag-container {
          transition: width 0.8s ease;
        }
        .flag-image {
          transition: transform 0.8s ease;
        }
        .flag-container.border-2 {
          border-color: #4ea5d9;
        }
        .flag-image.rounded-full {
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default CountryList;
