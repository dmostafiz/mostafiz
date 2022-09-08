import React from 'react'
import { Box, Button, Center, SimpleGrid, Stack } from '@chakra-ui/react'
import ArticleGridCard from './ArticleGridCard '


export default function TechArticlesGrid() {
    return (
        <Box as='div'>
            <SimpleGrid direction='column' columns={{base:1, sm:2, lg:3}} spacing={10}>

                <ArticleGridCard article={{
                    title: 'detailed article about fiverr freelancing',
                    slug: 'detailed_article_about_fiverr',
                    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro ab dignissimos provident soluta eius natus illo commodi libero, neque, minus eum adipisci quas magnam asperiores, reprehenderit sint a quisquam atque. Eaque in dolores aliquam perferendis aspernatur...',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs04ZVnZFCUUiAE5XJSLHSWsVcUM86DK99Og&usqp=CAU',
                    createdAt: 'Published 14 July, 2022',
                    category: {
                        name: 'Fiverr Freelancing',
                    }
                }} />


                <ArticleGridCard article={{
                    title: 'How does fiverr works & make money',
                    slug: 'how_does_fiverr_works',
                    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni, optio quos voluptatibus assumenda at? Sint fugit rerum, repellendus nulla deserunt commodi natus illum asperiores, similique enim expedita laudantium necessitatibus...',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6Jx2k9vXU_HptXpZISN3EUpWWpMEZYQaZw&usqp=CAU',
                    createdAt: 'Published 14 July, 2022',
                    category: {
                        name: 'Fiverr Freelancing',
                    }
                }} />


                <ArticleGridCard article={{
                    title: 'Fully custom web app develop with',
                    slug: 'fully_custom_web_app_development',
                    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni, optio quos voluptatibus assumenda at? Sint fugit rerum, repellendus nulla deserunt commodi natus illum asperiores, similique enim expedita laudantium necessitatibus similique enim expedita laudantium necessitatibus...',
                    image: 'https://www.codemotion.com/magazine/wp-content/uploads/2022/03/825bc6f1-4341-43ee-9ebe-21dc27378f80-896x504.png',
                    createdAt: 'Published 14 July, 2022',
                    category: {
                        name: 'NextJs',
                    }
                }} />

            </SimpleGrid>

            <Center py={5}>
                <Button variant='yellow' maxW='300px' bg='yellow.400' rounded='full'>Read More Articles</Button>
            </Center>
        </Box>
    )
}
