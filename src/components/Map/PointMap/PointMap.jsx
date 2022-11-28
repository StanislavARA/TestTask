import React, { useState } from "react";
import s from "./PointMap.module.css";

const PointMap = (props) => {
  const [isPointDataActive, setPointDataActive] = useState(false);

  const showPointData = () => {
    setPointDataActive(true);
  };
  const hiddenPointData = () => {
    setPointDataActive(false);
  };
  const removeCurrentPoint = () => {
    let newPoints = props.points.filter((item) => {
      return item.name !== props.name;
    });

    props.removePoint(newPoints);
  };

  return (
    <div
      onMouseOver={showPointData}
      onMouseOut={hiddenPointData}
      onClick={removeCurrentPoint}
      className={s.position}
      style={{ top: props.y + "%", left: props.x + "%" }}
    >
      {isPointDataActive && (
        <div className={s.dataPoint}>
          <p>Name={props.name}</p>
          <p>Amount={props.amount}</p>
        </div>
      )}
    </div>
  );
};

export default PointMap;
