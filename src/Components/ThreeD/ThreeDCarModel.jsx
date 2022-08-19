import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { angleToRadians } from '../../Helpers/angleToRadians'
// import { SphereGeometry } from 'three'
// import { SphereGeometry } from 'three'
import { Box, Text } from '@chakra-ui/react'
import Three from './Three'
import { useInView } from 'react-intersection-observer'

export default function ThreeDCarModel() {

  const { ref, inView } = useInView();

  return (

    <Box ref={ref} height={{ base: '380px', md: '550px' }} w='full' bg='#ffd801'>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Canvas flat linear shadows>
          <Three key={inView} />
        </Canvas>
      </Suspense>
    </Box>

  )
}
