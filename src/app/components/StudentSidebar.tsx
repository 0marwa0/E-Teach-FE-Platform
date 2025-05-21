"use client";

import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
  Divider,
  Stack,
  Paper,
  styled,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Styled components
const ProgressBar = styled(Box)<{ value: number; color: string }>(
  ({ theme, value, color }) => ({
    height: `${value}%`,
    width: "100%",
    borderRadius: 4,
    backgroundColor: color,
    transition: "height 0.3s ease",
  })
);

// Mock data
const profileData = {
  name: "Jonathon Porritt",
  field: "Web Development",
  avatar: null, // Will use MUI Avatar with first letter instead
  progress: {
    lastDays: 6,
    rate: "+67.43%",
    days: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
    // Adjusted values to be more visible (minimum 20%)
    values: [40, 65, 85, 45, 65, 60],
    colors: ["#6c5ce7", "#fd9644", "#feca57", "#2d3436", "#74b9ff", "#fdcb6e"],
    highlight: 2, // Index of the day to highlight (Monday)
    highlightValue: "85%",
  },
  otherClasses: [
    {
      id: 1,
      title: "UI/UX class",
      classNumber: 9,
      topic: "Shape Details",
      instructor: "Umesh Dinda",
      instructorAvatar: null, // Will use MUI Avatar with first letter instead
      thumbnail: null, // Will use colored background instead
      bgColor: "#f44336",
    },
    {
      id: 2,
      title: "Photo Retouching",
      classNumber: 11,
      topic: "Image Choosing",
      instructor: "Marcin Mikus",
      instructorAvatar: null, // Will use MUI Avatar with first letter instead
      thumbnail: null, // Will use colored background instead
      bgColor: "#3f51b5",
    },
    {
      id: 3,
      title: "Web Development",
      classNumber: 8,
      topic: "CSS",
      instructor: "John Doe",
      instructorAvatar: null, // Will use MUI Avatar with first letter instead
      thumbnail: null, // Will use colored background instead
      bgColor: "#4caf50",
    },
  ],
};

const StudentSidebar = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", bgcolor: "#f9f9fb", p: 2 }}>
      {/* Profile Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Profile
        </Typography>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
      </Box>

      {/* Profile Card */}
      <Card
        sx={{
          mb: 4,
          borderRadius: 3,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <CardContent sx={{ textAlign: "center", py: 3 }}>
          <Avatar
            src={profileData.avatar}
            alt={profileData.name}
            sx={{
              width: 100,
              height: 100,
              mx: "auto",
              mb: 2,
              border: "4px solid white",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              bgcolor: "#1a237e",
              fontSize: "2.5rem",
            }}
          >
            {profileData.name.charAt(0)}
          </Avatar>
          <Typography variant="h6" fontWeight="bold">
            {profileData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {profileData.field}
          </Typography>

          {/* Progress Section */}
          <Box sx={{ mt: 4, textAlign: "left" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Progress
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  Last {profileData.progress.lastDays} Days
                </Typography>
                <Typography
                  variant="body2"
                  color="success.main"
                  fontWeight="bold"
                >
                  {profileData.progress.rate}
                </Typography>
              </Box>
            </Box>

            {/* Progress Chart */}
            <Box sx={{ mt: 2, position: "relative" }}>
              {/* Days labels */}
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                {profileData.progress.days.map((day) => (
                  <Typography
                    key={day}
                    variant="caption"
                    color="text.secondary"
                  >
                    {day}
                  </Typography>
                ))}
              </Box>

              {/* Chart bars */}
              <Box
                sx={{
                  display: "flex",
                  height: 120,
                  gap: 2,
                  alignItems: "flex-end",
                  position: "relative",
                  mx: 1,
                }}
              >
                {profileData.progress.values.map((value, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    {index === profileData.progress.highlight && (
                      <Paper
                        elevation={2}
                        sx={{
                          position: "absolute",
                          top: -30,
                          py: 0.5,
                          px: 1,
                          borderRadius: 1,
                          bgcolor: "#1a237e",
                          color: "white",
                          fontSize: "0.75rem",
                          fontWeight: "bold",
                          zIndex: 1,
                        }}
                      >
                        {profileData.progress.highlightValue}
                      </Paper>
                    )}
                    <Box
                      sx={{
                        height: `${value}%`,
                        width: "100%",
                        minWidth: 12,
                        borderRadius: 1,
                        backgroundColor: profileData.progress.colors[index],
                        transition: "height 0.3s ease",
                      }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Value scale */}
              <Box
                sx={{
                  position: "absolute",
                  right: -25,
                  top: 0,
                  height: 120,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.65rem", opacity: 0.7 }}
                >
                  100
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.65rem", opacity: 0.7 }}
                >
                  80
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.65rem", opacity: 0.7 }}
                >
                  60
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.65rem", opacity: 0.7 }}
                >
                  40
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontSize: "0.65rem", opacity: 0.7 }}
                >
                  20
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Other Classes Section */}
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Other Classes
          </Typography>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Stack spacing={2}>
          {profileData.otherClasses.map((course) => (
            <Card
              key={course.id}
              sx={{
                display: "flex",
                height: 80,
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Thumbnail */}
              <Box sx={{ position: "relative", width: 120 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: course.bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <IconButton
                  size="small"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "rgba(0,0,0,0.5)",
                    color: "white",
                    "&:hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <PlayArrowIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Content */}
              <Box
                sx={{
                  p: 1,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle2" fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Class {course.classNumber} - {course.topic}
                </Typography>
                <Box sx={{ mt: "auto", display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    sx={{
                      width: 24,
                      height: 24,
                      mr: 1,
                      fontSize: "0.75rem",
                      bgcolor: course.bgColor,
                    }}
                  >
                    {course.instructor.charAt(0)}
                  </Avatar>
                  <Typography variant="caption">{course.instructor}</Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default StudentSidebar;
