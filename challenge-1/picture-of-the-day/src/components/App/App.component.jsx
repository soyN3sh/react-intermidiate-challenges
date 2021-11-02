import React, { useReducer } from "react";
import { MyApp } from "./App.styles";
import Title from "../Title/Title.component";
import DatePicker from "../DatePicker/DatePicker.component";
import Picture from "../Picture/Picture.component";
import GlobalContext from "../../providers/GlobalContext";
import { reducer } from "../../utils/reducer/reducer";
import format from "date-fns/format";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    apiParams: {
      date: format(new Date(), "yyyy-MM-dd"),
    },
    error: {
      message: "",
      exists: false,
    },
  });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <MyApp>
        <Title />
        <DatePicker />
        <Picture />
      </MyApp>
    </GlobalContext.Provider>
  );
}

export default App;
