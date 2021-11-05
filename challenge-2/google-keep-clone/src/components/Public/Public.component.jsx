import React from "react";
import { Route, Redirect } from "react-router-dom";

function Public({ authenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) =>
        !authenticated ? <Component {...props} /> : <Redirect to="/notes" />
      }
    />
  );
}

export default Public;
