import styled from "styled-components";

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CustomImg = styled.img`
  align-items: center;
  max-width: 100%;
  height: auto;
  padding: 16px;
`;

const CustomSubtitle = styled.h2`
  padding: 16px;
  text-align: center;
`;

const CustomAuthor = styled.h3`
  padding: 16px;
`;

const CustomParagraph = styled.p`
  padding: 16px;
  text-align: justify;
`;

const CustomError = styled.h2`
  padding: 16px;
  color: red;
`;

export {
  PictureContainer,
  CustomImg,
  CustomSubtitle,
  CustomAuthor,
  CustomParagraph,
  CustomError,
};
