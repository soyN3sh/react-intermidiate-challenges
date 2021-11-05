import React, { useContext } from "react";
import { Container, EmptySpan } from "../../components/Common/Common.styles";
import NotesCreator from "../../components/NotesCreator/NotesCreator.component";
import NotesGrid from "../../components/NotesGrid/NotesGrid.component";
import GlobalContext from "../../providers/Global/GlobalContext";

const Notes = () => {
  const {
    state: { notes, emptySearchMessage },
  } = useContext(GlobalContext);

  return (
    <Container>
      <NotesCreator />
      {notes.length === 0 && (
        <EmptySpan>
          {emptySearchMessage === ""
            ? "There are no notes, please create a new one using the note creation input"
            : emptySearchMessage}
        </EmptySpan>
      )}
      <NotesGrid />
    </Container>
  );
};

export default Notes;
