import { createTheme } from "@mui/material";
import { CONFIG } from "src/config";

export const theme = createTheme({
    palette: {
        mode: CONFIG.THEME.DEFAULT_THEME,
        primary: {
            main: "#F5820D",
            dark: CONFIG.THEME.DEFAULT_COLOR,
        },
        secondary: {
            main: "#2B3530",
        },
        background: {
            default: "#000402",
            paper: "#010A06",
        },
        gradients: {
            primary:
                "linear-gradient(114.41deg, #F5820D 14.86%, #5E0A0A 94.57%)",
            background:
                "linear-gradient(to right bottom, #010a06, #010905, #000805, #000604, #000503, #050b09, #0a100e, #0f1412, #171c1a, #1d2421, #242c28, #2b3530)",
        },
        border: {
            main: "rgba(255, 255, 255, 0.12)",
        },
        tertiary: {
            light: "#CCCECD",
            main: "#565D5A",
            dark: "#3C3F3D",
        },
    },
    typography: {
        fontFamily: CONFIG.THEME.DEFAULT_FONT,
    },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "h5",
                    },
                    style: {
                        fontSize: 18,
                        fontWeight: 700,
                    },
                },
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 14,
                        fontWeight: 500,
                        marginTop: 3,
                        color: "#565D5A",
                    },
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 13,
                        fontWeight: 700,
                        marginTop: 12,
                    },
                },
                {
                    props: {
                        variant: "hero-title",
                    },
                    style: {
                        fontSize: 28,
                        fontWeight: 700,
                    },
                },
                {
                    props: {
                        variant: "section-title",
                    },
                    style: {
                        fontSize: 30,
                        fontWeight: "bolder !important",
                        background:
                            "linear-gradient(114.41deg, #F5820D 14.86%, #5E0A0A 94.57%)",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                        textAlign: "left",
                    },
                },
                {
                    props: {
                        variant: "hero-subtitle",
                    },
                    style: {
                        fontSize: 22,
                        fontWeight: 700,
                    },
                },
            ],
        },
        MuiButton: {
            variants: [
                {
                    props: {
                        variant: "nav-item",
                    },
                    style: {
                        borderRadius: "12px !important",
                        padding: "8px 20px !important",
                        "&.active": {
                            backgroundColor: "#2B3530",
                        },
                    },
                },
            ],
        },
    },
});
