import PublicLayout from "../Layouts/PublicLayout";
import TechArticlesCard from "../Components/PublicPages/HomePage/TechArticlesCard";
import { Box, Container } from "@chakra-ui/react";
import BreadCrumb from "../Components/Common/BreadCrumb";

export default function TechArticles() {
    return (
        <PublicLayout>

            <BreadCrumb maxW='6xl' links={[
                {
                    name: 'Home',
                    path: '/'
                },
                {
                    name: 'Tech Articles',
                    path: '/tech_articles'
                }
            ]} />


            <Container maxW='6xl' py={5}>
                <Box w='full' p={3} bg='white' shadow='md'>
                    <TechArticlesCard />
                </Box>
            </Container>
        </PublicLayout>
    )
}
