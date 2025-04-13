import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Particles } from "./Particles";
import { createGeometryObjects } from "./GeometryObjects";

const ThreeScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 30;

    // Add particles
    const particles = Particles();
    scene.add(particles);

    // Add geometry objects
    const geometries = createGeometryObjects();
    geometries.forEach(geometry => scene.add(geometry));

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate geometries
      geometries.forEach(geometry => {
        geometry.rotation.x += 0.003;
        geometry.rotation.y += 0.005;
        geometry.rotation.z += 0.002;
      });

      // Rotate particles
      particles.rotation.y += 0.0005;

      // Camera movement based on mouse position
      const targetX = mouseX.current * 5;
      const targetY = mouseY.current * 5;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = (event.clientY / window.innerHeight) * 2 - 1;
    };

    // Event listeners
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      geometries.forEach(geometry => {
        geometry.geometry.dispose();
        (geometry.material as THREE.Material).dispose();
      });
      particles.geometry.dispose();
      (particles.material as THREE.Material).dispose();
      scene.clear();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default ThreeScene;
