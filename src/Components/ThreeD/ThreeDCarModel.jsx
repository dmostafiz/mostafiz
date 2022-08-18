import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { angleToRadians } from '../../Helpers/angleToRadians'
// import { SphereGeometry } from 'three'
// import { SphereGeometry } from 'three'
import { Box } from '@chakra-ui/react'
import Three from './Three'
import { useInView } from 'react-intersection-observer'

export default function ThreeDCarModel() {

  const { ref, inView } = useInView();

  const [showThreeD, setShow] = useState(false)

  useEffect(() => {

    if(inView){
      setShow(true)
    }

  }, [inView])

  return (
    
    <Box height={{ base: '380px', md: '550px' }} w='full' bg='#ffd801'>

      <Canvas ref={ref} flat linear shadows>
        {/* <Suspense fallback={'Loading...'}>
           
      </Suspense> */}

         <Three key={showThreeD} show={showThreeD} /> 

      </Canvas>
    </Box>
  )
}
