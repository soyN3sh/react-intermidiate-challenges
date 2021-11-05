import React, { useContext } from "react";
import Note from "../Note/Note.component";
import { NotesContainer } from "./NotesGrid.styles";
import GlobalContext from "../../providers/Global/GlobalContext";

const NotesGrid = () => {
  const {
    state: { notes },
  } = useContext(GlobalContext);

  return (
    <NotesContainer>
      {notes.map((note, index) => {
        return <Note key={note.id} note={note} />;
      })}
    </NotesContainer>
  );
};

export default NotesGrid;
