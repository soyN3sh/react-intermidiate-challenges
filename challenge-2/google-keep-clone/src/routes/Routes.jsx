import React, { useContext } from "react";
import { Switch } from "react-router-dom";
import Private from "../components/Private/Private.component";
import Login from "../pages/Login/Login.page";
import GlobalContext from "../providers/Global/GlobalContext";
import { PrivateRouter } from "./PrivateRouter";
import Public from "../components/Public/Public.component";

export const Routes = () => {
  const {
    state: { user },
  } = useContext(GlobalContext);

  return (
    <Switch>
      <Public
        authenticated={user.authenticated}
        exact
        path="/login"
        component={Login}
      />
      <Private
        path="/"
        authenticated={user.authenticated}
        component={PrivateRouter}
      />
    </Switch>
  );
};
