import React, { useState } from "react";

import { TableCell } from "../../Components";
import { generateCharacterKey } from "../../Scripts/Generator";
import "../../Stylesheets/Components/Table/Table.scss";

export const Table = ({ rows, columns }) => {
  const [activeCells, setActiveCells] = useState([]);
  return (
    <div className="spreadsheet--table">
      {rows.map((row) => (
        <div className="table-row" key={row}>
          {columns.map((column) => (
            <TableCell
              key={`${generateCharacterKey(column)}-${row}`}
              id={`${generateCharacterKey(column)}-${row}`}
              updateActiveCells={(id) => setActiveCells(activeCells.push(id))}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
