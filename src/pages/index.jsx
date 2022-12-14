import { Box, Text } from "@chakra-ui/react";
import HomepageCarousel from "../Components/PublicPages/HomePage/HomepageCarousel";
import MySkills from "../Components/PublicPages/HomePage/MySkills";
import LatestArticles from "../Components/PublicPages/HomePage/LatestArticles";
import Technologies from "../Components/PublicPages/HomePage/Technologies";
import PublicLayout from "../Layouts/PublicLayout";
import MobileAppSection from "../Components/PublicPages/HomePage/MobileAppSection";
import WebsiteSection from "../Components/PublicPages/HomePage/WebsiteSection";
import { Fade, Zoom } from "react-reveal";
import ThreeDSection from "../Components/PublicPages/HomePage/ThreeDSection";
import FlowerBgSection from "../Components/Common/FlowerBgSection";
import { useInView } from "react-intersection-observer";

export default function Home() {


  return (
    <PublicLayout>

      <HomepageCarousel />

      <MySkills />

      <Fade>
        <LatestArticles />
      </Fade>

      <Fade>
        <MobileAppSection />
      </Fade>

      <Fade>
        <WebsiteSection />
      </Fade>

      <Fade>
        <ThreeDSection />
      </Fade>

      <Fade>
        <Technologies />
      </Fade>

    </PublicLayout>
  )
}
