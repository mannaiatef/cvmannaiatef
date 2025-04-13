import * as THREE from "three";

export const Particles = () => {
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  
  const posArray = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 200;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    color: 0x4361ee,
    transparent: true,
    opacity: 0.8
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  
  return particlesMesh;
};
