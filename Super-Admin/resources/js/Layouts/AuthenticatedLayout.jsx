import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ColorModeContext, useMode } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";

export default function Authenticated({ auth, header, children }) {
    const [theme, colorMode] = useMode();
    return (
        <>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <SideBar />
                        <div className="content">
                            <NavBar />
                            <main>{children}</main>
                        </div>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    );
}
