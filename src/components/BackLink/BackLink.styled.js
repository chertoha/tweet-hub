import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "styles/theme";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.secondaryText};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};

  transition: color ${(p) => p.theme.transitions.default};
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }

  ${theme.mq.tablet} {
    font-size: ${(p) => p.theme.fontSizes.xl};
  }
`;
