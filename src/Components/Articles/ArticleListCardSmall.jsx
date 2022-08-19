import { Badge, Box, Flex, Image, Link, Show, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import SoftLink from '../Common/SoftLink'

export default function ArticleListCardSmall({ article }) {
    return (
        <SoftLink to={`/article/${article.slug}`}>
            <Flex alignItems='flex-start' gap={{ base: 5, md: 5 }} rounded='xl' shadow='sm' bg='blackAlpha.50' _hover={{ bg: 'blackAlpha.50', shadow: 'md' }}>
                <Box w={{ base: '190px', md: '190px' }} height='130px'>
                    <Image
                        w='full'
                        h='full'
                        roundedLeft='xl'
                        shadow='sm'
                        src={article.image}
                        alt='A detailed article about fiverr freelancing'
                    />
                </Box>
                <Box flex='1' mt={{ base: '0px', md: '5px' }}>

                    <Spacer h={3} />

                    <Text fontWeight='bold' fontSize={{ base: '17px', md: '21px' }} lineHeight={{ base: '20px', sm: '16px', md: '22px' }}>
                        {article.title}
                    </Text>


                    <Spacer h={{ base: 2, md: 3 }} />

                    <Flex alignItems={{ base: '', lg: 'center' }} gap={{ base: '0', lg: '3' }} direction={{ base: 'column', sm: 'column', lg: 'row' }}>
                        <Link href='#'>
                            <Badge variant='solid' colorScheme='green'>{article.category.name}</Badge>
                        </Link>
                        <Text as='i' fontWeight='thin' fontSize='14px'>{article.createdAt}</Text>
                    </Flex>

                    {/* <Spacer h={1} />

                    <Show above='md'>
                        <Text>{article.body}</Text>
                    </Show> */}
                </Box>
            </Flex>
        </SoftLink>
    )
}
