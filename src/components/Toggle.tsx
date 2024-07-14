"use client";
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { useTheme } from '@/context/ThemeContext';

export default function Toggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="flex items-center gap-1 sm:gap-2">
      {theme === 'light' ? (
        <>
          <MdOutlineLightMode className="buttonSize" />
          <p className="font-bold text-md sm:text-lg">Dark Mode</p>
        </>
      ) : (
        <>
          <MdOutlineDarkMode className="buttonSize" />
          <p className="font-bold text-md sm:text-lg">Light Mode</p>
        </>
      )}
    </button>
  );
}
