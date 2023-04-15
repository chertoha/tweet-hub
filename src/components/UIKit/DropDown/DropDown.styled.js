import styled, { css } from "styled-components";

export const DropDownWrapper = styled("div")`
  position: relative;
`;

export const TitleWrapper = styled("div")`
  cursor: pointer;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
`;

export const Title = styled("span")`
  margin-right: 5px;
  font-size: ${(p) => p.theme.fontSizes.l};
  transition: color ${(p) => p.theme.transitions.default};
`;

export const DropDownList = styled("ul")`
  overflow: hidden;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 9999;

  width: 200px;

  background-color: ${(p) => p.theme.colors.secondaryBgd};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${(p) => p.theme.radii.borderRadius.small};
`;

export const DropDownItem = styled("li")`
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;

  color: rgba(0, 0, 0, 0.5);

  ${(p) =>
    p.link &&
    css`
      cursor: pointer;
      color: ${(p) => p.theme.colors.secondaryText};
      &:hover {
        background-color: ${(p) => p.theme.colors.buttonActive};
        color: #ffffff;
      }
    `}

  font-size: ${(p) => p.theme.fontSizes.l};

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;
