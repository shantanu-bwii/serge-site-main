import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../../components/Logo";
import LanguagePopover from "./LanguagePopover";
import useLocales from "../../hooks/useLocales";
import { IconButtonAnimate } from "../../components/animate";
import Iconify from "../../components/Iconify";

const pages = [
  {
    text: "About Me",
    id: "#about",
  },
  {
    text: "Experience",
    id: "#experience",
  },
  {
    text: "My Companies",
    id: "#company",
  },
  {
    text: "My Articles",
    id: "#article",
  },
];
// const socials = ['/assets/images/facebook.png', '/assets/images/twitter.png', '/assets/images/instagram.png'];

const ResponsiveAppBar = ({ bg }) => {
  const [navOpen, setNavOpen] = useState("");

  const handleOpenNavMenu = () => {
    setNavOpen(true);
  };
  const handleCloseNavMenu = () => {
    setNavOpen(false);
  };
  const { translate } = useLocales();
  const OverlayBox = styled("div")({
    position: "fixed",
    left: "0",
    top: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "999",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        height: "100px",
        backgroundColor: `${bg ? "rgba(0, 0, 0, 0.98)" : "transparent"}`,
        // backdropFilter: `${bg ? "blur(25px)" : "none"}`,
        borderBottom: `${bg ? "1px solid #c6c6da" : "none"}`,
        boxShadow: "none",
      }}
    >
      <OverlayBox
        sx={{ display: `${navOpen ? "block" : "none"}` }}
        onClick={handleCloseNavMenu}
      />
      <nav className={navOpen ? "navbar active" : "navbar"}>
        <Box
          sx={{
            m: "48px auto 22px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo type="single_black" />
        </Box>
        {pages.map((page, index) => (
          <Box
            key={index}
            component="a"
            variant="a"
            href={page.id}
            sx={{
              py: 2,
              px: 4,
              color: "white",
              display: "flex",
              alignItems: "center",
              textTransform: "capitalize",
            }}
            onClick={handleCloseNavMenu}
          >
            {translate(page.text)}
          </Box>
        ))}
      </nav>
      <Container maxWidth="xl" sx={{ my: "auto", px: 0 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Logo type="single" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Box>
              <IconButtonAnimate
                onClick={handleOpenNavMenu}
                sx={{ color: "#fff", fontSize: "36px", padding: "4px" }}
              >
                <Iconify icon="eva:menu-2-fill" />
              </IconButtonAnimate>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Logo type="single" />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Box
                key={index}
                component="a"
                href={page.id}
                sx={{
                  my: 2,
                  px: 2,
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                <Box variant="body1" textAlign="center">
                  {translate(page.text)}
                </Box>
              </Box>
            ))}
          </Box>
          <Stack direction="row" spacing={1}>
            <LanguagePopover />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
