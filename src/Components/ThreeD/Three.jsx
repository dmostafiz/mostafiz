import React, { useEffect, useRef } from 'react'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { angleToRadians } from '../../Helpers/angleToRadians'
import * as THREE from 'three'
import gsap from 'gsap'
// import { useInView } from 'react-intersection-observer'

export default function Three() {

    const orbitControlRef = useRef(null)

    useFrame((state) => {

        if (orbitControlRef.current) {
            const { x, y } = state.mouse

            orbitControlRef.current.setAzimuthalAngle(-x * angleToRadians(45))
            orbitControlRef.current.setPolarAngle((y + 2) * angleToRadians(90 - 30))
            orbitControlRef.current.update()
        }
    })


    const ballRef = useRef(null)

    // const { ref, inView } = useInView();

    useEffect(() => {
        if(ballRef.current){

            const timeline = new gsap.timeline()

            // X axis motion
            timeline.to(ballRef.current.position, {
                x: 2,
                duration: 2,
                ease: 'power2.out'
            })

            timeline.to(ballRef.current.position, {
                y: 0.5,
                duration: 1,
                ease: 'bounce.out'
            }, "<")
        }
        
    }, [ballRef.current])

    return (
        <mesh>
            <PerspectiveCamera  makeDefault position={[0, 1, 5]} />
            <OrbitControls ref={orbitControlRef} enableZoom={false} minPolarAngle={angleToRadians(40)} maxPolarAngle={angleToRadians(80)} />

            {/* Ball */}
            <mesh ref={ballRef} position={[-2, 2, 0]} castShadow>
                <sphereGeometry args={[0.5, 35, 32]} />
                <meshStandardMaterial color='#ffffff' metalness={0.6} roughness={0.2}/>
            </mesh>

            {/* Floor */}
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                <planeGeometry args={[7, 7]} />
                <meshPhongMaterial color='#fbbf24' />
            </mesh>

            {/* Brightness */}
            <ambientLight args={['#ffffff', 1.6]} />

            <spotLight args={['#ffffff', 1.5, 6, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow />


            <Environment background>
                <mesh scale={100}>
                    <sphereGeometry args={[10, 100, 100]} />
                    <meshBasicMaterial side={THREE.BackSide} color='#ffed08' />
                </mesh>
            </Environment>


        </mesh>
    )
}
