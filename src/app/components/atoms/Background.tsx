import { Component } from 'react';
import Particles from 'react-particles-js';

class Background extends Component {
  public render() {
    return (
      <div className='background'>
        <Particles
          className='background-particles'
          params={
            {
              particles: {
                color: {
                  value: '#fa77fa',
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
                  value: 20,
                },
                opacity: {
                  anim: {
                    enable: true,
                    opacity_min: 0.4,
                    speed: 0.4,
                    sync: false,
                  },
                  random: true,
                  value: 0.4,
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
                  anim: {
                    enable: false,
                    size_min: 20,
                    speed: 34,
                    sync: false,
                  },
                  random: true,
                  value: 100,
                },
              },
              retina_detect: true,
            }
          }
        />
        <style jsx>{`
          div {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -10;
            height: 100vh;
          }
          .background {
            height: 100vh;
          }
        `}</style>
        <style jsx global>{`
          .background-particles {
            height: 100%;
          }
        `}</style>
      </div>
    );
  }

}

export default Background;
