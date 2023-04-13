import { Outlet } from "react-router";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
  return (
    <StyledLayout>
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
