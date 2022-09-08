import React from 'react'
import { Link, Tag, TagLabel, Wrap } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function CategoryWrapper() {
    return (
        <Wrap spacing={{ base: 1, md: 2 }}>

            <NextLink href='#'>
                <Link href='#'>
                    <Tag
                        size={{ base: 'md', md: 'lg' }}
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
                        size={{ base: 'md', md: 'lg' }}
                        borderRadius='full'
                        variant='outline'
                        colorScheme='gray'
                    >
                        <TagLabel fontSize={`12px`}>Laravel</TagLabel>
                    </Tag>
                </Link>
            </NextLink>

            <NextLink href='#'>
                <Link href='#'>
                    <Tag
                        size={{ base: 'md', md: 'lg' }}
                        borderRadius='full'
                        variant='outline'
                        colorScheme='gray'
                    >
                        <TagLabel fontSize={`12px`}>Full-Stack Development</TagLabel>
                    </Tag>
                </Link>
            </NextLink>

            <NextLink href='#'>
                <Link href='#'>
                    <Tag
                        size={{ base: 'md', md: 'lg' }}
                        borderRadius='full'
                        variant='outline'
                        colorScheme='gray'
                    >
                        <TagLabel fontSize={`12px`}>Mobile App Development</TagLabel>
                    </Tag>
                </Link>
            </NextLink>

            <NextLink href='#'>
                <Link href='#'>
                    <Tag
                        size={{ base: 'md', md: 'lg' }}
                        borderRadius='full'
                        variant='outline'
                        colorScheme='gray'
                    >
                        <TagLabel fontSize={`12px`}>Node Js</TagLabel>
                    </Tag>
                </Link>
            </NextLink>

            <NextLink href='#'>
                <Link href='#'>
                    <Tag
                        size={{ base: 'md', md: 'lg' }}
                        borderRadius='full'
                        variant='outline'
                        colorScheme='gray'
                    >
                        <TagLabel fontSize={`12px`}>Express Js</TagLabel>
                    </Tag>
                </Link>
            </NextLink>

            <NextLink href='#'>
                <Link href='#'>
                    <Tag
                        size={{ base: 'md', md: 'lg' }}
                        borderRadius='full'
                        variant='outline'
                        colorScheme='gray'
                    >
                        <TagLabel fontSize={`12px`}>Web Programming</TagLabel>
                    </Tag>
                </Link>
            </NextLink>

        </Wrap>
    )
}
