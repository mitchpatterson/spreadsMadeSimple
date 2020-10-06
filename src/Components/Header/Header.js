import React from "react";

import { ReactComponent as Logo } from "../../Assets/SVG/spreadsheet.svg";
import "../../Stylesheets/Components/Header/Header.scss";

export const Header = () => (
  <div className="spreadsheet--header">
    <div className="header-branding">
      <Logo />
      <p>Spreads Made Simple</p>
    </div>
  </div>
);
