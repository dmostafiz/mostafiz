import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { angleToRadians } from '../../Helpers/angleToRadians'
// import { SphereGeometry } from 'three'
// import { SphereGeometry } from 'three'
import { Box } from '@chakra-ui/react'
import Three from './Three'
import { useInView } from 'react-intersection-observer'

export default function ThreeDCarModel() {

  const { ref, inView } = useInView();

  return (
    <Box ref={ref} height={{ base: '380px', md: '550px' }} w='full' bg='#ffd801'>
      <Canvas flat linear shadows>
        {/* <Suspense fallback={'Loading...'}>
           
      </Suspense> */}

        {inView && <Three />}

      </Canvas>
    </Box>
  )
}
