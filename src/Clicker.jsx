import React, { useState } from "react";

const Clicker = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="clicker">
      <span className="clicker__value">{value}</span>
      <div className="clicker__actions">
        <button className="clicker__btn btn-increment" onClick={() => setValue(value + 1)}>
          <i className="fas fa-plus" ></i>
        </button>
        <button className="clicker__btn btn-default" onClick={() => setValue(0)}>
          <i className="fas fa-sync-alt"></i>
        </button>
        <button className="clicker__btn btn-decrement" onClick={() => setValue(value - 1)}>
          <i className="fas fa-minus"></i>
        </button>
      </div>
    </div>
  );
};

export default Clicker;
