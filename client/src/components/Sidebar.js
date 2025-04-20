import React from "react";
import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Sidebar = () => {
  const menuItems = [
    { text: "Overview", path: "/" },
    { text: "Social Feed", path: "/social" },
    { text: "Team Learning", path: "/teams/all" },
    { text: "Course Catalog", path: "/catalog" },
    { text: "Achievements", path: "/achievements" },
    { text: "Reports & Analytics", path: "/reports" },
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
      <Toolbar />
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
