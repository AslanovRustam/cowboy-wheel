import { createPortal } from "react-dom";
import { useEffect } from "react";
import popup1 from "../images/popup-1.png";
import popup2 from "../images/popup-2.png";
import { ReactComponent as Text1 } from "../images/text1.svg";
import { ReactComponent as Text2 } from "../images/text2.svg";
import { ReactComponent as Btn1 } from "../images/btn1.svg";
import { ReactComponent as Btn2 } from "../images/btn2.svg";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, count, setCount, showModal }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);
  function CloseAndSpin() {
    if (count === 0) {
      return;
    }
    onClose();
    setCount(count - 1);
  }

  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}
      onClick={() => CloseAndSpin()}
    >
      <div className={s.container}>
        {count === 1 && (
          <>
            <img className={s.popUp} src={popup1} alt="logo_Cashimo" />
            <Text1 className={s.text} />
          </>
        )}
        {count === 0 && (
          <>
            <img className={s.popUp} src={popup2} alt="logo_Cashimo" />
            <Text2 className={s.text2} />
          </>
        )}
        <div className={s.btn} onClick={() => CloseAndSpin()}>
          {count === 0 ? (
            <Btn2 className={s.sbtnText} />
          ) : (
            <Btn1 className={s.sbtnText} />
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
