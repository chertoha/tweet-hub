import PropTypes from "prop-types";
import DropDown from "components/UIKit/DropDown";
import { StyledFilter } from "./Filter.styled";

const Filter = ({ onSelectFilter, currentValue }) => {
  return (
    <StyledFilter>
      <DropDown
        currentValue={currentValue}
        list={[
          {
            title: "show all",
            value: null,
            onClick: () => {
              onSelectFilter(null);
            },
          },
          {
            title: "follow",
            value: false,
            onClick: () => {
              onSelectFilter(false);
            },
          },
          {
            title: "following",
            value: true,
            onClick: () => {
              onSelectFilter(true);
            },
          },
        ]}
      />
    </StyledFilter>
  );
};

export default Filter;

Filter.propTypes = {
  onSelectFilter: PropTypes.func.isRequired,
  currentValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])]),
};
