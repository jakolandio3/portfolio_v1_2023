'use client';
import { useCallback, useEffect, useState } from 'react';
import { MdOutlineWbSunny, MdWbSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';

function LightMode() {
  const [isLightMode, setIsLightmode] = useState(false);
  const handleClick = useCallback(() => {
    setIsLightmode((isLightMode) => !isLightMode);
  }, []);
  useEffect(() => {
    if (!isLightMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isLightMode]);
  return (
    <button onClick={handleClick} className="mr-2 text-sun-color">
      {isLightMode ? <FaMoon /> : <MdWbSunny />}
    </button>
  );
}

export default LightMode;
