import styled from "styled-components";

export const Button = styled("button")`
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;

  font-family: ${(p) => p.theme.fonts.montserrat};
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1.22;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.secondaryText};

  border-radius: ${(p) => p.theme.radii.borderRadius.small};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  &:focus,
  &:focus-visible {
    outline: 1px solid "#000000";
  }
`;
