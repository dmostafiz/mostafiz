import { Badge, Box, Button, Center, Container, Wrap, Tag, TagLabel, Link, Show, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import SectionTitle from '../../Common/SectionTitle'
import NextLink from 'next/link'
import SoftLink from '../../Common/SoftLink'
import ArticleListCard from '../../Articles/ArticleListCard'
import StickyBox from "react-sticky-box";


export default function TechArticlesCard() {
    return (
        <Box as='section' p={3} bg='white'>
                <SectionTitle
                    title='Latest Articles'
                    // subTitle="Read latest articles i written about modern technologies, business concepts and many more things"
                />

                <Wrap spacing={{base:1, md:2}}>

                    <NextLink href='#'>
                        <Link href='#'>
                            <Tag
                                size={{base: 'md', md:'lg'}}
                                borderRadius='full'
                                variant='outline'
                                colorScheme='gray'
                            >
                                <TagLabel fontSize={`12px`}>Next Js</TagLabel>
                            </Tag>
                        </Link>
                    </NextLink>

                    <NextLink href='#'>
                        <Link href='#'>
                            <Tag
                                size={{base: 'md', md:'lg'}}
                                borderRadius='full'
                                variant='outline'
                                colorScheme='gray'
                            >
                                <TagLabel  fontSize={`12px`}>Laravel</TagLabel>
                            </Tag>
                        </Link>
                    </NextLink>

                    <NextLink href='#'>
                        <Link href='#'>
                            <Tag
                                size={{base: 'md', md:'lg'}}
                                borderRadius='full'
                                variant='outline'
                                colorScheme='gray'
                            >
                                <TagLabel  fontSize={`12px`}>Full-Stack Development</TagLabel>
                            </Tag>
                        </Link>
                    </NextLink>

                    <NextLink href='#'>
                        <Link href='#'>
                            <Tag
                                size={{base: 'md', md:'lg'}}
                                borderRadius='full'
                                variant='outline'
                                colorScheme='gray'
                            >
                                <TagLabel  fontSize={`12px`}>Mobile App Development</TagLabel>
                            </Tag>
                        </Link>
                    </NextLink>

                    <NextLink href='#'>
                        <Link href='#'>
                            <Tag
                                size={{base: 'md', md:'lg'}}
                                borderRadius='full'
                                variant='outline'
                                colorScheme='gray'
                            >
                                <TagLabel  fontSize={`12px`}>Node Js</TagLabel>
                            </Tag>
                        </Link>
                    </NextLink>

                    <NextLink href='#'>
                        <Link href='#'>
                            <Tag
                                size={{base: 'md', md:'lg'}}
                                borderRadius='full'
                                variant='outline'
                                colorScheme='gray'
                            >
                                <TagLabel  fontSize={`12px`}>Express Js</TagLabel>
                            </Tag>
                        </Link>
                    </NextLink>

                    <NextLink href='#'>
                        <Link href='#'>
                            <Tag
                                size={{base: 'md', md:'lg'}}
                                borderRadius='full'
                                variant='outline'
                                colorScheme='gray'
                            >
                                <TagLabel  fontSize={`12px`}>Web Programming</TagLabel>
                            </Tag>
                        </Link>
                    </NextLink>

                </Wrap>

                <Spacer h={8} />

                <Box>
                    <Stack direction='column' gap={2}>

                        <ArticleListCard article={{
                            title: 'detailed article about fiverr freelancing',
                            slug: 'detailed_article_about_fiverr',
                            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil porro ab dignissimos provident soluta eius natus illo commodi libero, neque, minus eum adipisci quas magnam asperiores, reprehenderit sint a quisquam atque. Eaque in dolores aliquam perferendis aspernatur...',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs04ZVnZFCUUiAE5XJSLHSWsVcUM86DK99Og&usqp=CAU',
                            createdAt: 'Published 14 July, 2022',
                            category: {
                                name: 'Fiverr Freelancing',
                            }
                        }} />


                        <ArticleListCard article={{
                            title: 'How does fiverr works & make money',
                            slug: 'how_does_fiverr_works',
                            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni, optio quos voluptatibus assumenda at? Sint fugit rerum, repellendus nulla deserunt commodi natus illum asperiores, similique enim expedita laudantium necessitatibus...',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6Jx2k9vXU_HptXpZISN3EUpWWpMEZYQaZw&usqp=CAU',
                            createdAt: 'Published 14 July, 2022',
                            category: {
                                name: 'Fiverr Freelancing',
                            }
                        }} />


                        <ArticleListCard article={{
                            title: 'Fully custom web app develop with',
                            slug: 'fully_custom_web_app_development',
                            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magni, optio quos voluptatibus assumenda at? Sint fugit rerum, repellendus nulla deserunt commodi natus illum asperiores, similique enim expedita laudantium necessitatibus similique enim expedita laudantium necessitatibus...',
                            image: 'https://www.codemotion.com/magazine/wp-content/uploads/2022/03/825bc6f1-4341-43ee-9ebe-21dc27378f80-896x504.png',
                            createdAt: 'Published 14 July, 2022',
                            category: {
                                name: 'NextJs',
                            }
                        }} />

                        <Center>
                            <Button variant='yellow' maxW='300px' bg='yellow.400' rounded='full'>Read More Articles</Button>
                        </Center>

                    </Stack>
                </Box>
        </Box >
    )
}
