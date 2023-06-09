import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { m } from "framer-motion";
// @mui
import { Box, styled, Typography } from "@mui/material";
import moment from "moment";
import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade, varZoom } from "../animate";
import DefaultBtn from "../DefaultBtn";
import NewsCard from "../NewsCard";

import { getArticles } from "../../services";
import { service } from "../../config";

// ----------------------------------------------------------------------



const BoxStyle = styled(Box)({
  position: "relative",
  background:
    "linear-gradient(261.46deg, #101322 0%, rgba(116, 90, 203, 0.18) 101.6%)",
  boxShadow: "0px 4px 48px rgba(0, 0, 0, 0.15)",
  zIndex: "4",
  "& .video-wrapper": {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "25px",
    height: "0",
  },
  "& .video-wrapper iframe": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "24px",
  },
  "& .slick-prev": {
    left: "10%",
    zIndex: "3",
  },
  "& .slick-next": {
    right: "10%",
    zIndex: "3",
  },
  "& .slick-prev:before": {
    fontSize: "43px",
  },
  ".slick-next:before": {
    fontSize: "43px",
  },
  "@media (max-width: 600px)": {
    "& .slick-prev:before": {
      fontSize: "24px",
    },
    ".slick-next:before": {
      fontSize: "24px",
    },
  },
});




function Myvideo() { 

 const { translate } = useLocales();
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    speed: 1400,
    autoplaySpeed: 4600,
  };

  //const { translate } = useLocales();
 // const videoData = [
   // 'https://www.youtube.com/embed/OWVIUyR8IBI?enablejsapi=1',
    //'https://www.youtube.com/embed/dlj3daa_tvo?enablejsapi=1'
  //];
  
  
  
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://insiderwebsolutions.com/admin-panel/api/getallembedvideos")
          .then(
				
				(response) => response.json()
				)
          .then(
				(data) => setUser(data)
				);
  }

  useEffect(() => {
    fetchData();
  },[])
  
  
  
  
  

  return (
  <>
  
  
  
  
  
  
  
   <MotionViewport>
      <BoxStyle id="video" px={3}>
        <Box
          pb={{ xs: 6, md: 10 }}
          pt={{ xs: 12, md: 16 }}
          mt={-6}
          maxWidth="800px"
          sx={{ mx: "auto" }}
        >
          <m.div variants={varFade({ durationIn: 1 }).inUp}>
            <Typography
              variant="h1"
              textAlign="center"
              textTransform="capitalize"
              mb={4}
            >
              {translate("video_section_title")}
            </Typography>
          </m.div>
          <m.div variants={varFade({ durationIn: 1.2 }).inUp}>
            <Box
              maxWidth="1140px"
              mx="auto"
              sx={{ borderRadius: "16px", overflow: "hidden" }}
            >
              
			  
			  
			  <Slider {...settings}>
                {user && user.length > 0 && user.map((userObj, index) => (
					<Box className="video-wrapper" key={index}>
						
						<iframe
                      frameBorder="0"
                      allowFullScreen="1"
                      allow=" "
                      title=" "
                      width="560"
                      height="315"
                      src={userObj.e}
                      id="widget4"
                    ></iframe>
						
					 </Box>
					 
                ))}
              </Slider>
			  
			  
			  
			  
			  
            </Box>
          </m.div>
        </Box>
      </BoxStyle>
    </MotionViewport>
  
  
   </>
	
  );
}

export default Myvideo;