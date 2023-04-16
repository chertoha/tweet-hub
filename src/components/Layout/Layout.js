import ButtonUp from "components/ButtonUp";
import { Outlet } from "react-router";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
  return (
    <StyledLayout>
      <Outlet />
      <ButtonUp />
    </StyledLayout>
  );
};

export default Layout;
