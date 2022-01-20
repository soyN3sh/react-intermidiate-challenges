import React, { useContext } from "react";
import { MdArchive, MdOutlineArchive } from "react-icons/md";
import GlobalContext from "../../providers/Global/GlobalContext";
import { actions } from "../../utils/reducer/actions";
import { IconButton } from "../Common/Common.styles";

const ArchiveButton = ({ note }) => {
  const { title, body } = note;

  const {
    state: { archivedNotes },
    dispatch,
  } = useContext(GlobalContext);

  const isArchivedNote = () => {
    return archivedNotes.find((item) => item.id === note.id);
  };

  const addArchivedNote = async (e) => {
    e.preventDefault();
    if (title !== "" && body !== "") {
      dispatch({
        type: actions.addArchivedNote,
        payload: note,
      });
    }
  };

  const removeArchivedNote = async (e) => {
    e.preventDefault();
    dispatch({ type: actions.deleteArchivedNote, payload: note });
  };

  return isArchivedNote() ? (
    <IconButton onClick={removeArchivedNote}>
      <MdArchive />
    </IconButton>
  ) : (
    <IconButton onClick={addArchivedNote}>
      <MdOutlineArchive />
    </IconButton>
  );
};

export default ArchiveButton;
