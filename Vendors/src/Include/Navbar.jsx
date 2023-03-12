import {
  DarkModeOutlined,
  Language,
  LanguageOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutline,
  Search,
  SettingsOutlined,
} from "@mui/icons-material";
import { Box, IconButton, InputBase, Menu, MenuItem, useTheme } from "@mui/material";
import React, { useContext,useState } from "react";
import { useTranslation } from "react-i18next";
import { ColorModeContext, tokens } from "../themes";

function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  //Dropdow menu Handler
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //Translator
    const {t, i18n} = useTranslation();

    function handleClicks(lang){
        i18n.changeLanguage(lang);
        handleClose();
    }
  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder={t("Navbar.Search")} />
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
          <IconButton aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
            <LanguageOutlined />
          </IconButton>
        </Box>
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClicks('en') }>English</MenuItem>
        <MenuItem onClick={() => handleClicks('bn') }>বাংলা</MenuItem>
      </Menu>
    </>
  );
}

export default Navbar;
