import styled from "styled-components";

export const StyledCard = styled("div")`
  height: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const AvatarBar = styled("div")`
  position: relative;
  width: 100%;
  height: 80px;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 8px;
    width: 100%;

    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    background-color: ${(p) => p.theme.colors.secondaryBgd};
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
    border-radius: ${(p) => p.theme.radii.borderRadius.circle};
  }
`;

export const ImageWrapper = styled("div")`
  overflow: hidden;
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 62px;
  width: 62px;

  background-color: ${(p) => p.theme.colors.cardBgd};
  box-shadow: 0px -2.19582px 4.39163px #ae7be3;
  border-radius: ${(p) => p.theme.radii.borderRadius.circle};
`;

export const CardMeta = styled("div")`
  padding-top: 26px;
  padding-bottom: 36px;
  line-height: 1.2;
  color: ${(p) => p.theme.colors.primaryText};
`;

export const CardText = styled("p")`
  text-transform: uppercase;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
