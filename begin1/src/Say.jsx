import React, { useState } from "react";

const Say = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");

  return (
    <div>
      <div>
        <button onClick={() => setText("안녕하세요")}>입장</button>
        <button onClick={() => setText("안녕히가세요")}>퇴장</button>
      </div>
      <h1 style={{ color }}>{text}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
    </div>
  );
};

export default Say;
