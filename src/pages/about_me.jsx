import { Box, Text } from "@chakra-ui/react";
import HomepageCarousel from "../Components/PublicPages/HomePage/HomepageCarousel";
import MySkills from "../Components/PublicPages/HomePage/MySkills";
import LatestArticles from "../Components/PublicPages/HomePage/LatestArticles";
import Technologies from "../Components/PublicPages/HomePage/Technologies";
import PublicLayout from "../Layouts/PublicLayout";
import AboutMeComponent from "../Components/PublicPages/AboutPage/AboutMeComponent";

export default function AboutMe() {
    return (
        <PublicLayout>
            <AboutMeComponent />
            {/* <LatestArticles /> */}
            {/* <Technologies /> */}
        </PublicLayout>
    )
}
