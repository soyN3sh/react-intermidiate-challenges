import React, { useContext } from "react";
import { MdEdit } from "react-icons/md";
import { IconButton } from "../Common/Common.styles";
import { useHistory, useLocation } from "react-router-dom";
import GlobalContext from "../../providers/Global/GlobalContext";
import { actions } from "../../utils/reducer/actions";

const EditButton = ({ note }) => {
  const { dispatch } = useContext(GlobalContext);

  const history = useHistory();
  const { pathname } = useLocation();

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({ type: actions.setCurrentNote, payload: note });
    if (pathname === "/archived-notes") {
      dispatch({ type: actions.deleteArchivedNote, payload: note });
      dispatch({ type: actions.addNote, payload: note });
      history.push("/notes");
    }
  };

  return (
    <IconButton onClick={handleEdit}>
      <MdEdit />
    </IconButton>
  );
};

export default EditButton;
