import React, { useRef, useState } from "react";
import "./Tictac.css";
import circle from "../Assets/O.png";
import Cross from "../Assets/X.png";

function Tictac() {
  const [count, setCount] = useState(0);
  const [xcount, setXcount] = useState(0);
  const [circlecount, setCirclecount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const titleRef = useRef();
  const toogle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${Cross}>`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src=${circle}>`;
      data[num] = "o";
    }
    setCount(count + 1);
    checkWin();
    if (checkBoardFull()) {
      setTimeout(autoReset, 3000); // Delay the reset to show the result
    }
  };
  const checkBoardFull = () => {
    return !data.includes("");
  };
  const checkWin = () => {
    // Check rows
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    }
    // Check columns
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    }
    // Check diagonals
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `The Winner is <img src=${Cross}>`;
      setXcount(xcount + 1);
    } else {
      titleRef.current.innerHTML = `The Winner is <img src=${circle}>`;
      setCirclecount(circlecount + 1);
    }
    setTimeout(() => {
      autoReset();
    }, 3000);
  };
  let boxes;
  const autoReset = () => {
    setCount(0);
    setLock(false);
    titleRef.current.innerHTML = ` TicTac <span> React</span>`;
    setData(["", "", "", "", "", "", "", "", ""]);
    boxes = document.querySelectorAll(".boxex");
    boxes.forEach((box) => (box.innerHTML = ""));
  };
  const reset = () => {
    setCount(0);
    setCirclecount(0);
    setXcount(0);
    setLock(false);
    titleRef.current.innerHTML = ` TicTac <span> React</span>`;
    setData(["", "", "", "", "", "", "", "", ""]);
    boxes = document.querySelectorAll(".boxex");
    boxes.forEach((box) => (box.innerHTML = ""));
  };

  return (
    <div>
      <div className="container">
        <h1 className="title" ref={titleRef}>
          TicTac <span>React</span>
        </h1>
        <div className="board">
          <div className="row">
            <div className="boxex" onClick={(e) => toogle(e, 0)}></div>
            <div className="boxex" onClick={(e) => toogle(e, 1)}></div>
            <div className="boxex" onClick={(e) => toogle(e, 2)}></div>
          </div>
          <div className="row2">
            <div className="boxex" onClick={(e) => toogle(e, 3)}></div>
            <div className="boxex" onClick={(e) => toogle(e, 4)}></div>
            <div className="boxex" onClick={(e) => toogle(e, 5)}></div>
          </div>
          <div className="row3">
            <div className="boxex" onClick={(e) => toogle(e, 6)}></div>
            <div className="boxex" onClick={(e) => toogle(e, 7)}></div>
            <div className="boxex" onClick={(e) => toogle(e, 8)}></div>
          </div>
        </div>
        <div className="bottom">
          <div className="cross">X: {xcount}</div>
          <button className="reset" onClick={reset}>
            Reset
          </button>
          <div className="cross">0: {circlecount} </div>
        </div>
      </div>
    </div>
  );
}
export default Tictac;
