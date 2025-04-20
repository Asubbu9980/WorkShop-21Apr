import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

const teams = [
  {
    id: 1,
    name: "Skill Masters Team",
    members: 5,
    image: "https://img.freepik.com/free-photo/business-people-meeting_53876-102622.jpg",
  },
  {
    id: 2,
    name: "AI Learners",
    members: 4,
    image: "https://img.freepik.com/premium-photo/ai-chip-intelligence-technology_31965-5486.jpg",
  },
  {
    id: 3,
    name: "Python Team",
    members: 2,
    image: "https://cdn.analyticsvidhya.com/wp-content/uploads/2022/06/python-featured-image.jpg",
  },
  {
    id: 4,
    name: "AT Team",
    members: 2,
    image: "https://t4.ftcdn.net/jpg/03/60/26/84/360_F_360268470_HOoQ2pMGuB8c9ZrI0QO63VbRFLAlETjS.jpg",
  },
];

const AllTeams = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 1 }}>
      {/* Top header buttons */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            textTransform: "none",
            borderRadius: 2,
            px: 3,
            mb: { xs: 2, sm: 0 },
          }}
        >
          All Teams
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/teams/create")}
          sx={{
            backgroundColor: "#0B5ED7",
            textTransform: "none",
            px: 2,
            borderRadius: 2,
          }}
        >
          + New Team
        </Button>
      </Box> */}

     
      <Grid container spacing={3}>
        {teams.map((team) => (
          <Grid key={team.id} item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={team.image}
                alt={team.name}
                sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {team.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  {/* <GroupsIcon fontSize="small" sx={{ color: "#1976d2", mr: 1 }} /> */}
                  <Typography variant="body2" color="text.secondary">
                    {team.members} Members
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 500,
                  }}
                  onClick={() => navigate(`/teams/${team.id}`)}
                >
                  View Team
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllTeams;
