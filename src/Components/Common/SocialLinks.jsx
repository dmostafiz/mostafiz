import { ButtonGroup, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsSkype, BsYoutube } from 'react-icons/bs'

export default function SocialLinks() {
    return (
        <ButtonGroup variant='outline' spacing='3'>

            <IconButton
                rounded='full'
                shadow='sm'
                as='a'
                href='https://fb.com/mostafiz.dev'
                target='_blank'
                rel='noopener'
                colorScheme='facebook'
                variant='solid'
                icon={<BsFacebook size={24} />}
            />

            <IconButton
                rounded='full'
                shadow='sm'
                as='a'
                href='https://www.linkedin.com/in/mostafiz-rahaman-010a8913a/'
                target='_blank'
                rel='noopener'
                colorScheme='linkedin'
                variant='solid'
                icon={<BsLinkedin size={24} />}
            />


            <IconButton
                rounded='full'
                shadow='sm'
                as='a'
                href='https://www.youtube.com/channel/UC9gB6vHRs34i-By7hW5a6Kg'
                target='_blank'
                rel='noopener'
                colorScheme='red'
                variant='solid'
                icon={<BsYoutube size={24} />}
            />

            <IconButton
                rounded='full'
                shadow='sm'

                as='a'
                href='https://github.com/dmostafiz'
                target='_blank'
                rel='noopener'
                colorScheme='black'
                variant='outline'
                icon={<BsGithub size={24} />}
            />

            <IconButton
                rounded='full'
                shadow='sm'
                as='a'
                href='skype:live:.cid.d9d832a6070a1266?add'
                // target='_blank'
                // rel='noopener'
                colorScheme='blue'
                variant='solid'
                icon={<BsSkype size={24} />}
            />

        </ButtonGroup>
    )
}
