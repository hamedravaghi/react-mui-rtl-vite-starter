export const themeSetting = (isNonMobile) => {
  return {
    palette: {
      primary: {
        main: "#F4AB76",
      },
      secondary: {
        main: "#516163",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: isNonMobile ? "14px" : "7px",
          },
        },
      },
    },
    typography: {
      fontFamily: ["IRANSansXFaNum", "sense-serif"].join(","),
      fontSize: 12,
      color: "#333333",
      fontWeight: "normal",
      h1: {
        fontFamily: ["IRANSansXFaNum", "sense-serif"].join(","),
        fontWeight: "bold",
        fontSize: 40,
      },
      h2: {
        fontFamily: ["IRANSansXFaNum", "sense-serif"].join(","),
        fontSize: 32,
        fontWeight: "bold",
      },
      h3: {
        fontFamily: ["IRANSansXFaNum", "sense-serif"].join(","),
        fontSize: 24,
        fontWeight: "bold",
      },
      h4: {
        fontFamily: ["IRANSansXFaNum", "sense-serif"].join(","),
        fontSize: 20,
        fontWeight: "bold",
      },
      h5: {
        fontFamily: ["IRANSansXFaNum", "sense-serif"].join(","),
        fontSize: 16,
        fontWeight: "bold",
      },
      h6: {
        fontFamily: ["IRANSansXFaNum", "sense-serif"].join(","),
        fontSize: 14,
        fontWeight: "bold",
      },
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    },
  };
};
