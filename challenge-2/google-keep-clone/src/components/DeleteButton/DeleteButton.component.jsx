import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { IconButton } from "../Common/Common.styles";
import { useLocation } from "react-router-dom";
import GlobalContext from "../../providers/Global/GlobalContext";
import { actions } from "../../utils/reducer/actions";

const DeleteButton = ({ note }) => {
  const { pathname } = useLocation();

  const { dispatch } = useContext(GlobalContext);

  const handleDelete = (e) => {
    e.preventDefault();
    if (pathname === "/notes") {
      dispatch({ type: actions.deleteNote, payload: note });
    } else {
      dispatch({ type: actions.deleteArchivedNote, payload: note });
    }
  };

  return (
    <IconButton onClick={handleDelete}>
      <MdDelete />
    </IconButton>
  );
};

export default DeleteButton;
