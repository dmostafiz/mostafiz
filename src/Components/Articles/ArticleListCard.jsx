import { Badge, Box, Flex, Image, Link, Show, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import SoftLink from '../Common/SoftLink'

export default function ArticleListCard({ article }) {
    return (
        <SoftLink to={`/article/${article.slug}`}>
            <Flex alignItems='center' gap={{ base: 5, md: 8 }} rounded='xl' _hover={{ bg: 'blackAlpha.50', shadow: 'md' }}>
                <Box w={{ base: '190px', md: '330px' }}>
                    <Image
                        w='full'
                        roundedLeft='xl'
                        shadow='md'
                        src={article.image}
                        alt='A detailed article about fiverr freelancing'
                    />
                </Box>
                <Box flex='1' mt={{ base: '0px', md: '5px' }}>

                    <Text fontWeight='bold' fontSize={{ base: '17px', md: '24px' }} lineHeight={{ base: '20px', md: '30px' }}>
                        {article.title}
                    </Text>


                    <Spacer h={{ base: 0, md: 2 }} />

                    <Flex alignItems={{ base: '', md: 'center' }} gap={{ base: '0', md: '3' }} direction={{ base: 'column', md: 'row' }}>
                        <Text as='i' fontWeight='thin' fontSize='14px'>{article.createdAt}</Text>
                        <Link href='#'>
                            <Badge variant='solid' colorScheme='green'>{article.category.name}</Badge>
                        </Link>
                    </Flex>

                    <Spacer h={1} />

                    <Show above='md'>
                        <Text>{article.body}</Text>
                    </Show>
                </Box>
            </Flex>
        </SoftLink>
    )
}
