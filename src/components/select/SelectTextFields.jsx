import * as React from "react";
import "./SelectOptions.css";

export default function SelectTextFields() {
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };
  console.log(selectedItem);
  return (
    <div className="select">
      <label htmlFor="item-select" className="input-label">
        Selecciona un ítem
      </label>
      <select
        id="item-select"
        value={selectedItem}
        onChange={handleChange}
        className="select input-field-d"
      >
        <option value="decimal">Decimal to Others</option>
        <option value="binary">Binary to Others</option>
        <option value="octal">Octal to Others</option>
        <option value="hexadecimal">Hexadecimal to Others</option>
      </select>
    </div>
  );
}
