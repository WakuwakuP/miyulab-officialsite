'use client'

import { loadAll } from '@tsparticles/all'
import { type Engine } from '@tsparticles/engine'
import { initParticlesEngine, Particles } from '@tsparticles/react'
import { useCallback, useEffect } from 'react'

export interface ParticleProps {
  id?: string
}

export const Particle = ({ id }: ParticleProps) => {
  const init = useCallback(async () => {
    await initParticlesEngine(async (engine: Engine) => {
      await loadAll(engine)
    })
  }, [])

  useEffect(() => {
    init()
  }, [init])
  return (
    <div className="chromatic-ignore" data-chromatic="ignore">
      <Particles
        id={id}
        options={{
          background: {
            color: {
              value: '#000000',
            },
            opacity: 0.1,
          },
          detectRetina: true,
          particles: {
            color: {
              value: ['#ff77ff', '#77ffff', '#ffff77'],
            },
            links: {
              color: '#ffffff',
              distance: 200,
              enable: false,
              opacity: 1,
              width: 2,
            },
            move: {
              attract: {
                enable: false,
              },
              direction: 'none',
              enable: true,
              outModes: {
                default: 'out',
              },
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 30,
            },
            opacity: {
              animation: {
                enable: true,
                speed: 0.1,
                sync: false,
              },
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              animation: {
                enable: true,
                speed: 10,
                sync: false,
              },
              value: 150,
            },
          },
        }}
      />
    </div>
  )
}
