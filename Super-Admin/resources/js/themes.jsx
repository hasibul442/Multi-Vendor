import { createContext, useState, useEffect, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        gray: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#717681",
          400: "#1f2a40",
          500: "#333d49",
          600: "#2a323c",
          700: "#1e242b",
          800: "#15191f",
          900: "#0d1014",
        },
        greenAccent: {
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#43A047",
          700: "#388E3C",
          800: "#2E7D32",
          900: "#1B5E20",
        },
        redAccent: {
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
        },
        blueAccent: {
          100: "#BBDEFB",
          200: "#90CAF9",
          300: "#64B5F6",
          400: "#42A5F5",
          500: "#2196F3",
          600: "#1E88E5",
          700: "#1976D2",
          800: "#1565C0",
          900: "#0D47A1",
        },
      }
    : {
        gray: {
          100: "#212121",
          200: "#424242",
          300: "#616161",
          400: "#757575",
          500: "#9E9E9E",
          600: "#BDBDBD",
          700: "#E0E0E0",
          800: "#EEEEEE",
          900: "#F5F5F5",
        },
        primary: {
          100: "#0d1014",
          200: "#15191f",
          300: "#1e242b",
          400: "#2a323c",
          500: "#333d49",
          600: "#525a65",
          700: "#717681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#1B5E20",
          200: "#2E7D32",
          300: "#388E3C",
          400: "#43A047",
          500: "#4CAF50",
          600: "#66BB6A",
          700: "#81C784",
          800: "#A5D6A7",
          900: "#C8E6C9",
        },
        redAccent: {
          100: "#B71C1C",
          200: "#C62828",
          300: "#D32F2F",
          400: "#E53935",
          500: "#F44336",
          600: "#EF5350",
          700: "#E57373",
          800: "#EF9A9A",
          900: "#FFCDD2",
        },
        blueAccent: {},
          100: "#0D47A1",
          200: "#1565C0",
          300: "#1976D2",
          400: "#1E88E5",
          500: "#2196F3",
          600: "#42A5F5",
          700: "#64B5F6",
          800: "#90CAF9",
          900: "#BBDEFB",
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[600],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc ",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: "40px",
      },
      h2: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: "32px",
      },
      h3: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: "24px",
      },
      h4: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: "20px",
      },
      h5: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: "16px",
      },
      h6: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
        fontSize: "14px",
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "dark")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
