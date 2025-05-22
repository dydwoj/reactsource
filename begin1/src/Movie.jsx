import React, { useState } from "react";

const Movie = () => {
  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("./img/inception2.jpg");

  const handleToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("./img/oppen3.jpg");
      //   console.log(btn);
    } else {
      setBtn(true);
      setSrc("./img/inception2.jpg");
      //   console.log(btn);
    }
  };

  return (
    <div>
      <img src={src} alt="" width="300" height="500" />
      <button onClick={handleToggle}>Change</button>
    </div>
  );
};

export default Movie;
