import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import Image from "../Image";
// components
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade } from "../animate";
import DefautlBtn from "../DefaultBtn";

// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  position: "relative",
  zIndex: "2",
  display: "flex",
  background:
    "linear-gradient(261.46deg, #101322 0%, rgba(116, 90, 203, 0.18) 101.6%)",
  boxShadow: "0px 4px 48px rgba(0, 0, 0, 0.15)",
});

// ----------------------------------------------------------------------

export default function Experience() {
  const { translate } = useLocales();

  return (
    <MotionViewport>
      <BoxStyle px={3} id="experience">
        <Box
          pb={{ xs: 6, md: 10 }}
          pt={{ xs: 12, md: 16 }}
          mt={-6}
          maxWidth="1140px"
          sx={{ mx: "auto" }}
        >
          <m.div variants={varFade({ durationIn: 1 }).inRight}>
            <Typography
              variant="h1"
              mb={4}
              textTransform="capitalize"
              textAlign="center"
            >
              {translate("experience_section_title")}
            </Typography>
          </m.div>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={5} order={{ xs: 2, lg: 1 }}>
              <m.div variants={varFade({ durationIn: 1 }).inLeft}>
                <Image src="/assets/images/serge_experience.png" />
              </m.div>
            </Grid>
            <Grid
              item
              xs={12}
              lg={7}
              order={{ xs: 1, lg: 2 }}
              mb={{ xs: 3, lg: 0 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <m.div variants={varFade({ durationIn: 1.2 }).inRight}>
                <Typography variant="body1" mb={4} dangerouslySetInnerHTML={{__html: translate("experience_section_desc")}} />
              </m.div>
              {/* <m.div variants={varFade({ durationIn: 1.3 }).inRight}>
                <DefautlBtn
                  text="read_more"
                  icon="heroicons:arrow-long-right"
                  href="#"
                />
              </m.div> */}
            </Grid>
          </Grid>
        </Box>
        {/* <m.div variants={varFade({ durationIn: 1 }).inUp}> */}
      </BoxStyle>
    </MotionViewport>
  );
}
