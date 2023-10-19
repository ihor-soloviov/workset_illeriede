/* eslint-disable react/prop-types */
import classNames from "classnames";
import "./TableSlide.scss";
import React from "react";

export const TableSlide = React.memo(({ line }) => {
  const { tr, tdOne, tdTwo, tdThree, tdFour, tdFive, weight500 } = line;
  return (
    <div className="tableSlide">
      <div className="tableSlide-head">
        <section>{tr}</section>
      </div>
      <div className="tableSlide-values">
        <div className="white-row">
          <p className={classNames("value", { weight500 })}>{tdOne}</p>
        </div>
        <div className="grey-row">
          <p className={classNames("value", { weight500 })}>{tdTwo}</p>
        </div>
        <div className="white-row">
          <p className={classNames("value", { weight500 })}>{tdThree}</p>
        </div>
        <div className="grey-row">
          <p className={classNames("value", { weight500 })}>{tdFour}</p>
        </div>
        <div className="white-row">
          <p className={classNames("value", { weight500 })}>{tdFive}</p>
        </div>
      </div>
    </div>
  );
});

TableSlide.displayName = "TableSlide";
