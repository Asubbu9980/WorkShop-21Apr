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
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";

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
    setValue,
    formState: { errors },
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTeamImage(file); // Store the file for FormData
      setValue("teamImage", file); // Set the file in the form state
    }
  };

  const onSubmit = async (data) => {
    // Log the form data to the console
    console.log("Form Data:", {
      ...data,
      teamImage: teamImage ? teamImage.name : null, // Include the image name if provided
    });

    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("teamName", data.teamName);
      formData.append("teamDescription", data.teamDescription);
      formData.append("people", data.people);
      if (teamImage) {
        formData.append("teamImage", teamImage);
      }

      // Make API call using axios
      const response = await axios.post("/api/teams", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("API Response:", response.data);
      alert("Team Created Successfully!");
    } catch (error) {
      console.error("Error creating team:", error);
      alert("Failed to create team. Please try again.");
    }
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
          </Grid>

          {/* Image Upload */}
          {/* Image Upload */}
<Grid item xs={12} md={6}>
  <Box
    sx={{
      border: "2px dashed #ccc",
      p: 2,
      textAlign: "center",
      borderRadius: 2,
      position: "relative", // Enable positioning for the X icon
    }}
  >
    <InputLabel>Team Image (Optional)</InputLabel>
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
          position: "relative",
        }}
      >
        {teamImage ? (
          <>
            {/* Display the uploaded image */}
            <img
              src={URL.createObjectURL(teamImage)}
              alt="Uploaded"
              style={{
                width: "100%",
                maxHeight: "140px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            {/* X Icon to clear the image */}
            <IconButton
              onClick={() => setTeamImage(null)}
              sx={{
                position: "absolute",
                top: 8,
                right: 0,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                },
              }}
            >
              <Typography variant="body2">X</Typography>
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="body2">Drag & drop your files here</Typography>
            <Typography variant="caption" color="primary">
              Browse File
            </Typography>
          </>
        )}
      </Box>
    </label>
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