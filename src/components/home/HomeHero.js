import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
// components
import { IconButtonAnimate, MotionViewport, varFade } from "../animate";
import useLocales from "../../hooks/useLocales";
import DefaultBtn from "../DefaultBtn";
import Iconify from "../Iconify";
// ----------------------------------------------------------------------

const BoxStyle = styled(Box)({
  // maxWidth: "1200px",
  height: "100vh",
  margin: "0 auto",
  position: "relative",
  backgroundImage: "url(/assets/images/hero_bg.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  overflowX: "hidden",
  "&>div": {
    height: "100%",
    maxWidth: "750px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  zIndex: "5",
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { translate } = useLocales();
  const socialData = [
    {
      img: "grommet-icons:instagram",
      url: "https://www.instagram.com/sergelobreau/",
    },
    {
      img: "akar-icons:twitter-fill",
      url: "https://twitter.com/lobreauserge",
    },
    {
      img: "grommet-icons:tictok",
      url: "https://www.tiktok.com/@lobreauserge ",
    },
    {
      img: "akar-icons:linkedin-fill",
      url: "https://uk.linkedin.com/in/sergelobreau",
    },
    {
      img: "akar-icons:youtube-fill",
      url: "https://www.youtube.com/@sergemauricelobreauientrep9066",
    },
  ];
  return (
    <MotionViewport>
      <BoxStyle
        sx={{
          backgroundPosition: {
            xs: "center left",
            md: "center center",
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            marginLeft: { xs: "0", md: "50vw" },
            px: { xs: 2, sm: 6, md: 0 },
          }}
          pt={{ xs: 8, sm: 0 }}
        >
          <m.div variants={varFade({ durationIn: 1 }).inRight}>
            <Typography variant="h3" textTransform="uppercase" mb={3}>
              {translate("hero_title1")}
            </Typography>
          </m.div>
          <m.div variants={varFade({ durationIn: 1.2 }).inRight}>
            <Typography
              variant="h2"
              textTransform="uppercase"
              mb={3}
              dangerouslySetInnerHTML={{ __html: translate("hero_title2") }}
            />
          </m.div>
          <m.div variants={varFade({ durationIn: 1.4 }).inRight}>
            <Typography
              variant="h1"
              textTransform="uppercase"
              mb={{ xs: 3, sm: 4 }}
              dangerouslySetInnerHTML={{ __html: translate("hero_title3") }}
            />
          </m.div>
          <m.div variants={varFade({ durationIn: 1.6 }).inRight}>
            <Typography
              variant="body1"
              pr={{ xs: 0, md: 4 }}
              mb={{ xs: 3, sm: 4 }}
            >
              {translate("hero_desc")}
            </Typography>
          </m.div>
          <Stack direction="row">
            {socialData.map((e, index) => (
              <m.div
                key={index}
                variants={varFade({ durationIn: 1.7 + index / 5 }).inRight}
              >
                <IconButtonAnimate key={index} href={e.url} target="_blank">
                  <Iconify
                    icon={e.img}
                    width={20}
                    height={20}
                    sx={{ color: "#745acb" }}
                  />
                </IconButtonAnimate>
              </m.div>
            ))}
          </Stack>
          <m.div variants={varFade({ durationIn: 1.7 }).inRight}>
            <Box mt={{ xs: 3, sm: 5 }}>
              <DefaultBtn
                text="get_started"
                icon="heroicons:arrow-long-right"
                href="#video"
                hreftype="section"
              />
            </Box>
          </m.div>
        </Box>
        <Box className="night">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="shooting_star"></div>
          ))}
        </Box>
      </BoxStyle>
    </MotionViewport>
  );
}
