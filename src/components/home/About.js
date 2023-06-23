import { m } from "framer-motion";
import { useState } from "react";

// @mui
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// components
import { MotionViewport, varBounce, varFade, varFlip } from "../animate";
import useLocales from "../../hooks/useLocales";
import Image from "../Image";
// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  position: "relative",
  zIndex: "3",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTab-root": {
    marginRight: "0 !important",
    color: "#745ACB",
    transition: "all ease 500ms",
  },
  "& .Mui-selected": {
    color: "#BACECE !important",
    background: "rgba(116, 90, 203, 0.74)",
  },
  // "& .css-49kukx-MuiButtonBase-root-MuiTab-root.Mui-selected:before": {
  //   content: "''",
  //   width: "120px",
  //   height: "120px",
  //   backgroundImage: "url(/assets/images/gradient-circle.svg)",
  //   background: "rgba(116, 90, 203, 0.74)",
  //   filter: "blur(75px)",
  //   transform: "matrix(-1, 0, 0, 1, 0, 0)",
  //   color: "#745ACB",
  // },
  "& .border-box": {
    border: "2px solid #181930",
    borderRadius: "16px",
    minHeight: "240px",
    backgroundImage: "url(/assets/images/globe.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "96% 16px",
  },
});

// ----------------------------------------------------------------------

export default function About() {
  const { translate } = useLocales();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MotionViewport>
      <BoxStyle
        px={3}
        id="about"
        pb={{ xs: 6, md: 10 }}
        pt={{ xs: 12, md: 16 }}
        mt={-6}
      >
        <m.div variants={varFade({ durationIn: 1 }).inUp}>
          <Typography
            variant="h1"
            textAlign="center"
            textTransform="capitalize"
            mb={4}
          >
            {translate("about_section_title")}
          </Typography>
        </m.div>
        <m.div variants={varFade({ durationIn: 1.2 }).inUp}>
          <Box
            py={{ xs: 6, md: 8 }}
            px={{ xs: 3, md: 6 }}
            maxWidth="1140px"
            sx={{
              background:
                "linear-gradient(261.46deg, #101322 0%, rgba(116, 90, 203, 0.18) 101.6%)",
              boxShadow: "0px 4px 48px rgba(0, 0, 0, 0.15)",
              mx: "auto",
              borderRadius: "16px",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={12}
                md={5}
                textAlign="center"
                mb={{ xs: 4, md: 0 }}
              >
                <m.div variants={varFlip({ durationIn: 1.3 }).inY}>
                  <Image
                    src="/assets/images/serge_about.png"
                    sx={{ maxWidth: "436px", mx: "auto" }}
                  />
                </m.div>
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                pl={{ xs: 0, md: 6 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <m.div variants={varBounce({ durationIn: 1.2 }).in}>
                  <Image
                    src="/assets/images/quote.png"
                    sx={{ width: "46px" }}
                  />
                </m.div>
                <m.div variants={varFade({ durationIn: 1.3 }).inRight}>
                  <Typography variant="body1" px="46px">
                    {translate("about_section_desc")}
                  </Typography>
                </m.div>
                <m.div variants={varBounce({ durationIn: 1.4 }).in}>
                  <Image
                    src="/assets/images/quote.png"
                    sx={{ width: "46px", ml: "auto", mb: 6 }}
                  />
                </m.div>
                <m.div variants={varFade({ durationIn: 3 }).inRight}>
                  <Box display="flex" justifyContent="end">
                    <svg
                      width="76%"
                      height="1"
                      viewBox="0 0 530 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="529.302"
                        y1="0.5"
                        x2="-6.10713e-05"
                        y2="0.499944"
                        stroke="url(#paint0_linear_73_1279)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_73_1279"
                          x1="-12.8191"
                          y1="-0.00457601"
                          x2="529.302"
                          y2="-0.00144615"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" />
                          <stop
                            offset="0.981329"
                            stopColor="white"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </Box>
                </m.div>
              </Grid>
            </Grid>
          </Box>
        </m.div>

        <Box
          maxWidth="1140px"
          mx="auto"
          mt={6}
          px={{ xs: 0, sm: 4 }}
          sx={{ width: "100%" }}
        >
          <TabContext value={value}>
            <m.div variants={varFade({ durationIn: 1.3 }).inUp}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Africa"
                  value="1"
                  sx={{ typography: "h2", flex: "1" }}
                />
                <Tab
                  label="Europe"
                  value="2"
                  sx={{ typography: "h2", flex: "1" }}
                />
                <Tab
                  label="The World"
                  value="3"
                  sx={{ typography: "h2", flex: "1" }}
                />
              </TabList>
            </m.div>
            <m.div variants={varFade({ durationIn: 1.3 }).inUp}>
              <TabPanel value="1" sx={{ py: 4, mr: 0 }}>
                <Box className="border-box" p={{ xs: 3, sx: 6 }}>
                  <Typography variant="h3" mb={4}>
                    {translate("about_section_africa_title")}
                  </Typography>
                  <Typography variant="body1">
                    {translate("about_section_africa_desc")}
                  </Typography>
                </Box>
              </TabPanel>
              <TabPanel value="2" sx={{ py: 4, mr: 0 }}>
                <Box className="border-box" p={{ xs: 3, sx: 6 }}>
                  <Typography variant="h3" mb={4}>
                    {translate("about_section_europe_title")}
                  </Typography>
                  <Typography variant="body1">
                    {translate("about_section_europe_desc")}
                  </Typography>
                </Box>
              </TabPanel>
              <TabPanel value="3" sx={{ py: 4 }}>
                <Box className="border-box" p={{ xs: 3, sx: 6 }}>
                  <Typography variant="h3" mb={4}>
                    {translate("about_section_world_title")}
                  </Typography>
                  <Typography variant="body1">
                    {translate("about_section_world_desc")}
                  </Typography>
                </Box>
              </TabPanel>
            </m.div>
          </TabContext>
        </Box>
      </BoxStyle>
    </MotionViewport>
  );
}
