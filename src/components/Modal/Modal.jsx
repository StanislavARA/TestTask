import { useState } from "react";
import s from "./Modal.module.css";
const Modal = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const savePoint = () => {
    let data = { name: name, amount: amount, x: props.x, y: props.y };
    props.addNewPoint(data);
    props.setModalActive(false);
    setName("");
    setAmount("");
  };

  const cancel = () => {
    props.setElementPoints(props.initialPoints);
    props.setModalActive(false);
  };

  const changeInputName = (e) => {
    setName(e.currentTarget.value);
  };

  const changeInputAmount = (e) => {
    setAmount(e.currentTarget.value);
  };

  return (
    <>
      {props.isModalActive && (
        <div className={s.modal}>
          <div className={s.modal_content}>
            <div>
              Введите название метки
              <input value={name} autoFocus={true} onChange={changeInputName} />
            </div>
            <div>
              Введите количество
              <input value={amount} onChange={changeInputAmount} />
            </div>
            <div>Координата Х:{props.x}</div>
            <div>Координата Y:{props.y}</div>
            <div>
              <button onClick={savePoint}>Сохранить</button>
              <button onClick={cancel}>Отмена</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
