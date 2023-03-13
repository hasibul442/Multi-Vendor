import { tokens } from "@/themes";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FoodBankOutlined, HomeOutlined, MenuOutlined } from "@mui/icons-material";

// import './sidebar.css';

import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Item(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={props.selected === props.to}
            style={{
                color: colors.gray[100],
            }}
            onClick={() => props.setSelected(props.to)}
            icon={props.icon}
        >
            <Typography variant="h5">{props.title}</Typography>
            {/* <Link to={props.to} /> */}
        </MenuItem>
    );
}

function SideBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("/");
    return (
        <>
            <Box
                sx={{
                    "& .pro-sidebar": {
                        width: "240px !important",
                        minWidth: "240px !important",
                    },
                    "& .pro-sidebar.collapsed": {
                        width: "60px !important",
                        minWidth: "60px !important",
                    },
                    "& .pro-sidebar-inner": {
                        background: `${colors.primary[400]} !important`,
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important",
                    },
                    "& .pro-inner-item": {
                        padding: "5px 20px 5px 10px !important",
                    },
                    "& .pro-inner-item:hover": {
                        color: "#868dfb !important",
                    },
                    "& .pro-menu-item.active": {
                        color: "#6870fa !important",
                    },
                }}
            >
                <ProSidebar collapsed={isCollapsed}>
                    {/* <Sidebar> */}
                    <Menu iconShape="square">
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlined /> : undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.gray[100],
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    ml="15px"
                                >
                                    <Typography
                                        variant="h3"
                                        color={colors.gray[100]}
                                    >
                                        Logo
                                    </Typography>
                                    <IconButton
                                        onClick={() =>
                                            setIsCollapsed(!isCollapsed)
                                        }
                                    >
                                        <MenuOutlined />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        {/* user profile */}

                        {!isCollapsed && (
                            <Box mb="15px">
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <img
                                        alt="profile user"
                                        width="80px"
                                        height="80px"
                                        src={`../../image/user.jpg`}
                                        style={{
                                            cursor: "pointer",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </Box>
                                <Box textAlign="center">
                                    <h2
                                        style={{
                                            margin: "10px 0 0 0",
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            color: colors.gray[100],
                                        }}
                                    >
                                        Hasib
                                    </h2>
                                    <Typography
                                        variant="h6"
                                        color={colors.greenAccent[500]}
                                    >
                                        Vendor
                                    </Typography>
                                </Box>
                                <hr />
                            </Box>
                        )}

                        {/* menu items */}
                        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                            <Item
                                title="Dashboard"
                                to="/"
                                icon={<HomeOutlined />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Orders"
                                to="/orders"
                                icon={<FoodBankOutlined />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Products"
                                to="/products"
                                icon={<FoodBankOutlined />}
                                selected={selected}
                                setSelected={setSelected}
                            />

                        </Box>
                    </Menu>
                    {/* </Sidebar> */}
                </ProSidebar>
            </Box>
        </>
    );
}

export default SideBar;
