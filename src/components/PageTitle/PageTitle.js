import PropTypes from "prop-types";
import { StyledTitle } from "./PageTitle.styled";

const PageTitle = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default PageTitle;

PageTitle.propTypes = {
  children: PropTypes.node,
};
