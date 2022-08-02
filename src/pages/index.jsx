import { Box, Text } from "@chakra-ui/react";
import HomepageCarousel from "../Components/PublicPages/HomePage/HomepageCarousel";
import SectionOne from "../Components/PublicPages/HomePage/SectionOne";
import SectionTwo from "../Components/PublicPages/HomePage/SectionTwo";
import PublicLayout from "../Layouts/PublicLayout";

export default function Home() {
  return (
    <PublicLayout>
      <HomepageCarousel />
      <SectionOne />
      <SectionTwo />
    </PublicLayout>
  )
}
