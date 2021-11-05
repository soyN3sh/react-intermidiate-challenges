import uuid from "react-uuid";
import { storage } from "../storage";

const addNote = (state, payload) => {
  if (payload.id !== "") {
    const { notes } = deleteNote(state, payload);
    storage.set("notes", [...notes, payload]);
    return { ...state, notes: [...notes, payload] };
  } else {
    const id = uuid();
    storage.set("notes", [...state.notes, { ...payload, id: id }]);
    return {
      ...state,
      notes: [...state.notes, { ...payload, id: id }],
    };
  }
};

const deleteNote = (state, payload) => {
  storage.set(
    "notes",
    state.notes.filter((note) => note.id !== payload.id)
  );
  return {
    ...state,
    notes: state.notes.filter((note) => note.id !== payload.id),
  };
};

const removeFilter = (state) => {
  return {
    ...state,
    notes: storage.get("notes") || [],
    archivedNotes: storage.get("archivedNotes") || [],
  };
};

const filterNotes = (state, payload) => {
  const regExpSearch = new RegExp(payload, "i");
  const filteredNotes = state.notes.filter((note) =>
    regExpSearch.test(note.body)
  );
  return {
    ...state,
    notes: filteredNotes,
    emptySearchMessage:
      filteredNotes.length === 0
        ? "There are no match results. Try another search."
        : "",
  };
};

const filterArchivedNotes = (state, payload) => {
  const regExpSearchArch = new RegExp(payload, "i");
  const filteredArchivedNotes = state.archivedNotes.filter((note) =>
    regExpSearchArch.test(note.body)
  );
  return {
    ...state,
    archivedNotes: filteredArchivedNotes,
    emptySearchMessage:
      filteredArchivedNotes.length === 0
        ? "There are no match results. Try another search."
        : "",
  };
};

const addArchivedNote = (state, payload) => {
  const { notes } = deleteNote(state, payload);
  storage.set("archivedNotes", [...state.archivedNotes, payload]);
  return {
    ...state,
    notes: notes,
    archivedNotes: [...state.archivedNotes, payload],
  };
};

const deleteArchivedNote = (state, payload) => {
  const { notes } = addNote(state, payload);
  storage.set(
    "archivedNotes",
    state.archivedNotes.filter((note) => note.id !== payload.id)
  );
  return {
    ...state,
    notes: notes,
    archivedNotes: state.archivedNotes.filter((note) => note.id !== payload.id),
  };
};

export {
  addNote,
  deleteNote,
  removeFilter,
  filterNotes,
  filterArchivedNotes,
  addArchivedNote,
  deleteArchivedNote,
};
