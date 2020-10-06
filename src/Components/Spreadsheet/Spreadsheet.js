import React, { useState } from "react";

import { SpreadsheetCell, Table } from "../index";
import { ReactComponent as PlusIcon } from "../../Assets/SVG/plus.svg";
import { generateArrayN, generateCharacterKey } from "../../Scripts/Generator";
import "../../Stylesheets/Components/Spreadsheet/Spreadsheet.scss";

export const Spreadsheet = () => {
  const [nRows, extendRows] = useState(10);
  const [nColumns, extendColumns] = useState(10);

  const rows = generateArrayN(nRows);
  const columns = generateArrayN(nColumns);

  return (
    <div className="spreadsheet">
      <div className="spreadsheet--columns">
        {columns.map((column) => (
          <SpreadsheetCell key={`column: ${generateCharacterKey(column)}`}>
            {generateCharacterKey(column)}
          </SpreadsheetCell>
        ))}
        <div
          className="spreadsheet-icon"
          onClick={() => extendColumns(nColumns + 1)}
        >
          <PlusIcon />
        </div>
      </div>
      <div className="spreadsheet--rows-and-table">
        <div className="spreadsheet--rows">
          {rows.map((row) => (
            <SpreadsheetCell key={`row: ${row}`}>{row}</SpreadsheetCell>
          ))}
          <div
            className="spreadsheet-icon"
            onClick={() => extendRows(nRows + 1)}
          >
            <PlusIcon />
          </div>
        </div>
        <Table rows={rows} columns={columns} />
      </div>
    </div>
  );
};
