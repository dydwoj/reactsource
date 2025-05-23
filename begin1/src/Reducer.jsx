import React, { useReducer } from "react";
import { initialState, userReducer } from "./reducer/userReducer";

const Reducer = () => {
  // export 한 함수와 객체들 import
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
          value={state.name}
        />
        <input
          type="number"
          placeholder="년도"
          onChange={(e) => dispatch({ type: "SET_YEAR", payload: e.target.value })}
          value={state.year}
        />
      </div>
      {state.warning && <p>{state.warning}</p>}
      <p>Name : {state.name}</p>
      <p>Age : {state.year}</p>
    </div>
  );
};

export default Reducer;
