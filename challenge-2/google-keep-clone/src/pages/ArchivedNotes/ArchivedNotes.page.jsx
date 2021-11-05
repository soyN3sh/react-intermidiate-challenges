import React, { useContext } from "react";
import { Container, EmptySpan } from "../../components/Common/Common.styles";
import ArchivedNotesGrid from "../../components/ArchivedNotesGrid/ArchivedNotesGrid.component";
import GlobalContext from "../../providers/Global/GlobalContext";

const ArchivedNotes = () => {
  const {
    state: { archivedNotes, emptySearchMessage },
  } = useContext(GlobalContext);

  return (
    <Container>
      {archivedNotes.length === 0 && (
        <EmptySpan>
          {emptySearchMessage === ""
            ? "There are no archived notes"
            : emptySearchMessage}
        </EmptySpan>
      )}
      <ArchivedNotesGrid />
    </Container>
  );
};

export default ArchivedNotes;
