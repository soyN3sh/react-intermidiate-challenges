import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptySpan = styled.span`
  padding-top: 20px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const IconButton = styled.button`
  color: grey;
  border: none;
  background-color: unset;
  cursor: pointer;
`;

const NoteInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const NoteInput = styled.form`
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  width: 100%;
  border-radius: 8px;
  margin: 20px auto;
  padding: 20px;
`;

const Title = styled.input`
  background: transparent;
  border: none;
  color: #000;
  display: block;
  width: 100%;
  font-size: 18px;
  margin: 10px 0;
  outline: none;
  &::placeholder {
    color: #3c4043;
    opacity: 1;
  }
`;

const TextArea = styled.textarea`
  background: transparent;
  margin: 10px 0;
  border: none;
  color: #000;
  display: block;
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  resize: none;
  overflow: hidden;
  min-height: 10px;
  &::placeholder {
    color: #3c4043;
    opacity: 1;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 25px;
`;

export {
  Container,
  EmptySpan,
  Spacer,
  IconButton,
  NoteInputContainer,
  NoteInput,
  Title,
  TextArea,
  ButtonArea,
};
