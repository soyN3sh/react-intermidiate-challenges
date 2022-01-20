import React from "react";
import { NotFoundContainer, HomeLink, CustomGif } from "./NotFound.styles";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <HomeLink to="/login">Home</HomeLink>
      <CustomGif id="notFoundGif" src="404.gif" alt="page not found" />
    </NotFoundContainer>
  );
};

export default NotFound;
