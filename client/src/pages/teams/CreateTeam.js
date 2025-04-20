import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Avatar,
  AvatarGroup,
  InputLabel,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";


const mockPeople = [
  { name: "John", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Sara", avatar: "https://i.pravatar.cc/150?img=2" },
  { name: "Ali", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Jane", avatar: "https://i.pravatar.cc/150?img=4" },
  { name: "Mark", avatar: "https://i.pravatar.cc/150?img=5" },
];

const CreateTeam = () => {
  const [teamImage, setTeamImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTeamImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Team Created!");
  };

  return (
    <Paper sx={{ p: 4, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Provide details for your Team
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {/* Team Name */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Team Name"
              placeholder='e.g., "Python for Beginners"'
              {...register("teamName", { required: "Team Name is required" })}
              error={!!errors.teamName}
              helperText={errors.teamName?.message}
            />
          </Grid>

          {/* Team Description */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Team Description"
              placeholder='e.g., "Python for Beginners"'
              {...register("teamDescription", {
                required: "Description is required",
              })}
              error={!!errors.teamDescription}
              helperText={errors.teamDescription?.message}
            />
          </Grid>

          {/* Add People */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Add people"
              placeholder="Search for people"
              {...register("people", { required: "Please add at least 1 person" })}
              error={!!errors.people}
              helperText={errors.people?.message}
            />
            {/* <Box mt={2}>
              <AvatarGroup max={5}>
                {mockPeople.map((person, index) => (
                  <Avatar key={index} alt={person.name} src={person.avatar} />
                ))}
              </AvatarGroup>
              <Typography variant="caption" mt={1}>
                05 Members
              </Typography>
            </Box> */}
          </Grid>

          {/* Image Upload */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                border: "2px dashed #ccc",
                p: 2,
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <InputLabel>Team Image</InputLabel>
              <label htmlFor="upload-button">
                <input
                  accept="image/*"
                  id="upload-button"
                  type="file"
                  hidden
                  onChange={handleImageChange}
                />
                <Box
                  sx={{
                    border: "1px dashed lightgray",
                    padding: "16px",
                    marginY: 2,
                    cursor: "pointer",
                  }}
                >
                  {teamImage ? (
                    <img
                      src={teamImage}
                      alt="Uploaded"
                      style={{ width: "100%", maxHeight: "140px", objectFit: "cover" }}
                    />
                  ) : (
                    <>
                      {/* <UploadFileIcon color="action" fontSize="large" /> */}
                      <Typography variant="body2">Drag & drop your files here</Typography>
                      <Typography variant="caption" color="primary">
                        Browse File
                      </Typography>
                    </>
                  )}
                </Box>
              </label>
              <Button variant="contained" fullWidth>
                Upload
              </Button>
            </Box>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Box textAlign="right">
              <Button type="submit" variant="contained" size="large">
                Create
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CreateTeam;
