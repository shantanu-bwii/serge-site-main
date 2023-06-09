import { m } from "framer-motion";
// @mui
import { Box, Grid, Typography } from "@mui/material";
import Image from "../Image";
// components
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade } from "../animate";

// ----------------------------------------------------------------------

export default function Company() {
  const { translate } = useLocales();

  return (
    <MotionViewport>
      <Box px={3} id="company">
        <Box
          pb={{ xs: 6, md: 10 }}
          pt={{ xs: 12, md: 16 }}
          mt={-6}
          maxWidth="1140px"
          sx={{ mx: "auto" }}
        >
          <m.div variants={varFade({ durationIn: 1 }).inDown}>
            <Typography
              variant="h1"
              mb={4}
              textTransform="capitalize"
              maxWidth="620px"
              textAlign="center"
              mx="auto"
            >
              {translate("company_section_title")}
            </Typography>
          </m.div>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6}>
              <m.div variants={varFade({ durationIn: 1 }).inLeft}>
                <Box
                  textAlign="center"
                  py={{ xs: 6, sm: 8 }}
                  px={{ xs: 2, sm: 4 }}
                  sx={{
                    height: "100%",
                    minHeight: "450px",
                    background:
                      "linear-gradient(180deg, #101322 0%, rgba(116, 90, 203, 0.21) 111.47%)",
                    border: "4px solid #181930",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/logo/logo_sapian.svg"
                    sx={{ width: "278px", mb: 6, mx: "auto" }}
                  />
                  <Typography variant="h3">SAPIAN GROUP</Typography>
                  <Typography variant="body1" mt="auto">
                    {translate("company_section_sapian_desc")}
                  </Typography>
                </Box>
              </m.div>
            </Grid>
            <Grid item xs={12} lg={6}>
              <m.div variants={varFade({ durationIn: 1 }).inRight}>
                <Box
                  textAlign="center"
                  py={{ xs: 6, sm: 8 }}
                  px={{ xs: 2, sm: 4 }}
                  sx={{
                    height: "100%",
                    minHeight: "450px",
                    background:
                      "linear-gradient(180deg, #101322 0%, rgba(116, 90, 203, 0.21) 111.47%)",
                    border: "4px solid #181930",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/logo/logo_flash.svg"
                    sx={{ width: "278px", mb: 6, mx: "auto" }}
                  />
                  <Typography variant="h3">FLASH GROUP</Typography>
                  <Typography variant="body1" mt="auto">
                    {translate("company_section_flash_desc")}
                  </Typography>
                </Box>
              </m.div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MotionViewport>
  );
}
