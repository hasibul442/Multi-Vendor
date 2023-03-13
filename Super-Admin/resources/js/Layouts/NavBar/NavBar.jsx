import React, { useContext, useState } from "react";
import {
    DarkModeOutlined,
    LightModeOutlined,
    LogoutOutlined,
    NotificationsOutlined,
    PersonOutline,
    Search,
    SettingsOutlined,
} from "@mui/icons-material";
import {
    Box,
    IconButton,
    InputBase,
    useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "@/themes";
import { Link } from "@inertiajs/react";
function NavBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
        <>
            <Box display="flex" justifyContent="space-between" p={2}>
                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px"
                >
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <Search />
                    </IconButton>
                </Box>

                {/* Icons */}
                <Box display="flex">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlined />
                        ) : (
                            <LightModeOutlined />
                        )}
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlined />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined />
                    </IconButton>
                    <IconButton>
                        <PersonOutline />
                    </IconButton>
                    <IconButton>
                        <Link method="post"
                        href={route("logout")}
                        style={{ padding : "0px", margin : "0px" }}
                        >
                            <LogoutOutlined />
                        </Link>

                    </IconButton>
                </Box>
            </Box>
        </>
    );
}

export default NavBar;
