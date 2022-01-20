import React, { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "../../providers/Theme/Theme";
import { Routes } from "../../routes/Routes";
import GlobalContext from "../../providers/Global/GlobalContext";
import { reducer } from "../../utils/reducer/reducer";
import { storage } from "../../utils/storage";

import MyApp from "./App.styles";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    theme: storage.get("theme") || "light",
    user: storage.get("user") || { authenticated: false },
    currentNote: { id: "", title: "", body: "", color: "#f1f1f1" },
    notes: storage.get("notes") || [],
    archivedNotes: storage.get("archivedNotes") || [],
    emptySearchMessage: "",
  });

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ state, dispatch }}>
        <ThemeProvider theme={state.theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <MyApp>
            <Routes />
          </MyApp>
        </ThemeProvider>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
