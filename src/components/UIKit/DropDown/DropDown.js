import PropTypes from "prop-types";
import {
  DropDownItem,
  DropDownList,
  DropDownWrapper,
  Title,
  TitleWrapper,
} from "./DropDown.styled";

import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";

const DropDown = ({ list, currentValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const title =
    list.find(({ value }) => currentValue === value)?.title || "Filter";

  return (
    <DropDownWrapper
      tabIndex={0}
      onMouseOver={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      onFocusCapture={() => {
        setIsOpen(true);
      }}
    >
      <TitleWrapper>
        <Title>{title}</Title>
        <AiFillCaretDown size={20} color="#000000" />
      </TitleWrapper>

      {isOpen && (
        <DropDownList>
          {list.map(({ title, onClick, value }) => (
            <DropDownItem
              key={title}
              tabIndex={0}
              link={value !== currentValue}
              onKeyDownCapture={onClick}
              onClick={onClick}
            >
              {title}
            </DropDownItem>
          ))}
        </DropDownList>
      )}
    </DropDownWrapper>
  );
};

export default DropDown;

DropDown.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])]),
      onClick: PropTypes.func,
    })
  ).isRequired,
  currentValue: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([null])]),
};
