import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  :hover {
    background: #252831;
    border-left: 4px solid #03e9f4;
    cursor: pointer;
  }
`;

const SidebarDiv = styled.div``;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export { SidebarLink, SidebarDiv, SidebarLabel };
