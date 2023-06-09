import { m } from "framer-motion";
// @mui
import { Box, Grid, Typography } from "@mui/material";
import Image from "../Image";
// components
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade, varZoom } from "../animate";

// ----------------------------------------------------------------------

export default function Service() {
  const { translate } = useLocales();
  const servideData = [
    { img: "/assets/images/service_icon1.svg", title: "service_item_title1" },
    { img: "/assets/images/service_icon2.svg", title: "service_item_title2" },
    { img: "/assets/images/service_icon3.svg", title: "service_item_title3" },
    { img: "/assets/images/service_icon4.svg", title: "service_item_title4" },
    { img: "/assets/images/service_icon5.svg", title: "service_item_title5" },
  ];

  return (
    <MotionViewport>
      <Box px={3} id="service">
        <Box maxWidth="1140px" sx={{ mx: "auto" }}>
          <m.div variants={varFade({ durationIn: 1 }).inDown}>
            <Typography
              variant="h1"
              mb={4}
              textTransform="capitalize"
              textAlign="center"
            >
              {translate("service_section_title")}
            </Typography>
          </m.div>
          <Grid container spacing={4} justifyContent="center">
            {servideData.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3} lg>
                <m.div variants={varZoom({ durationIn: 1 + index / 5 }).in}>
                  <Box
                    py={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                      background:
                        "linear-gradient(180deg, rgba(16, 19, 34, 0) 0%, rgba(116, 90, 203, 0.21) 111.47%)",
                      border: "1px solid #181930",
                      borderRadius: "16px",
                    }}
                  >
                    <Image
                      src={item.img}
                      sx={{ width: "64px", height: "64px", mb: 3 }}
                    />
                    <Typography
                      variant="body1"
                      textAlign="center"
                      dangerouslySetInnerHTML={{
                        __html: translate(item.title),
                      }}
                    />
                  </Box>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </MotionViewport>
  );
}
