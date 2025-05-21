"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          E-Teach Platform
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Online learning platform for students and teachers
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Box sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
              <Typography variant="h5" component="h2" fontWeight="bold">
                Student Portal
              </Typography>
            </Box>
            <CardContent
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography sx={{ mb: 2 }}>
                Access your courses, track your progress, and interact with your
                instructors and peers.
              </Typography>
              <Box sx={{ mt: "auto", pt: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={() => router.push("/student")}
                >
                  Enter as Student
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Box sx={{ p: 2, bgcolor: "secondary.main", color: "white" }}>
              <Typography variant="h5" component="h2" fontWeight="bold">
                Teacher Portal
              </Typography>
            </Box>
            <CardContent
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography sx={{ mb: 2 }}>
                Manage your courses, create content, track student progress, and
                communicate with your students.
              </Typography>
              <Box sx={{ mt: "auto", pt: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="large"
                  onClick={() => router.push("/teacher")}
                >
                  Enter as Teacher
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", mt: 8, color: "text.secondary" }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} E-Teach Platform. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}
