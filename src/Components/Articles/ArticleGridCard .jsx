import { Badge, Box, Flex, Image, Link, Show, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import SoftLink from '../Common/SoftLink'

export default function ArticleGridCard({ article }) {
    return (
        <SoftLink to={`/article/${article.slug}`}>
            <Flex direction={'column'} alignItems='flex-start' gap={{ base:2}} rounded='xl' _hover={{ bg: 'blackAlpha.100', shadow: 'sm' }}>
                <Box w={{ base: 'full'}} h={{base: '220px'}}>
                    <Image
                        w='full'
                        h='full'
                        objectFit='cover'
                        roundedTop='xl'
                        shadow='sm'
                        src={article.image}
                        alt='A detailed article about fiverr freelancing'
                    />
                </Box>

                <Box p={3}>

                    <Flex alignItems={{ base: 'center', md: 'center' }} gap={{ base: '2', md: '3' }} direction={{ base: 'row', md: 'row' }}>
                        <Text as='i' fontWeight='thin' fontSize='14px'>{article.createdAt}</Text>
                        <Link href='#'>
                            <Badge variant='solid' colorScheme='green'>{article.category.name}</Badge>
                        </Link>
                    </Flex>
                    <Spacer h={{ base: 1, md: 2 }} />
                    <Text fontWeight='bold' fontSize={{ base: '17px', md: '20px' }} lineHeight={{ base: '20px', md: '24px' }}>
                        {article.title}
                    </Text>

                </Box>
            </Flex>
        </SoftLink>
    )
}
