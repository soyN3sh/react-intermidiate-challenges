import styled from "styled-components";

const MyDatePicker = styled.div`
  float: left;
  position: relative;

  * {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
  }
`;

const Input = styled.input.attrs((props) => ({
  type: "date",
}))`
  float: left;
  width: 150px;
  height: 35px;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 11px;
  :focus {
    outline: none;
  }
`;

export { MyDatePicker, Input };
