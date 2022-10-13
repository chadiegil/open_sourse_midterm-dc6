import React, { useEffect } from "react";
import mdcLogo from "../assets/mdc-logo.png";

const Header = ({ building }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="header">
      <img
        src={mdcLogo}
        alt="mdc"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      />
      <h1 className="text-center">Mater Dei College {building}</h1>
    </div>
  );
};

export default Header;
