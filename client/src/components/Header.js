import React, { useEffect } from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from '@mui/material/IconButton';
import InputBase from "@mui/material/InputBase";
// import Avatar from '@mui/material/Avatar';
import Box from "@mui/material/Box";
// import Badge from '@mui/material/Badge';
import { styled, alpha } from "@mui/material/styles";
 
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
 import CalendarTodayIcon from "@mui/icons-material/CalendarToday";


import { Container, Row, Col } from "react-bootstrap";
import {
  TextField,
  IconButton,
  Badge,
  Avatar,
  InputAdornment,
  Menu,
  MenuItem,
  Popover,
  Typography,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { fontSize } from "@mui/system";

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: 24,
  padding: "8px 16px",
  maxWidth: 600,
  flexGrow: 1,
  border: "1px solid #E7EAE9", // Matches the rounded input border
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.black, 0.1),
  //   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  paddingRight: theme.spacing(1),
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "",
  width: "100%",
}));

const IconContainer = styled(IconButton)(({ theme }) => ({
  border: "1px solid #ddd",
  borderRadius: 12,
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.05),
  },
}));

function Header({ drawerWidth = 240 }) {
 // user.roles is an array of roles
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCalender, setShowCalender] = useState(false)
  const [notificatioAanchorEl, setNotificationAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
 
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "You have been unenrolled from the Journey 'Account Management - Level 1'.",
      date: '5 days ago',
    },
    {
      id: 2,
      message: "You have been assigned to a Journey 'Account Management - Level 1'.",
      date: '5 days ago',
    },
  ]);

 

  // Handle avatar click to open dropdown menu
  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
 

  // Menu actions
 
  // notification popover handleing
  

  
  


  // profile
  

    return (
      <AppBar
        position="fixed"
        className="shadow-sm"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)",
        //  boxShadow: "1px solid #E7EAE9",
          paddingX: 2,
          zIndex: (theme) => theme.zIndex.drawer + 1, // Ensures it stays above sidebar
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <SearchContainer>
            <StyledInputBase placeholder="Search from courses..." />
            <SearchIconWrapper>
              <SearchIcon color="action" />
            </SearchIconWrapper>
          </SearchContainer>

          {/* Icons & Profile (Right) */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2, padding: 2 }}
          >
           

           

          

            {/* Calendar Icon */}
            <IconContainer onClick={() => setShowCalender(!showCalender)}>
              <CalendarTodayIcon color="action" />
            </IconContainer>
         

            {/* Notifications Icon */}
            <IconButton 
            //</Box>onClick={(e) => handleNotificationClick(e)}
            >
              <Badge
                color="error"
                variant="dot"
                invisible={notifications.length === 0}
              > 
                <NotificationsNoneIcon color="action" />
               </Badge>
            </IconButton>

            {/* Popover */}
         

            {/* Avatar with Dropdown Menu */}
            <Avatar
              src={ "https://i.pravatar.cc/40"}
              sx={{ border: "2px solid #ff5722", cursor: "pointer" }}
              onClick={handleAvatarClick}
            />
            
          </Box>
        </Toolbar>
      </AppBar>
    );
  }


export default Header;
