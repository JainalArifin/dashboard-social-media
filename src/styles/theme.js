import { createTheme } from "@mui/material/styles";
import { COLOR_PRIMARY, COLOR_ERROR, COLOR_FONT } from ".";

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiTable: {
      root: {
        tableLayout: "fixed",
        width: "100%",
      },
    },
    MuiTableHead: {
      root: {
        borderBottom: "1px solid #c8d0e0",
      },
    },
    MuiTableRow: {
      root: {
        height: 50,
        "&:nth-child(odd)": {
          backgroundColor: "#f5f7fa",
        },
      },
      head: {
        height: 50,
        backgroundColor: "#ffffff !important",
      },
    },
    MuiTableCell: {
      body: {
        color: COLOR_FONT,
        textAlign: "center",
        fontSize: "14px",
      },
      root: {
        textAlign: "center",
        padding: 4,
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        fontSize: "12px",
        color: COLOR_FONT,
        borderBottom: "none",
        fontFamily: "Ubuntu, Arial",
        "&:first-child": {
          padding: "0 4px 0 8px",
        },
        "&:last-child": {
          padding: "0 8px 0 4px !important",
        },
      },
      head: {
        fontWeight: "bold",
        color: COLOR_FONT,
      },
    },
    MuiPopover: {
      paper: {
        boxShadow:
          "0 0 1px 0 rgba(72, 122, 157, 0.47), 0 3px 6px 0 rgba(72, 122, 157, 0.3)",
        width: 190,
        borderRadius: 5,
        overflowY: "hidden",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: "rgba(66, 90, 112)",
        color: "#ffffff",
        opacity: 0.9,
        padding: 8,
        maxWidth: 200,
        minHeight: 32,
        borderRadius: 3,
        fontSize: 12,
      },
      tooltipPlacementRight: {
        maxWidth: "500px !important",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
    color: COLOR_FONT,
    fontSize: 14,
  },
  palette: {
    primary: {
      main: COLOR_PRIMARY,
    },
    error: {
      main: COLOR_ERROR,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
