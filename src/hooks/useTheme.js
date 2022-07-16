import { useEffect, useState } from 'react';

const useTheme = () => {
  // const [darkTheme, setDarkTheme] = useContext(ThemeContext);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    let theme = localStorage.getItem("theme");

    if (!theme) {
      localStorage.setItem("theme", `light`);
    } else {
      if (theme === "light") {
        setTheme(false);
      } else if (theme === "dark") {
        setTheme(true);
      }
    }
  }, []);

  function handelThemeChange() {
    setTheme(!theme);
    localStorage.setItem("theme", `${theme ? "light" : "dark"}`);
  }

  useEffect(() => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", `${theme ? "luxury" : "mytheme"}`);
  }, [theme]);

  return [theme, handelThemeChange];
};

export default useTheme;