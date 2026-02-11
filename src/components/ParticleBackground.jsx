import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#0a0a0a" } },
        fpsLimit: 120,
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
        },
        particles: {
          color: { value: "#00a8ff" },
          links: { color: "#00a8ff", distance: 150, enable: true, opacity: 0.2, width: 1 },
          move: { enable: true, speed: 1 },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
};

export default ParticleBackground;