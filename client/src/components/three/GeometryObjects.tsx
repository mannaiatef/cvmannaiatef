import * as THREE from "three";

export const createGeometryObjects = () => {
  const geometries: THREE.Mesh[] = [];
  
  // Cube
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0x4361ee, wireframe: true })
  );
  cube.position.set(-20, 10, -10);
  geometries.push(cube);
  
  // Sphere
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(4, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x7209b7, wireframe: true })
  );
  sphere.position.set(20, -10, -15);
  geometries.push(sphere);
  
  // Torus
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(8, 2, 16, 100),
    new THREE.MeshBasicMaterial({ color: 0x4cc9f0, wireframe: true })
  );
  torus.position.set(-15, -15, -10);
  geometries.push(torus);
  
  // Icosahedron
  const icosahedron = new THREE.Mesh(
    new THREE.IcosahedronGeometry(6, 0),
    new THREE.MeshBasicMaterial({ color: 0x4ade80, wireframe: true })
  );
  icosahedron.position.set(15, 15, -20);
  geometries.push(icosahedron);
  
  return geometries;
};
