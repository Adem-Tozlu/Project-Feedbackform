import React from "react";

function Input({ type, name, value, onChange }) {
  return (
    <label>
      <h3>{name}</h3>
      {name === "Message" ? (
        <textarea className="main__input--message" name={name} value={value} onChange={onChange}></textarea>
      ) : (
        <input className="main__input--text"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
}

export default Input;