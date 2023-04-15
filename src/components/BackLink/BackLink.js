import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { ROUTES } from "router";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { StyledLink } from "./BackLink.styled";

const BackLink = ({ children }) => {
  const location = useLocation();
  const backRoute = location.state?.from ?? ROUTES.HOME;

  return (
    <StyledLink to={backRoute}>
      <MdOutlineKeyboardBackspace /> {children}
    </StyledLink>
  );
};

export default BackLink;

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
};
