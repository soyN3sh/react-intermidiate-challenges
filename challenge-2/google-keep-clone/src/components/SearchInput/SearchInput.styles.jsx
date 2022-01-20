import styled from "styled-components";

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  background: #f1f3f4;
  border: 1px solid transparent;
`;

const SearchInputWrapper = styled.div`
  height: 46px;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const SearchInputBase = styled.input`
  padding: 11px 0;
  background: transparent;
  border: none;
  font: normal 16px Google Sans, Roboto, RobotoDraft, Helvetica, Arial,
    sans-serif;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  height: 46px;
  outline: none;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  &::placeholder {
    color: #3c4043;
    opacity: 1;
  }
`;

const SearchButton = styled.button`
  padding: 0 5px;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  line-height: 0;
`;

export {
  SearchInputContainer,
  SearchInputWrapper,
  SearchInputBase,
  SearchButton,
};
