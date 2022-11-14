import React, { useState } from "react";
import Modal from "../Modal/Modal";
import s from "./MapPage.module.css";
import PointMap from "./PointMap/PointMap";

const MapPage = (props) => {
  const [isModalActive, setModalActive] = useState(false);
  const [coordX, setCoordX] = useState(null);
  const [coordY, setCoordY] = useState(null);
  const [elementPoints, setElementPoints] = useState(props.mapPage.elements);

  let ref = React.createRef();
  const createPoint = (e) => {
    let mapHeight = ref.current.offsetHeight;
    let mapWidth = ref.current.offsetWidth;
    let x = ((e.pageX - 4 - e.currentTarget.offsetLeft) / mapWidth) * 100;
    let y = ((e.pageY - 4) / mapHeight) * 100;
    let coords = { x: x, y: y };
    setElementPoints(elementPoints.concat(coords));
    setCoordX(x);
    setCoordY(y);
    setModalActive(true);
  };

  let mapPoints = props.mapPage.elements.map((el, index) => {
    return (
      <PointMap
        name={el.name}
        amount={el.amount}
        x={el.x}
        y={el.y}
        points={props.mapPage.elements}
        removePoint={props.removePoint}
      />
    );
  });

  return (
    <>
      <Modal
        addNewPoint={props.addNewPoint}
        x={coordX}
        y={coordY}
        isModalActive={isModalActive}
        setModalActive={setModalActive}
        setElementPoints={setElementPoints}
        initialPoints={props.mapPage.elements}
      />
      <div className={s.background} ref={ref} onDoubleClick={createPoint}>
        <div>{mapPoints}</div>
      </div>
    </>
  );
};

export default MapPage;
