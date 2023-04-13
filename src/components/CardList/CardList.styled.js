import styled from "styled-components";
import { theme } from "styles/theme";

export const List = styled("ul")`
  display: flex;
  flex-wrap: wrap;
`;
export const Item = styled("li")`
  flex-basis: 380px;

  ${theme.mq.desktop} {
    /* flex-basis: 380px; */
  }
`;
