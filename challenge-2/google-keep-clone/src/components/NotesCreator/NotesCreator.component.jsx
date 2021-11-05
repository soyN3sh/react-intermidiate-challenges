import React, { useState, useContext, useEffect } from "react";
import GlobalContext from "../../providers/Global/GlobalContext";
import { actions } from "../../utils/reducer/actions";
import ArchiveButton from "../ArchiveButton/ArchiveButton.component";
import ColorButton from "../ColorButton/ColorButton.component";
import {
  Spacer,
  NoteInputContainer,
  NoteInput,
  Title,
  TextArea,
  ButtonArea,
} from "../Common/Common.styles";
import { CloseButton } from "./NotesCreator.styles";

const NotesCreator = () => {
  const {
    state: { currentNote },
    dispatch,
  } = useContext(GlobalContext);

  const [showTitle, setShowTitle] = useState(false);
  const [tmpNote, setTmpNote] = useState({
    id: "",
    title: "",
    body: "",
    color: "#f1f1f1",
  });

  const handleFocus = (e) => {
    setShowTitle(true);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setTmpNote((current) => {
      return {
        ...current,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmitNote = (e) => {
    e.preventDefault();

    if (tmpNote.title !== "" && tmpNote.body !== "") {
      dispatch({ type: actions.addNote, payload: tmpNote });
    }

    dispatch({
      type: actions.setCurrentNote,
      payload: {
        id: "",
        title: "",
        body: "",
        color: "#f1f1f1",
      },
    });
  };

  useEffect(() => {
    if (currentNote.title !== "" || currentNote.body !== "") {
      setTmpNote(currentNote);
    }
  }, [currentNote]);

  return (
    <NoteInputContainer style={{ maxWidth: 600, width: 600 }}>
      <NoteInput>
        {showTitle && (
          <Title
            id="titleInput"
            type="text"
            name="title"
            placeholder="Title"
            value={tmpNote.title}
            onChange={handleInputChange}
          />
        )}
        <TextArea
          id="bodyInput"
          type="text"
          name="body"
          placeholder="Take a note..."
          value={tmpNote.body}
          onChange={handleInputChange}
          onFocus={handleFocus}
        />
        <ButtonArea>
          <ArchiveButton note={tmpNote} />
          <ColorButton note={tmpNote} handleInputChange={handleInputChange} />
          <Spacer />
          <CloseButton onClick={handleSubmitNote}>Close</CloseButton>
        </ButtonArea>
      </NoteInput>
    </NoteInputContainer>
  );
};

export default NotesCreator;
