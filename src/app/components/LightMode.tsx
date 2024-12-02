"use client";
import { useCallback, useEffect, useState } from "react";
import { MdOutlineWbSunny, MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function LightMode() {
  const [isLightMode, setIsLightmode] = useState(false);
  const handleClick = useCallback(() => {
    setIsLightmode((isLightMode) => !isLightMode);
  }, []);
  useEffect(() => {
    // const main = document.querySelector("main");
    // if (isLightMode === true) {
    //   document
    //     .querySelectorAll("#name-header")
    //     .forEach((header) => header.classList.toggle("text-black", true));
    //   document
    //     .querySelectorAll("#navbar-extras")
    //     .forEach((header) => header.classList.toggle("bg-blue-500", true));
    //   document
    //     .querySelectorAll("#navbar-extras")
    //     .forEach((header) => header.classList.toggle("bg-black", false));

    //   main.classList.toggle("bg-blue-500", true);
    // } else {
    //   document
    //     .querySelectorAll("#name-header")
    //     .forEach((header) => header.classList.toggle("text-black", false));

    //   document
    //     .querySelectorAll("#navbar-extras")
    //     .forEach((header) => header.classList.toggle("bg-black", true));
    //   document
    //     .querySelectorAll("#navbar-extras")
    //     .forEach((header) => header.classList.toggle("bg-blue-500", false));

    //   main.classList.toggle("bg-blue-500", false);
    // }
    if (!isLightMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isLightMode]);
  return (
    <button onClick={handleClick} className="text-sun-color mr-2">
      {isLightMode ? <FaMoon /> : <MdWbSunny />}
    </button>
  );
}

export default LightMode;
