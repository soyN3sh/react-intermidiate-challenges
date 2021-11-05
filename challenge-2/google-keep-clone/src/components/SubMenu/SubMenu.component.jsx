import React from "react";
import { SidebarLink, SidebarDiv, SidebarLabel } from "./SubMenu.styles";

const SubMenu = ({ item }) => {
  return (
    <>
      <SidebarLink to={item.path}>
        <SidebarDiv>
          {item.icon}
          <SidebarLabel>{item.name}</SidebarLabel>
        </SidebarDiv>
      </SidebarLink>
    </>
  );
};

export default SubMenu;
