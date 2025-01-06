import { useState } from "react";

export function ThemeIcon() {
  const [themeSwitch, setThemeSwitch] = useState(false);
  const handleThemeSwitch = () => {
    setThemeSwitch(!themeSwitch);
    const currentTheme = themeSwitch ? "light" : "dark";
    document.querySelector("body").setAttribute("dark-theme", currentTheme);
  };

  return (
    <figure className="theme-switch-icon" onClick={handleThemeSwitch}>
      {themeSwitch ? (
        <img src="images/icon-sun.svg" alt="light mode icon " />
      ) : (
        <img src="images/icon-moon.svg" alt="light mode icon " />
      )}
    </figure>
  );
}
