import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { angleToRadians } from '../../Helpers/angleToRadians'
// import { SphereGeometry } from 'three'
// import { SphereGeometry } from 'three'
import { Box } from '@chakra-ui/react'
import Three from './Three'

export default function ThreeDCarModel() {

  return (
    <Box height='480px'>
      <Canvas flat linear shadows>
        {/* <Suspense fallback={'Loading...'}>
           
      </Suspense> */}

        <Three/>


      </Canvas>
    </Box>
  )
}
