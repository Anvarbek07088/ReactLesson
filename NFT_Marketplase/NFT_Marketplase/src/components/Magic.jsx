import Avatar1 from "./image/AvatarDiscover2.svg";
import { useEffect } from "react";
import Eye from "./image/Eye.svg";
import "../style/Magic.css";
import { useState } from "react";
const Magic = () => {
  const [Hours, setHours] = useState(59);
  const [Minuts, setMinuts] = useState(59);
  const [Seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Seconds == 0) {
        return () => clearInterval(timer);
      }
      setSeconds(Seconds - 1);
    }, 1000);

    if (Seconds == 0) {
      const timer1 = setTimeout(() => {
        if (Minuts == 0) {
          return () => clearInterval(timer1);
        }
        setMinuts(Minuts - 1);
        setSeconds(59);
      }, 100);
    }

    if (Minuts == 0) {
      const timer2 = setTimeout(() => {
        if (Hours == 0) {
          return () => clearInterval(timer2);
        }
        setHours(Hours - 1);
        setMinuts(59)
      }, 100);
    }
  });
  return (
    <div className="Magic">
      <div className="MagicText">
        <p>
          <img src={Avatar1} alt="rasm" /> Shroomie
        </p>
        <p>Magic Mashrooms</p>
        <button>
          <img src={Eye} alt="rasm" /> See NFT
        </button>
      </div>
      <div className="magicTime">
        <div className="MagicTimeBox">
          <p>Auction ends in:</p>
          <ul>
            <li>
              <p>{Hours < 10 ? "0" + Hours : Hours}</p> <span>Hours</span>
            </li>
            <li>
              <p>:</p>
            </li>
            <li>
              <p>{Minuts < 10 ? "0" + Minuts : Minuts}</p> <span>Minuts</span>
            </li>
            <li>
              <p>:</p>
            </li>
            <li>
              <p>{Seconds < 10 ? "0" + Seconds : Seconds}</p>{" "}
              <span>Seconds</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Magic;
