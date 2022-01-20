import React from "react";
import ArchiveButton from "../ArchiveButton/ArchiveButton.component";
import DeleteButton from "../DeleteButton/DeleteButton.component";
import EditButton from "../EditButton/EditButton.component";
import {
  NoteInputContainer,
  NoteInput,
  Title,
  TextArea,
  ButtonArea,
} from "../Common/Common.styles";
import { Spacer } from "../Common/Common.styles";

const Note = ({ note }) => {
  const { title, body, color } = note;

  return (
    <NoteInputContainer style={{ margin: 10 }}>
      <NoteInput style={{ background: color, width: 300 }}>
        <Title
          id="titleInput"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          disabled
          readOnly
        />
        <TextArea
          id="bodyInput"
          type="text"
          name="body"
          placeholder="Take a note..."
          value={body}
          disabled
          readOnly
        />
        <ButtonArea>
          <ArchiveButton note={note} />
          <DeleteButton note={note} />
          <Spacer />
          <EditButton note={note} />
        </ButtonArea>
      </NoteInput>
    </NoteInputContainer>
  );
};

export default Note;
