import React, { useEffect, useState } from "react";

const Life = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log("마운트 / 업데이트 시 실행");

    setTimeout(() => {
      alert("Hello");
    }, 1000);

    return () => console.log("언마운트시 실행");
  }, [count, flag]);
  // => flag 에 변화가 일어나면 마운트/업데이트가 됨

  return (
    <div>
      <h1>컴포넌트 라이프 사이클 : {count}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Life;
