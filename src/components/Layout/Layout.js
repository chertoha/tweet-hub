import { Outlet } from "react-router";
import { StyledLayout } from "./Layout.styled";

const Layout = () => {
  return (
    <StyledLayout>
      {/* <Header /> */}
      <div>Layout</div>
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
