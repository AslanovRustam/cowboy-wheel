import s from "./main.module.css";
import board from "../images/board.png";
import girl from "../images/girl.png";
import cowboy from "../images/boy.png";
import btn from "../images/btn.png";
import wheelBase from "../images/wheelBase.png";
import wheelVar from "../images/wheelVar.png";

export default function Main() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img className={s.board} src={board} alt="board" />
      </div>
      <div className={s.cowBoyWrapper}>
        <img className={s.girl} src={girl} alt="girl" />
        <img className={s.cowboy} src={cowboy} alt="cowboy" />
      </div>
      <div className={s.wheelWrapper}>
        <img className={s.wheel} src={wheelBase} alt="wheelBase" />
        <img className={s.wheelVar} src={wheelVar} alt="wheelVar" />

        <img className={s.btn} src={btn} alt="btn" />
      </div>
    </div>
  );
}
