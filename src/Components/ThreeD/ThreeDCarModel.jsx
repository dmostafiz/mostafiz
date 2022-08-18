import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { angleToRadians } from '../../Helpers/angleToRadians'
// import { SphereGeometry } from 'three'
// import { SphereGeometry } from 'three'
import { Box } from '@chakra-ui/react'
import Three from './Three'
import { useInView } from 'react-intersection-observer'
import { Box2 } from 'three'

export default function ThreeDCarModel() {

  const { ref, inView } = useInView();

  return (

    <Box ref={ref} height={{ base: '380px', md: '550px' }} w='full' bg='#ffd801'>
      <Canvas flat linear shadows>
        <Three key={inView ?? true} />
      </Canvas>
    </Box>

  )
}
