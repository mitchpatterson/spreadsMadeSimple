import React, { useState } from "react";

import { OutsideClickHandler, TableFunctionBox } from "../../Components";
import { calculateOperationAndReturnValue } from "../../Scripts/Generator";
import { ReactComponent as FunctionIcon } from "../../Assets/SVG/function.svg";
import "../../Stylesheets/Components/Table/TableCell.scss";

export const TableCell = ({ id, updateActiveCells }) => {
  const [showFunctionBox, updateShowFunctionBox] = useState(false);
  const [showIcon, updateShowIcon] = useState(false);
  const [text, updateText] = useState("");
  const [operation, setOperation] = useState(null);

  let ref = null;

  const onOutsideClick = () => {
    updateShowIcon(false);
  };

  const onClose = () => {
    updateShowFunctionBox(false);
  };

  return (
    <OutsideClickHandler ref={ref} callback={onOutsideClick}>
      <div
        ref={(node) => (ref = node)}
        className={`table-cell${showIcon ? " show" : ""}`}
        onClick={() => updateShowIcon(true)}
      >
        <input
          id={id}
          value={operation ? calculateOperationAndReturnValue(operation) : text}
          onChange={(e) => {
            updateText(e.target.value);
            updateActiveCells(id);
          }}
        />
        {showIcon && (
          <div
            className="table-cell-icon"
            onClick={() => updateShowFunctionBox(true)}
          >
            <FunctionIcon />
          </div>
        )}
        {showFunctionBox && (
          <TableFunctionBox
            cellId={id}
            onClose={onClose}
            operation={operation}
            onReset={() => {
              setOperation(null);
              updateShowFunctionBox(false);
            }}
            onComplete={(op) => {
              updateShowFunctionBox(false);
              updateShowIcon(false);
              setOperation(op);
            }}
          />
        )}
      </div>
    </OutsideClickHandler>
  );
};
