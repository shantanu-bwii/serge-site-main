import React, { useEffect, useState } from "react";
import Slider from "react-slick";



import { m } from "framer-motion";
// @mui
import { Box, styled, Typography } from "@mui/material";


import moment from "moment";

// components

import useLocales from "../../hooks/useLocales";
import { MotionViewport, varFade, varZoom } from "../animate";
import DefaultBtn from "../DefaultBtn";
import NewsCard from "../NewsCard";

import { getArticles } from "../../services";
import { service } from "../../config";
// ----------------------------------------------------------------------


import { NavLink } from "react-router-dom";
import axios from "axios";

import {Routes , Route } from "react-router-dom" 
import About from "./About"


function Myarticle() { 

var settings = {
  infinite: false,
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

  const { translate, currentLang } = useLocales();
  const [user, setUser] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState(currentLang.value);

  const fetchData = () => {
    return fetch("https://diggdevelopment.com/admin-panel/api/allblogs")
          .then(
				
				(response) => response.json()
				)
          .then(
				(data) => {
          setUser(data);
          setCurrentLanguage(currentLang.value);
        }
				);
  }

  const fetchTitle = (language, userObj) => {
    if (language == 'en') {
      return userObj.title;
    } else if (language == 'fr') {
      return userObj.titlefr;
    } else {
      return userObj.titlesp;
    }
  }

  useEffect(() => {
    fetchData();
  },[currentLang])
  
  
  
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
  <>
  


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
                {user && user.length > 0 && user.map((userObj, index) => (
                  //console.log(userObj.CreatedAt.month + 1);
				  <NewsCard
                    key={index}
                    img={userObj.image}
                    title={fetchTitle(currentLanguage, userObj)}
                   date={new Date(userObj.CreatedAt).toLocaleDateString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric',
					})}
			          		dateDiff = {moment(userObj.pubDate).format('MMM DD, YYYY')}
                    desc={userObj.desc}
                    //url={userObj.slug}
                     url={"/blog/" + userObj.slug}
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
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
	
  );
}

export default Myarticle;