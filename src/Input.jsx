import React from "react";

function Input({ name, value, onChange }) {
  return (
    <label>
      <p>{name}</p>
      {name === "message" ? (
        <textarea name={name} value={value} onChange={onChange}></textarea>
      ) : (
        <input
          type={name === "email" ? "email" : "text"}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
}

export default Input;
