import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Notes from "../pages/Notes/Notes.page";
import ArchivedNotes from "../pages/ArchivedNotes/ArchivedNotes.page";
import Sidebar from "../components/Sidebar/Sidebar.component";
import NotFound from "../pages/NotFound/NotFound.page";

export const PrivateRouter = () => {
  return (
    <>
      <Sidebar />
      <Switch>
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/archived-notes" component={ArchivedNotes} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};
