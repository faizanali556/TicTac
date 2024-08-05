import React, { useState } from "react";
import "./Tictac.css";
import circle from "../Assets/O.png";
import Cross from "../Assets/X.png";
let data = ["", "", "", "", "", "", "", "", ""];

const Tictac = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  const toogle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${Cross}>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src=${circle}>`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };
  const checkWin = () => {
    // Check rows
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data);
    }
    // Check columns
    else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data);
    }
    // Check diagonals
    else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data);
    }
  };

  const won = (winner) => {
    setLock(true);
  };
  return (
    <div>
      <div className="container">
        <h1 className="title">
          TicTac<span>React</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="boxex"
              onClick={(e) => {
                toogle(e, 0);
              }}
            ></div>
            <div
              className="boxex "
              onClick={(e) => {
                toogle(e, 1);
              }}
            ></div>
            <div
              className="boxex"
              onClick={(e) => {
                toogle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              className="boxex"
              onClick={(e) => {
                toogle(e, 3);
              }}
            ></div>
            <div
              className="boxex"
              onClick={(e) => {
                toogle(e, 4);
              }}
            ></div>
            <div
              className="boxex"
              onClick={(e) => {
                toogle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              className="boxex"
              onClick={(e) => {
                toogle(e, 6);
              }}
            ></div>
            <div
              className="boxex"
              onClick={(e) => {
                toogle(e, 7);
              }}
            ></div>
            <div
              className="boxex"
              onClick={(e) => {
                toogle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button className="reset">Reset</button>
      </div>
    </div>
  );
};
export default Tictac;
