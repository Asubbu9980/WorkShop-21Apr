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
<Box sx={{ mt: 1 }}>
<Typography>create Team</Typography>
  </Box>
  );
};

export default CreateTeam;