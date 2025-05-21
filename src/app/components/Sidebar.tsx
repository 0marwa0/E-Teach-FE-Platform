"use client";

import React from "react";
import { Box, IconButton, Tooltip, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom Logo Component
const LogoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 4L4 12L16 20L28 12L16 4Z" fill="#4CAF50" />
    <path d="M18 4L6 12L18 20L30 12L18 4Z" fill="#7C4DFF" fillOpacity="0.6" />
  </svg>
);

// Menu Icons
const MenuIcon = ({ d, active = false }: { d: string; active?: boolean }) => (
  <SvgIcon viewBox="0 0 24 24">
    <path d={d} fill={active ? "#7C4DFF" : "#666"} />
  </SvgIcon>
);

// Styled components
const SidebarContainer = styled(Box)(({ theme }) => ({
  width: "72px",
  height: "100vh",
  backgroundColor: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2, 0),
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.05)",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 1200,
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(4),
  gap: theme.spacing(3),
}));

interface SidebarProps {
  activeItem?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = "analytics" }) => {
  // Menu items with their paths and icons
  const menuItems = [
    {
      id: "dashboard",
      tooltip: "Dashboard",
      icon: "M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z",
    },
    {
      id: "analytics",
      tooltip: "Analytics",
      icon: "M3 13h2v7H3v-7zm4-7h2v14H7V6zm4 3h2v11h-2V9zm4 2h2v9h-2v-9zm4-6h2v15h-2V5z",
    },
    {
      id: "courses",
      tooltip: "Courses",
      icon: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z",
    },
    {
      id: "stats",
      tooltip: "Statistics",
      icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
    },
    {
      id: "files",
      tooltip: "Files",
      icon: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z",
    },
    {
      id: "security",
      tooltip: "Security",
      icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
    },
  ];

  return (
    <SidebarContainer>
      <Box sx={{ mt: 1 }}>
        <LogoIcon />
      </Box>

      <IconContainer>
        {menuItems.map((item) => (
          <Tooltip key={item.id} title={item.tooltip} placement="right">
            <IconButton
              size="large"
              color={activeItem === item.id ? "primary" : "default"}
              sx={{
                p: 1.5,
                "&:hover": {
                  backgroundColor: "rgba(124, 77, 255, 0.08)",
                },
                ...(activeItem === item.id && {
                  backgroundColor: "rgba(124, 77, 255, 0.12)",
                }),
              }}
            >
              <MenuIcon d={item.icon} active={activeItem === item.id} />
            </IconButton>
          </Tooltip>
        ))}
      </IconContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
