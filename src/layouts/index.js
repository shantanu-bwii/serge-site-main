import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

// @mui
import { Box } from "@mui/material";
// config
//
import Header from "./header";
import Footer from "./footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleHeaderBg);
  });
  const handleHeaderBg = () => {
    const position = window.pageYOffset;
    if (position > 40) setHeaderBg(true);
    else setHeaderBg(false);
  };
  return (
    <Box>
      <Header bg={headerBg} />
      <Box component="main">
        <Outlet />
      </Box>
      <Footer />
      <ScrollToTopBtn />
    </Box>
  );
}
