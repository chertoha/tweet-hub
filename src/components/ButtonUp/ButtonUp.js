import debounce from "lodash.debounce";
import { StyledButtonUp } from "./ButtonUp.styled";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useEffect, useState } from "react";

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScrollHandler = () => {
      const scrollHeight = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollHeight > viewportHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    document.addEventListener("scroll", debounce(onScrollHandler, 500));

    return () => {
      document.removeEventListener("scroll", onScrollHandler);
    };
  });

  const onButtonUpClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <StyledButtonUp isVisible={isVisible} onClick={onButtonUpClick}>
      <AiOutlineArrowUp size={30} />
    </StyledButtonUp>
  );
};

export default ButtonUp;
