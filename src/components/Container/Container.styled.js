import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledContainer = styled("div")`
  margin: 0 auto;
  width: 100%;

  padding-right: 20px;
  padding-left: 20px;

  ${theme.mq.mobileOnly} {
    max-width: ${(p) => p.theme.breakpoints.mobile};
  }

  ${theme.mq.tablet} {
    width: ${(p) => p.theme.breakpoints.tablet};
    padding-right: 32px;
    padding-left: 32px;
  }

  ${theme.mq.desktop} {
    width: ${(p) => p.theme.breakpoints.desktop};
  }
`;
