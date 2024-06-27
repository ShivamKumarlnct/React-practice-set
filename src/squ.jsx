import React, { useState } from "react";

function Squ() {
  const [value, setValue] = useState(0);
  const [squ, setSqu] = useState(0);

  const square = () => {
    // const squareValue = Math.pow(value, 2);
    const squareValue = Math.pow(value,2);
    setSqu(squareValue);
  };

  const handleChange = (e) => {
    setValue((e.target.value));
  };

  return (
    <div>
      <h1>Square of number</h1>
      <input
        type="text"
        placeholder="enter number"
        value={value}
        onChange={handleChange}
      />
      <button onClick={square}>Square</button>
      <p>Square: {squ}</p>
    </div>
  );
}

export default Squ;
