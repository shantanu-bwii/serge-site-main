// components
import Page from "../components/Page";
import HomeHero from "../components/home/HomeHero";
import Video from "../components/home/Video";

import Myvideos from "../components/home/Myvideos";

import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Company from "../components/home/Company";
import Service from "../components/home/Service";
import Article from "../components/home/Article";

import Myarticle from "../components/home/Myarticle";



// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home page">
      <HomeHero />
      
	  
	   <Myvideos />
	  
	  
      <About />
      <Experience />
      <Company />
      <Service />
      
	  <Myarticle />
	  
    </Page>
  );
}
