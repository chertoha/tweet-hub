export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
};

export const theme = {
  colors: {
    primaryBgd: "#ffffff",
    secondaryBgd: "#EBD8FF",
    cardBgd: "#5736A3",
    primaryText: "#EBD8FF",
    secondaryText: "#373737",
  },

  fonts: {
    montserrat: "'Montserrat', sans-serif",
  },

  fontSizes: {
    xxs: "12px",
    xs: "14px",
    s: "16px",
    m: "18px",
    l: "20px",
    xl: "24px",
    xxl: "32px",
  },

  fontWeights: { medium: 500, semiBold: 600 },

  radii: {
    borderRadius: {
      small: "10px",
      large: "20px",
      circle: "50%",
    },
  },

  shadows: {},

  transitions: {
    default: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  breakpoints: {
    mobile: `${breakpoints.mobile}px`,
    tablet: `${breakpoints.tablet}px`,
    desktop: `${breakpoints.desktop}px`,
  },

  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tablet - 0.02}px)`,
    mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tablet
    }px) and (max-width: ${breakpoints.desktop - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
    notDesktop: `@media screen and (max-width: ${
      breakpoints.desktop - 0.02
    }px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  },
};
