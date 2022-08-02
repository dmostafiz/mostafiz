import { Box, Text } from "@chakra-ui/react";
import HomepageCarousel from "../Components/PublicPages/HomePage/HomepageCarousel";
import SectionOne from "../Components/PublicPages/HomePage/SectionOne";
import LatestArticles from "../Components/PublicPages/HomePage/LatestArticles";
import Technologies from "../Components/PublicPages/HomePage/Technologies";
import PublicLayout from "../Layouts/PublicLayout";

export default function Home() {
  return (
    <PublicLayout>
      <HomepageCarousel />
      <SectionOne />
      <LatestArticles />
      <Technologies />
    </PublicLayout>
  )
}
