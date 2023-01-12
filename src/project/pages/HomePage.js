import { Box, Paper } from "@mui/material";
import React from "react";

function HomePage() {
  return (
    <>
      <Paper
        sx={{
          minHeight: "100vh",
          background: "rgba(225,225,225,0.1)",
          boxShadow: "3px 3px rgba(0, 0, 0, 0.2)",
        }}>
        <Box sx={{ p: 1 }}>Dashboard</Box>
      </Paper>
    </>
  );
}

export default HomePage;
