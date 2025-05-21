"use client";

import React from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "../components/Sidebar";

export default function TeacherPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar activeItem="analytics" />
      <Box sx={{ flexGrow: 1, ml: "72px" }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          {/* Teacher page content will go here */}
        </Container>
      </Box>
    </Box>
  );
}
