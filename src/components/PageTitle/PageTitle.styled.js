import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledTitle = styled("h1")`
  font-size: ${(p) => p.theme.fontSizes.xl};
  color: ${(p) => p.theme.colors.secondaryText};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};

  ${theme.mq.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xxl};
  }
`;
