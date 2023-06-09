import { m } from "framer-motion";
// @mui
import { Box, Grid, Typography } from "@mui/material";
import Image from "../Image";
// components
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade, varZoom } from "../animate";
import DefaultBtn from "../DefaultBtn";

// ----------------------------------------------------------------------

export default function Book() {
  const { translate } = useLocales();
  const bookData = [
    { img: "/assets/images/book_img.png", title: "book_section_title1" },
    { img: "/assets/images/book_img.png", title: "book_section_title2" },
    { img: "/assets/images/book_img.png", title: "book_section_title3" },
    { img: "/assets/images/book_img.png", title: "book_section_title4" },
  ];

  return (
    <MotionViewport>
      <Box px={3} py={{ xs: 6, md: 10 }} id="book">
        <Box maxWidth="1140px" sx={{ mx: "auto" }}>
          <m.div variants={varFade({ durationIn: 1.2 }).inDown}>
            <Typography
              variant="h1"
              mb={4}
              textTransform="capitalize"
              textAlign="center"
            >
              {translate("book_section_title")}
            </Typography>
          </m.div>
          <Grid container spacing={4} justifyContent="center">
            {bookData.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={3} lg>
                <m.div variants={varZoom({ durationIn: 1 + index / 5 }).in}>
                  <Box
                    py={2}
                    px={2}
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
                    <Image src={item.img} sx={{ width: "100%", mb: 3 }} />
                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: translate(item.title),
                      }}
                    />
                  </Box>
                </m.div>
              </Grid>
            ))}
          </Grid>
          <m.div variants={varFade({ durationIn: 1.4 }).inDown}>
            <Box mt={{ xs: 3, sm: 5 }} textAlign="center">
              <DefaultBtn
                text="view_all"
                icon="heroicons:arrow-long-right"
                href="#"
              />
            </Box>
          </m.div>
        </Box>
      </Box>
    </MotionViewport>
  );
}
