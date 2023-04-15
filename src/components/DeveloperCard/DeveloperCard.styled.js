import { AvatarBar, ImageWrapper } from "components/Card/Card.styled";
import { Button } from "components/UIKit/Button/Button.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledDevCard = styled("div")`
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  /* max-width: 280px; */

  background-color: ${(p) => p.theme.colors.secondaryBgd};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${(p) => p.theme.radii.borderRadius.large};

  ${theme.mq.mobileOnly} {
    max-width: 280px;
  }

  ${theme.mq.tablet} {
    width: 500px;
  }
`;

export const DevAvatarBar = styled(AvatarBar)`
  height: 120px;

  &::after {
    height: 120px;
    width: 120px;
  }
`;

export const AvatarWrapper = styled(ImageWrapper)`
  height: 100px;
  width: 100px;
`;

export const AvatarImage = styled("img")`
  display: block;
  height: 100%;
  width: 100%;
`;

export const LinksTitle = styled("h2")`
  margin-top: 25px;
  /* text-align: center; */
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.secondaryText};
`;

export const LinksList = styled("ul")`
  margin-top: 10px;
`;

export const LinksItem = styled("li")`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const DevLink = styled(Link)`
  font-size: ${(p) => p.theme.fontSizes.xs};
  color: ${(p) => p.theme.colors.secondaryText};
  text-decoration: underline;

  transition: color ${(p) => p.theme.transitions.default};
  &:hover {
    color: ${(p) => p.theme.colors.buttonActive};
  }

  ${theme.mq.desktop} {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
  word-break: break-all;
`;

export const GoToTweetsLink = styled(Link)`
  display: block;
  margin-top: 50px;
  width: 60%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;

  ${theme.mq.mobileOnly} {
    width: auto;
    height: 40px;
  }
`;

export const TweetsLinkButton = styled(Button)`
  display: block;
  width: 100%;
  height: 100%;
  /* padding: 14px 30px; */
  background-color: ${(p) => p.theme.colors.buttonActive};

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  ${theme.mq.mobileOnly} {
    font-size: ${(p) => p.theme.fontSizes.xs};
  }
`;
