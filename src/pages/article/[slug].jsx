import { Avatar, Badge, Box, Button, ButtonGroup, Center, Container, Divider, Flex, Heading, Icon, Image, Input, InputGroup, Link, Spacer, Stack, Text, useColorModeValue, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'
import { BsArrowRight, BsQuestion, BsReply } from 'react-icons/bs'
import { HiThumbDown, HiThumbUp } from 'react-icons/hi'
import { MdMessage } from 'react-icons/md'
import SectionTitle from '../../Components/Common/SectionTitle'
import SocialLinks from '../../Components/Common/SocialLinks'
import SocialLinksAuthor from '../../Components/Common/SocialLinksAuthor'
import PublicLayout from '../../Layouts/PublicLayout'
import StickyBox from "react-sticky-box";
import NewsLetterCard from '../../Components/Common/NewsLetterCard'

export default function Article() {

  const bgImage = 'https://www.codemotion.com/magazine/wp-content/uploads/2022/03/825bc6f1-4341-43ee-9ebe-21dc27378f80-896x504.png'

  return (
    <PublicLayout>
      <Box py={2} bg={'white'} fontWeight='semibold' shadow='sm'>
        <Container maxW='6xl'>

          <Breadcrumb spacing='8px' separator={'/'}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Articles</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>A detailed article about fiverr freelancing</BreadcrumbLink>
            </BreadcrumbItem>

          </Breadcrumb>
        </Container >
      </Box>

      <Container maxW='6xl'>

        <Box w='full' py={{ base: 3, md: 5 }}>

          <Flex w='full' gap={5} direction={{ base: 'column', lg: 'row' }}>

            <Box flex={{ base: '0', lg: '1' }} bg={'white'} boxShadow={'sm'} roundedTop={'xl'}>

              <Image roundedTop={'sm'} w='full' src={bgImage} />

              <Box p={6}>
                <Text as={`h1`} fontSize={`3xl`} fontWeight={`bold`} lineHeight='35px'>A detailed article about fiverr freelancing</Text>
                <Spacer h={2} />

                <Text as='i' fontWeight='thin' fontSize='14px'>Published on 14 July, 2222</Text> <Link href='#'>
                  <Badge variant='solid' colorScheme='green'>Fiverr Freelancing</Badge>
                </Link>

                <Spacer h={4} />
                <Divider />
                <Spacer h={1} />

                <Box as='div' fontSize='20px'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque placeat quasi quisquam ut, atque quia itaque deleniti voluptatibus eligendi maxime optio perspiciatis neque iusto aliquid temporibus aperiam numquam? Numquam quis laborum adipisci aperiam debitis recusandae illum porro nostrum quam? Maxime cumque praesentium perferendis. Officiis culpa modi molestiae alias sint, laboriosam delectus id explicabo qui vel cumque placeat obcaecati sunt. Dolorem molestias maiores pariatur expedita, autem error vero laboriosam consequatur delectus soluta. Rem, harum eveniet. Nisi nesciunt ut ad iusto magni deleniti asperiores, fugiat consequuntur. Deleniti ipsum blanditiis explicabo, voluptatem illum numquam laudantium autem corporis officia labore architecto inventore officiis incidunt ipsam delectus nihil ullam. Aspernatur voluptatem veniam vel consequuntur eligendi commodi rerum tempore? Perspiciatis quasi recusandae quisquam consectetur hic nisi tempora ipsa inventore. Vel impedit, non velit ab alias praesentium molestias quae suscipit tempore aliquid neque nihil, labore asperiores necessitatibus explicabo. Adipisci consequatur repudiandae ad. Atque eligendi eveniet at, ullam nobis magnam, aliquam, veniam vitae animi accusamus praesentium beatae voluptatum officiis non expedita iure! Sit at et quisquam consequuntur magnam accusantium cum tenetur optio ex aliquam repellendus quidem distinctio exercitationem est ipsa harum nulla soluta, iste, nisi aperiam explicabo tempore quasi sunt corporis? Nesciunt repudiandae non dolor et ullam libero.
                  <Spacer h={5} />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime doloribus possimus aperiam accusantium ut voluptatibus. Mollitia, iste laboriosam accusamus at delectus adipisci sit iusto, odit, tempora expedita fugit quisquam aliquam! Distinctio ab quibusdam quaerat iste nostrum iusto cupiditate dicta doloremque? Amet optio officiis eum illo, voluptatum iusto explicabo non blanditiis repudiandae voluptas exercitationem vero autem inventore, quasi quaerat neque dolore sint nisi. Fugit, sed recusandae et neque ex iusto, adipisci, facilis sit temporibus optio saepe! Nesciunt ipsum hic natus maiores, inventore voluptatum minus fugit libero earum dolorem atque et cumque sequi amet voluptas esse vero! Earum iusto velit inventore id.
                  <Spacer h={5} />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum neque ad ab eius officiis velit perspiciatis reprehenderit illo quidem optio aut incidunt ipsa, laboriosam dicta veniam deleniti cumque nulla nobis harum itaque quae repellendus, rerum atque necessitatibus. Ea cumque neque tempore assumenda id harum aut reiciendis nobis totam amet omnis, laudantium tempora ex delectus optio voluptatibus quia atque animi sint minus nostrum. Accusantium, iure totam. Ipsa deserunt blanditiis incidunt corrupti molestiae. Iure accusamus, laudantium molestias amet voluptatibus, sunt dolor exercitationem tempora fugiat ea quaerat molestiae beatae excepturi pariatur! Id, ullam quae! Officiis unde asperiores eaque iure laudantium quia ducimus? Quo soluta inventore dolores necessitatibus culpa facere vel quod cumque nobis aliquam maiores nam repudiandae unde corrupti optio at delectus, distinctio iusto incidunt consectetur repellat atque aut sed voluptatibus. Maxime similique assumenda distinctio? Porro minima dolorum laborum exercitationem sequi enim nam, alias molestiae itaque, animi molestias eos quidem eveniet ratione modi?
                </Box>
              </Box>
            </Box>

            <Box w={{ base: 'full', lg: '320px' }}>

              <StickyBox offsetTop={80} >

                <VStack w='full' gap={5}>

                  <Center w='full'>
                    <Box
                      // maxW={'320px'}
                      w={'full'}
                      bg={useColorModeValue('white', 'gray.900')}
                      shadow={'sm'}
                      textAlign={'center'}
                    >

                      <Box
                        bgImage={bgImage}
                      >
                        <Box
                          w='full'
                          // roundedTop={{ base: '0', lg: 'lg' }}
                          color='gray.900'
                          bg={`#ffffff4d`}
                          // bgGradient='linear(to-tr, #fbbf2440, #fbbf24a3)'
                          backdropFilter='auto'
                          backdropBlur='80px'
                          pt={3}
                          pb={0}
                          px={3}
                        >
                          <Flex alignItems='center' gap={3}>
                            <Avatar
                              border='2px solid white'
                              size={'lg'}
                              src={
                                '/img/mostafiz1.jpg'
                              }
                              alt={'Avatar Alt'}
                              mb={3}
                              pos={'relative'}
                              _after={{
                                content: '""',
                                w: 3,
                                h: 3,
                                bg: '#fbbf24',
                                border: '2px solid white',
                                rounded: 'full',
                                pos: 'absolute',
                                bottom: 2,
                                right: -.5,
                              }}
                            />
                            <Flex direction='column' alignItems={'flex-start'}>
                              <Heading fontSize={'xl'} color={'blackAlpha.900'} fontFamily={'body'}>
                                Mostafiz Rahaman
                              </Heading>
                              <Text fontWeight={600} color={'blackAlpha.700'} mb={2}>
                                author@mostafiz.dev
                              </Text>
                            </Flex>
                          </Flex>
                        </Box>
                      </Box>

                      <Divider />

                      <Box
                        pt={3}
                        pb={5}
                      // px={1}
                      // textAlign='center'
                      >
                        <Text
                          fontSize={`14px`}
                          textAlign={'left'}
                          color={useColorModeValue('gray.700', 'gray.400')}
                          px={3}
                        >
                          I truly believe that learning never ends and sharing knowledge is key to growth. So, i write here and there.
                        </Text>

                        <Spacer h={3} />

                        <Box px={3} py={2}>
                          <Box textAlign='left'>
                            <SocialLinksAuthor />
                          </Box>
                        </Box>

                        {/* <Divider py={1} />

                        <Box px={3} py={2}>
                          <Box textAlign='left'>
                            <Text fontWeight={`semibold`} ml={1}>Subscribe newsletter</Text>
                            <Spacer h={2} />
                            <InputGroup size={'md'} gap={'0px'}>
                              <Input placeholder='Enter your email' roundedLeft={`full`} border='1px' borderColor='gray.200' bg='white' _hover={{ borderColor: 'gray.200' }} _focus={{ borderColor: 'gray.200', ring: 'none' }} />
                              <Button loadingText='Wait...' px={6} fontSize={`12px`} roundedRight='full' variant={`solid`} bg='gray.100' colorScheme={`gray`}>Subscribe</Button>
                            </InputGroup>
                          </Box>
                        </Box> */}

                      </Box>



                      {/* <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      _focus={{
                        bg: 'gray.200',
                      }}>
                      Message
                    </Button>
                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                      }
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _focus={{
                        bg: 'blue.500',
                      }}>
                      Follow
                    </Button>
                  </Stack> */}
                    </Box>
                  </Center>

                </VStack>

                <Spacer h='10px' />

                <NewsLetterCard />

              </StickyBox>

            </Box>

          </Flex>


        </Box>
      </Container>
    </PublicLayout>
  )
}
