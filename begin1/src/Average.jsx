import React, { useMemo, useState } from "react";

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState([]);

  const getAverage = (numbers) => {
    console.log("평균 계산중....");
    if (numbers.length == 0) return;
    // let sum = 0;
    // list.forEach((i) => {
    //   sum += i;
    // });
    // const avg = sum / numbers.length;
    // return avg;

    // reduce(함수)
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  const avg = useMemo(() => getAverage(list), [list]);

  const handleClick = () => {
    // list 추가
    const nextList = list.concat(parseInt(number));
    // setList 호출
    setList(nextList);
    setNumber("");
    console.log(list);
  };

  return (
    <div>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleClick}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>number : {number}</div>
      <div>평균 : {avg}</div>
    </div>
  );
};

export default Average;
