import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import {
  MdClose,
  MdLogout,
  MdDarkMode,
  MdOutlineDarkMode,
} from "react-icons/md";
import routesList from "../../routes/routesList";
import SubMenu from "../SubMenu/SubMenu.component";
import SearchInput from "../SearchInput/SearchInput.component";
import { IconContext } from "react-icons/lib";
import { Spacer } from "../Common/Common.styles";
import {
  Nav,
  NavTitle,
  NavButton,
  ThemeButton,
  SidebarNav,
  SidebarWrap,
  ButtonsContainer,
} from "./Sidebar.styles";
import GlobalContext from "../../providers/Global/GlobalContext";
import { actions } from "../../utils/reducer/actions";

const Sidebar = () => {
  const {
    state: { theme },
    dispatch,
  } = useContext(GlobalContext);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const toggleThemeMode = () => {
    dispatch({
      type: actions.setTheme,
      payload: theme === "light" ? "dark" : "light",
    });
  };

  const deauthenticateUser = (e) => {
    e.preventDefault();
    dispatch({ type: actions.deleteUser, payload: { authenticated: false } });
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavButton>
            <FaBars onClick={showSidebar} />
          </NavButton>
          <NavTitle>Keepy</NavTitle>
          <Spacer />
          <SearchInput />
          <Spacer />
          <ThemeButton onClick={toggleThemeMode}>
            {theme === "light" ? (
              <MdDarkMode color="black" />
            ) : (
              <MdOutlineDarkMode />
            )}
          </ThemeButton>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <ButtonsContainer>
              <NavButton>
                <MdClose onClick={showSidebar} />
              </NavButton>
              <NavButton>
                <MdLogout onClick={deauthenticateUser} />
              </NavButton>
            </ButtonsContainer>
            {routesList.map((item, index) => {
              return item.listed && <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
