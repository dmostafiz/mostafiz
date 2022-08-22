import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { angleToRadians } from '../../Helpers/angleToRadians'
// import { SphereGeometry } from 'three'
// import { SphereGeometry } from 'three'
import { Box, Text } from '@chakra-ui/react'
import Three from './Three'
import { useInView } from 'react-intersection-observer'
import LoadingSpinner from '../Common/LoadingSpinner'

export default function ThreeDCarModel() {

  const { ref, inView } = useInView();

  return (

    <Box ref={ref} height={{ base: '380px', md: '450px' }} w='full' bg='#f2f2f2'>
      <Suspense fallback={<LoadingSpinner text='Loading 3D Models...' />}>
        <Canvas flat linear shadows>
          <Three key={inView} />
        </Canvas>
      </Suspense>
    </Box>

  )
}
