import { Button, ButtonGroup, Flex, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsSkype, BsTwitter, BsYoutube } from 'react-icons/bs'
import { MdFacebook } from 'react-icons/md'

export default function SocialLinksAuthor() {
    return (
        <ButtonGroup w='full' variant='outline' spacing='4px'>

            <Button
                as='a'
                w='full'
                size='sm'
                roundedLeft='full'
                shadow='sm'
                gap={2}
                href='https://fb.com/mostafiz.dev'
                target='_blank'
                rel='noopener'
                colorScheme='facebook'
                variant='solid'
            >
                <MdFacebook size={24} /> Facebook
            </Button>

            <Button
                as='a'
                w='full'
                size='sm'
                roundedRight='full'
                shadow='sm'
                gap={2}
                href='https://www.linkedin.com/in/mostafiz-rahaman-010a8913a/'
                target='_blank'
                rel='noopener'
                colorScheme='linkedin'
                variant='solid'
                // flex={1}
            >
               <BsTwitter size={24} /> Twitter
            </Button>


        </ButtonGroup>
    )
}
