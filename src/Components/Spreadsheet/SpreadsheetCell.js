import React from "react";

import "../../Stylesheets/Components/Spreadsheet/SpreadsheetCell.scss";

export const SpreadsheetCell = ({ children, ...rest }) => (
  <div className="spreadsheet--cell" {...rest}>
    {children}
  </div>
);
