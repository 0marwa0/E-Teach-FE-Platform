"use client";

import React from "react";
import { Box, Container, Paper, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import StudentSidebar from "../components/StudentSidebar";
import useSocket from "../hooks/useSocket";

export default function StudentPage() {
  useSocket();
  return (
    <Box sx={{ display: "flex" }}>
      {/* Main navigation sidebar */}
      <Sidebar activeItem="courses" />

      {/* Main content area */}
      <Box sx={{ flexGrow: 1, ml: "72px" }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            {/* Main content */}
            <Box sx={{ flex: { xs: "1", md: "2" } }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Main content will go here */}
                {/* This is where course videos, lessons, etc. would appear */}
              </Paper>
            </Box>

            {/* Right sidebar with profile and other classes */}
            <Box sx={{ flex: { xs: "1", md: "1" } }}>
              <StudentSidebar />
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
