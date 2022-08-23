import { ChakraProvider } from '@chakra-ui/react'
import '../../styles/globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import 'swiper/css/fade';
import 'swiper/css/effect-fade';
import dynamic from 'next/dynamic'

const FacebookMessanger = dynamic(() => import( '../Components/PublicPages/FacebookMessanger'), {
  ssr: false
})

function MyApp({ Component, pageProps }) {
  return <ChakraProvider>
    <Component {...pageProps} />
    <FacebookMessanger />
  </ChakraProvider>
}

export default MyApp
