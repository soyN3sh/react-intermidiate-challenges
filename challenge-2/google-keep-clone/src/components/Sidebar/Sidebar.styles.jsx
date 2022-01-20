import styled from "styled-components";

const Nav = styled.div`
  background: #787878;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavTitle = styled.h2`
  text-align: center;
  margin-left: 20px;
  color: #fff;
`;

const NavButton = styled.button`
  cursor: pointer;
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: unset;
  border: none;
`;

const ThemeButton = styled(NavButton)`
  margin-left: unset;
  margin-right: 2rem;
`;

const SidebarNav = styled.nav`
  background: #787878;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export {
  Nav,
  NavTitle,
  NavButton,
  ThemeButton,
  SidebarNav,
  SidebarWrap,
  ButtonsContainer,
};
