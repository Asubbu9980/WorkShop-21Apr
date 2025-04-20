import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const TeamLearning = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2, // Add some margin-bottom for spacing
        }}
      >
        <Button variant="contained" onClick={() => navigate("all")}>
          All Teams
        </Button>
        <Button variant="outlined" onClick={() => navigate("create")}>
          Create Team
        </Button>
      </Box>

      {/* Outlet for nested routes */}
      <Outlet />
    </>
  );
};

export default TeamLearning;