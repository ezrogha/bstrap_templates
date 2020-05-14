import React from "react";
import { FaCheck } from "react-icons/fa";

export default function index({ backgroundColor, color }) {
  return (
    <div className="d-flex">
      <div className="p-4 align-self-start">
        <h1>
          <FaCheck
            style={{
              backgroundColor,
              color,
              padding: 5,
              borderRadius: 5,
            }}
          />
        </h1>
      </div>
      <div className="p-4 align-self-end">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, tempore
        iusto in minima facere dolorem!
      </div>
    </div>
  );
}
