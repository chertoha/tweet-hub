import styled from "styled-components";
import { Button } from "components/UIKit/Button/Button.styled";

export const LoadMoreStyled = styled(Button)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 12px 30px;

  &:active {
    background-color: rgba(235, 216, 255, 0.8);
  }
`;
