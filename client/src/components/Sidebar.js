import React from "react";
import { Drawer, List, ListItem, ListItemText, Toolbar, Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/ml-logo.png"; // Adjust the path to your log

const drawerWidth = 240;

const Sidebar = () => {
  const location = useLocation(); // Get the current path

  const menuItems = [
    { text: "Overview", path: "/" },
    { text: "Social Feed", path: "/social" },
    { text: "Teams", path: "/teams/all" },
    { text: "Course Catalog", path: "/catalog" },
    { text: "Achievements", path: "/achievements" },
    { text: "Reports & Analytics", path: "/reports" },
    { text: "Survey", path: "/survey" }, // Add the new Survey page here
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      {/* Company Logo */}
      <Toolbar>
        <Box sx={{ textAlign: "center", width: "100%" }}>
          <img
            src={Logo} // Replace with the actual path to your logo
            alt="Company Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Toolbar>

      {/* Menu Items */}
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              backgroundColor: location.pathname.split('/')[1] === item.path.split('/')[1] ? "#e0f7fa" : "transparent",
              "&:hover": { backgroundColor: "#e0f7fa" },
              borderRadius: 1,
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                color: location.pathname.split('/')[1] === item.path.split('/')[1] ? "primary.main" : "text.primary",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;