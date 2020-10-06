import React, { useState } from "react";

import { ReactComponent as PlusIcon } from "../../Assets/SVG/plus.svg";
import { ReactComponent as MinusIcon } from "../../Assets/SVG/minus.svg";
import "../../Stylesheets/Components/Table/TableFunctionBox.scss";

export const TableFunctionBox = ({
  cellId,
  operation,
  onComplete,
  onClose,
  onReset,
}) => {
  const [firstCell, updateFirstCell] = useState(operation?.firstCell);
  const [secondCell, updateSecondCell] = useState(operation?.secondCell);
  const [operator, setOperator] = useState(
    operation?.operator ? operation.operator : 0
  ); // 1 === minus, 2 === plus

  const onClear = () => {
    updateFirstCell("");
    updateSecondCell("");
    setOperator(0);
    if (onReset) onReset();
  };

  return (
    <div className="table--function-box">
      <div className="function-box-content">
        <div className="content-close" onClick={onClose}>
          <PlusIcon />
        </div>
        <div className="content-header">Operation Builder</div>
        <div className="content-identifier">{`Cell ${cellId} will be equal to:`}</div>
        <div className="content-builder">
          <input
            value={firstCell}
            onChange={(e) => updateFirstCell(e?.target?.value)}
          />
          <div
            onClick={() => setOperator(2)}
            className={`content-icon${operator === 2 ? " active" : ""}`}
          >
            <PlusIcon />
          </div>
          <div
            onClick={() => setOperator(1)}
            className={`content-icon${operator === 1 ? " active" : ""}`}
          >
            <MinusIcon />
          </div>
          <input
            value={secondCell}
            onChange={(e) => updateSecondCell(e?.target?.value)}
          />
        </div>
        <div className="content-footer">
          <div>
            To set a specific cell, follow this pattern: C-2, where C is the
            column and 2 is the row.
          </div>
          <div className="footer-buttons">
            <button
              onClick={() => onComplete({ firstCell, secondCell, operator })}
              disabled={!firstCell || !secondCell || !operator}
            >
              Complete Operation
            </button>
            {operation && <button onClick={onClear}>Clear Operation</button>}
          </div>
        </div>
      </div>
    </div>
  );
};
