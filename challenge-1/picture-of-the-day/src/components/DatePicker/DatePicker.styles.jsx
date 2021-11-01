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

const DpInput = styled.input.attrs((props) => ({
  type: "date",
}))`
  float: left;
  width: 150px;
  height: 35px;
  overflow: hidden;
  border-radius: 20px;

  input:focus {
    outline: none;
  }

  input {
    width: 125%;
    background: #f5f5f5;
    border: none;
    height: 35px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 11px;
    cursor: pointer;
  }
`;

export { MyDatePicker, DpInput };
