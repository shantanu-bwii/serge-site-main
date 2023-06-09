import { m } from "framer-motion";
// @mui
import { Box, styled, Typography } from "@mui/material";

import { useEffect, useState } from 'react';
import moment from "moment";

// components
import Slider from "react-slick";
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade, varZoom } from "../animate";
import DefaultBtn from "../DefaultBtn";
import NewsCard from "../NewsCard";

import { getArticles } from "../../services";
import { service } from "../../config";
// ----------------------------------------------------------------------

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  // dots: true,
  speed: 1400,
  autoplaySpeed: 2600,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Article() {
  const { translate } = useLocales();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      if (response.items) {
        const data = response.items.map((item) => {
          const paragraphs = item.content.match(/<p>.*?<\/p>/gs);
          const firstParagraph = paragraphs?.[0].replace("<p>", "").replace("</p>", "")

          return {
            img: item.thumbnail,
            title: item.title,
            date: moment(item.pubDate).format('MMM DD, YYYY'),
            desc: firstParagraph,
            url: item.link,
          }
        });
        setArticles(data);
      }
    });
  }, []);

  const BoxStyle = styled(Box)({
    "& .slick-slide": {
      padding: "0 8px",
    },
    "& .slick-list": {
      lineHeight: "0",
    },
    "& .slick-prev, .slick-next": {
      display: "none !important",
    },
    // "& .slick-track": {
    //   marginBottom: "24px",
    // },
    // "& .slick-dots li button:before": {
    //   fontSize: "24px",
    //   color: "#9C9EA1",
    // },
    // "& .slick-dots li.slick-active button:before": {
    //   color: "#745acb !important",
    // },
  });
  return (
    <BoxStyle px={3} py={{ xs: 6, md: 10 }} id="article">
      <MotionViewport>
        <Box
          maxWidth="1140px"
          // py={{ xs: 6, md: 10 }}
          pt={16}
          mt={-16}
          pb={10}
          sx={{ mx: "auto" }}
        >
          <m.div variants={varFade({ durationIn: 1 }).inDown}>
            <Typography
              variant="h1"
              mb={4}
              textTransform="capitalize"
              textAlign="center"
            >
              {translate("article_section_title")}
            </Typography>
          </m.div>
          <Box>
            <m.div variants={varZoom({ durationIn: 1.2 }).in}>
              <Slider {...settings}>
                {articles.map((e, index) => (
                  <NewsCard
                    key={index}
                    img={e.img}
                    title={e.title}
                    date={e.date}
                    desc={e.desc}
                    url={e.url}
                  />
                ))}
              </Slider>
            </m.div>
          </Box>
          <m.div variants={varFade({ durationIn: 1.4 }).inRight}>
            <Box mt={{ xs: 3, sm: 5 }} textAlign="center">
              <DefaultBtn
                text="view_all"
                icon="heroicons:arrow-long-right"
                href={service.ARTICLES}
              />
            </Box>
          </m.div>
        </Box>
      </MotionViewport>
    </BoxStyle>
  );
}
