import { useEffect, useState } from "react";
import Modal from "./Modal";
import s from "./main2.module.css";
import board from "../images/board.png";
import cowboy from "../images/boy.png";
import btn from "../images/btn.png";
import wheelBase from "../images/wheelBase.png";
import wheelVar from "../images/wheelVar.png";
import girl from "../images/girl.png";
import { ReactComponent as Btn } from "../images/btn.svg";

export default function Main2() {
  const [count, setCount] = useState(2);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (count === 1) {
      setTimeout(() => togleModal(), 5000);
    }
    if (count === 0) {
      setTimeout(() => togleModal(), 7000);
    }
  }, [count]);
  function togleModal() {
    return setShowModal(!showModal);
  }
  console.log(count);
  return (
    <div className={s.container}>
      <img className={s.board} src={board} alt="board" />
      <div className={s.personContainer}>
        <picture className={`${s.cowboy} ${showModal ? s.hide : ""}`}>
          <source
            media="(max-width: 1024px) and (orientation: portrait)"
            srcSet={cowboy}
          />
          <img src={girl} alt="cowboy" />
        </picture>
      </div>
      <div className={s.wheelContainer}>
        <div className={s.wheel}>
          <img className={s.wheelBase} src={wheelBase} alt="wheel" />
          <img
            className={`${s.wheelVar}          
          ${count === 1 && s.wheelVar_1_spin}
          ${count === 0 && s.wheelVar_2_spin}
          `}
            src={wheelVar}
            alt="wheelVar"
          />

          <img
            className={s.btn}
            src={btn}
            alt="btn"
            onClick={() => setCount(count - 1)}
          />
        </div>
        <div
          className={`${s.btnStart} ${showModal ? s.hide : ""}`}
          onClick={() => setCount(count - 1)}
        >
          <Btn className={s.sbtnText} />
        </div>
      </div>

      <Modal
        onClose={togleModal}
        count={count}
        setCount={setCount}
        showModal={showModal}
      />
    </div>
  );
}
