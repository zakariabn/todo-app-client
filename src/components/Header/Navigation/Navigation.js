import React from "react";

import useTheme from "../../../hooks/useTheme";

const Navigation = () => {
  const [theme, handelThemeChange] = useTheme();

  return (
    <nav className="w-full flex justify-end bg-neutral px-2 p-1">
      <button onClick={handelThemeChange} className="btn btn-sm">
        {theme ? "Light" : "Dark"}
      </button>
    </nav>
  );
};

export default Navigation;
