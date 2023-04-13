import styled from "styled-components";
import { theme } from "styles/theme";

export const List = styled("ul")`
  padding-bottom: 32px;

  ${theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: calc((100% - 2 * 336px) / 1);
  }

  ${theme.mq.desktop} {
    column-gap: calc((100% - 3 * 380px) / 2);
  }
`;
export const Item = styled("li")`
  margin-bottom: 32px;
  flex-basis: 288px;

  ${theme.mq.tablet} {
    margin-bottom: 0;
    flex-basis: 336px;
  }

  ${theme.mq.desktop} {
    flex-basis: 380px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
