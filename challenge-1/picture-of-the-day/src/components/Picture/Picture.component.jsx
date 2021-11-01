import React, { useContext } from "react";
import {
  PictureContainer,
  CustomImg,
  CustomSubtitle,
  CustomAuthor,
  CustomParagraph,
  CustomError,
} from "./Picture.styles";
import GlobalContext from "../../providers/GlobalContext";
import useData from "../../utils/hooks/useData";

const Picture = () => {
  const {
    state: { apiParams, error },
  } = useContext(GlobalContext);

  const { data } = useData(apiParams);

  if (error.exists) {
    return <CustomError id="errorMessage">Error: {error.message}</CustomError>;
  }

  return data ? (
    <PictureContainer>
      <CustomImg id="customImg" src={data.url} alt={data.title} />
      <CustomSubtitle>{data.title}</CustomSubtitle>
      <CustomAuthor>By: {data.copyright}</CustomAuthor>
      <CustomParagraph>{data.explanation}</CustomParagraph>
    </PictureContainer>
  ) : (
    "loading..."
  );
};

export default Picture;
