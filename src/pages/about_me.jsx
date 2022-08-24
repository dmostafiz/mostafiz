import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Text } from "@chakra-ui/react";
import HomepageCarousel from "../Components/PublicPages/HomePage/HomepageCarousel";
import MySkills from "../Components/PublicPages/HomePage/MySkills";
import LatestArticles from "../Components/PublicPages/HomePage/LatestArticles";
import Technologies from "../Components/PublicPages/HomePage/Technologies";
import PublicLayout from "../Layouts/PublicLayout";
import AboutMeComponent from "../Components/PublicPages/AboutPage/AboutMeComponent";
import BreadCrumb from "../Components/Common/BreadCrumb";

export default function AboutMe() {
    return (
        <PublicLayout>

            <BreadCrumb maxW='6xl' links={[
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'About Me',
                    path: '/about_me'
                }
            ]} />


            <AboutMeComponent />
            {/* <LatestArticles /> */}
            {/* <Technologies /> */}
        </PublicLayout>
    )
}
