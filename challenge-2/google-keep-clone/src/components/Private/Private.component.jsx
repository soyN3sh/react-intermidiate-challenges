import React from "react";
import { Route, Redirect } from "react-router-dom";

function Private({ authenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default Private;
