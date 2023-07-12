import s from "./main.module.css";
import board from "../images/board.png";
import girl from "../images/girl.png";

export default function Main() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img className={s.board} src={board} alt="board" />
        <img className={s.girl} src={girl} alt="girl" />
      </div>
    </div>
  );
}
