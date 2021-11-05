import React, { useContext } from "react";
import Note from "../Note/Note.component";
import { NotesContainer } from "../NotesGrid/NotesGrid.styles";
import GlobalContext from "../../providers/Global/GlobalContext";

const ArchivedNotesGrid = () => {
  const {
    state: { archivedNotes },
  } = useContext(GlobalContext);

  return (
    <NotesContainer>
      {archivedNotes.map((note, index) => {
        return <Note key={note.id} note={note} />;
      })}
    </NotesContainer>
  );
};

export default ArchivedNotesGrid;
