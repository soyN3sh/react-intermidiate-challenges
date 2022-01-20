import { actions } from "./actions";
import { storage } from "../storage";
import {
  addNote,
  deleteNote,
  removeFilter,
  filterNotes,
  filterArchivedNotes,
  addArchivedNote,
  deleteArchivedNote,
} from "./helpers";

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setTheme:
      storage.set("theme", action.payload);
      return { ...state, theme: action.payload };
    case actions.setUser:
      storage.set("user", action.payload);
      return { ...state, user: action.payload };
    case actions.deleteUser:
      storage.remove("user");
      return { ...state, user: action.payload };
    case actions.removeFilter:
      return removeFilter(state);
    case actions.filterNotes:
      return filterNotes(state, action.payload);
    case actions.filterArchivedNotes:
      return filterArchivedNotes(state, action.payload);
    case actions.setCurrentNote:
      return {
        ...state,
        currentNote: action.payload,
      };
    case actions.addNote:
      return addNote(state, action.payload);
    case actions.deleteNote:
      return deleteNote(state, action.payload);
    case actions.deleteArchivedNote:
      return deleteArchivedNote(state, action.payload);
    case actions.addArchivedNote:
      return addArchivedNote(state, action.payload);
    default:
      return state;
  }
};
