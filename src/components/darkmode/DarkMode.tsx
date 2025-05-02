"use client";

import { useEffect } from "react";

const DarkMode = () => {
  useEffect(() => {
    const currTheme = localStorage.getItem("theme");
    const themeSelector = document.querySelector(".darkModeToggle") as HTMLInputElement | null;

    if (!themeSelector) {
      return;
    }

    document.documentElement.setAttribute("data-theme", currTheme || "dark");


    if (currTheme === "dark") {
      themeSelector.checked = true;
    }
    else {
      themeSelector.checked = false;
    }
  }, []);

  const handleThemeChange = () => {
    const themeSelector = document.querySelector(".darkModeToggle") as HTMLInputElement;
    if (themeSelector.checked) { // dark mode
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeSelector.checked = true;
    }

    else {
      document.documentElement.setAttribute("data-theme", "cupcake");
      localStorage.setItem("theme", "cupcake");
      themeSelector.checked = false;
    }
  };

  return (
    <input type="checkbox" className="darkModeToggle toggle toggle-lg" onClick={handleThemeChange} />
  );
};

export default DarkMode;