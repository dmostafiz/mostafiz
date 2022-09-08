import PublicLayout from "../Layouts/PublicLayout";
import TechArticlesCard from "../Components/PublicPages/HomePage/TechArticlesCard";
import { Box, Container, Spacer } from "@chakra-ui/react";
import BreadCrumb from "../Components/Common/BreadCrumb";
import SectionTitle from "../Components/Common/SectionTitle";
import CategoryWrapper from "../Components/Common/CategoryWrapper";
import TechArticlesGrid from "../Components/Articles/TechArticlesGrid";
import { IconButton } from '@chakra-ui/react'

export default function TechArticles() {
    return (
        <PublicLayout>
            <Box bg='white' h='full'>
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


                <Container maxW='6xl' py={3}>
                    <Box w='full' bg='white' shadow='sm'>

                        <SectionTitle
                            title='Latest Articles'
                        // subTitle="Read latest articles i written about modern technologies, business concepts and many more things"
                        />

                        <CategoryWrapper />

                        <Spacer h={8} />

                        <Box>

                        </Box>

                        <TechArticlesGrid />

                        {/* <TechArticlesCard /> */}

                    </Box>
                </Container>
            </Box>

        </PublicLayout>
    )
}
