import { Box, Text } from "@chakra-ui/react";
import HomepageCarousel from "../Components/PublicPages/HomepageCarousel";
import PublicLayout from "../Layouts/PublicLayout";

export default function Home() {
  return (
    <PublicLayout>
      <HomepageCarousel />
      {/* <Text>Home Page</Text> */}
    </PublicLayout>
  )
}
