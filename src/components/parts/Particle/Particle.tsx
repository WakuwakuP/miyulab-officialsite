import { useCallback } from 'react'

import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import type { Container, Engine } from 'tsparticles-engine'

export interface ParticleProps {
  id?: string
}

export const Particle = ({ id }: ParticleProps) => {
  const partioclesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])
  const partioclesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])
  return (
    <>
      <Particles
        id={id}
        init={partioclesInit}
        loaded={partioclesLoaded}
        data-chromatic='ignore'
        options={{
          background: {
            color: {
              value: '#000000',
            },
            opacity: 0.1,
          },
          particles: {
            color: {
              value: ['#ff77ff', '#77ffff', '#ffff77'],
            },
            line_linked: {
              color: '#ffffff',
              distance: 200,
              enable: false,
              opacity: 1,
              width: 2,
            },
            move: {
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
              bounce: false,
              direction: 'none',
              enable: true,
              out_mode: 'out',
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 30,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.3,
                speed: 0.1,
                sync: false,
              },
              random: true,
              value: 0.3,
            },
            shape: {
              polygon: {
                nb_sides: 6,
              },
              stroke: {
                color: '#000',
                width: 0,
              },
              type: `circle`,
            },
            size: {
              animation: {
                enable: true,
                size_min: 70,
                speed: 10,
                sync: false,
              },
              random: true,
              value: 150,
            },
          },
          retina_detect: true,
        }}
      />
    </>
  )
}
