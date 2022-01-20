import React from "react";
import { MdColorLens } from "react-icons/md";
import { ColorInput, ColorInputLabel } from "./ColorButton.styles";

const ColorButton = ({ note, handleInputChange }) => {
  const { color } = note;

  return (
    <ColorInputLabel htmlFor="colorInput">
      <MdColorLens color="grey" />
      <ColorInput
        type="color"
        id="colorInput"
        name="color"
        value={color}
        onChange={handleInputChange}
      ></ColorInput>
    </ColorInputLabel>
  );
};

export default ColorButton;
