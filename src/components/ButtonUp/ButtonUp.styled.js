import { Button } from "components/UIKit/Button/Button.styled";
import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledButtonUp = styled(Button)`
  display: ${(p) => (p.isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 150px;
  right: 50px;
  width: 70px;
  height: 70px;
  z-index: 9999;

  border-radius: ${(p) => p.theme.radii.borderRadius.circle};

  &:active {
    background-color: rgba(235, 216, 255, 0.8);
  }

  ${theme.mq.tablet} {
    right: 100px;
  }

  ${theme.mq.desktop} {
    right: 150px;
  }
`;
