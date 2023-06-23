// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
// components
import useLocales from "../hooks/useLocales";
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const CardStyle = styled(Box)({
  position: "relative",
  height: "360px",
  overflow: "hidden",
  borderRadius: " 0.5rem",
  "&:before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%)",
    zIndex: 1,
  },
  "& .news-card__text-wrapper": {
    position: "absolute",
    left: "0",
    width: "100%",
    bottom: "0",
    padding: "24px",
    color: "white",
    transition: "background-color 1.5s ease",
    zIndex: 2,
  },
  "& .news-card__details-wrapper": {
    maxHeight: 0,
    opacity: 0,
    transition: "max-height 1.5s ease, opacity 1s ease",
  },
  "& .news-card__image": {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    webkitBackfaceVisibility: "hidden",
    backfaceVisibility: "hidden",
    position: "relative",
    transition: "transform 3s ease",
  },
  "&:hover": {
    "& .news-card__text-wrapper": {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    "& .news-card__details-wrapper": {
      maxHeight: "20rem",
      opacity: 1,
    },
    "& .news-card__image": {
      transform: "scale(1.2)",
      zIndex: "-1",
    },
  },
});
export default function NewsCard(props) {
  const { translate } = useLocales();
  return (
    <CardStyle>
      <Box component="img" src={props.img} className="news-card__image" />
      <Box className="news-card__text-wrapper">
        <Typography variant="h3" className="news-card__title">
          {translate(props.title)}
        </Typography>
        <Typography variant="body2" color="#fff">
          {props.date}
        </Typography>
        <Box className="news-card__details-wrapper" mt={1}>
          <Box
            sx={{
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            <Typography variant="body1">{translate(props.desc)}</Typography>
          </Box>

          <Box display="flex" justifyContent="end" mt={2}>
            <Typography component="a" href={props.url}>
              {translate("read_more")}
            </Typography>
          </Box>
        </Box>
      </Box>
      
    </CardStyle>
  );
}
