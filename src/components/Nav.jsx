import React from "react";

function Nav({ theme, setTheme }) {
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="nav">
      <div className="container">
        <div className="row spaced">
          <h4 className="nav__heading">Where in the world?</h4>
          <div className="nav__toggle" onClick={toggleTheme}>
            <i className={theme === "light" ? "fa fa-moon" : "fa fa-sun-o"}></i>
            <p>{theme === "light" ? "Dark Mode" : "Light Mode"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
