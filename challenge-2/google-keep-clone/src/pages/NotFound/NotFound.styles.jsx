import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  display: block;
  text-align: right;
  padding: 0.2rem 0.3rem;
  ::before {
    content: "←";
    padding-right: 0.2rem;
    display: inline-block;
  }
`;

const CustomGif = styled.img``;

export { NotFoundContainer, HomeLink, CustomGif };
