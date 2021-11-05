import styled from "styled-components";

const ColorInput = styled.input`
  position: absolute;
  z-index: -1;
  visibility: hidden;
`;

const ColorInputLabel = styled.label`
  cursor: pointer;
`;

export { ColorInput, ColorInputLabel };
