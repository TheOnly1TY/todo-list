import { useEffect, useState } from "react";

export function ThemeIcon() {
  const getTheme = () => {
    const theme = localStorage.getItem("Theme");
    return theme === "dark" ? "dark" : "light";
  };
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    document.body.setAttribute("dark-theme", theme);
    localStorage.setItem("Theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <figure className="theme-switch-icon" onClick={handleThemeSwitch}>
      {theme === "dark" ? (
        <img src="images/icon-sun.svg" alt="light mode icon " />
      ) : (
        <img src="images/icon-moon.svg" alt="light mode icon " />
      )}
    </figure>
  );
}
