import PropTypes from "prop-types";
import { LoadMoreStyled } from "./LoadMoreButton.styled";

const LoadMoreButton = ({ onClick }) => {
  return <LoadMoreStyled onClick={onClick}>Load more</LoadMoreStyled>;
};

export default LoadMoreButton;

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};
