import styled from "styled-components";
import { AvatarBar, ImageWrapper } from "components/Card/Card.styled";
import { Button } from "components/UIKit/Button/Button.styled";
import { Link } from "react-router-dom";
import { theme } from "styles/theme";

export const StyledDevCard = styled("div")`
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  margin-bottom: 30px;

  background-color: ${(p) => p.theme.colors.secondaryBgd};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${(p) => p.theme.radii.borderRadius.large};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);

  ${theme.mq.mobileOnly} {
    max-width: 280px;
    padding: 40px 20px;
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
  font-size: ${(p) => p.theme.fontSizes.l};
  color: ${(p) => p.theme.colors.secondaryText};

  ${theme.mq.mobileOnly} {
    font-size: ${(p) => p.theme.fontSizes.m};
  }
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
  font-size: ${(p) => p.theme.fontSizes.xxs};
  color: ${(p) => p.theme.colors.secondaryText};
  text-decoration: underline;
  word-break: break-all;

  transition: color ${(p) => p.theme.transitions.default};
  &:hover {
    color: ${(p) => p.theme.colors.buttonActive};
  }

  ${theme.mq.tablet} {
    font-size: ${(p) => p.theme.fontSizes.s};
  }
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
  background-color: ${(p) => p.theme.colors.buttonActive};

  &:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  ${theme.mq.mobileOnly} {
    font-size: ${(p) => p.theme.fontSizes.xxs};
  }
`;
