import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a renderer and add it to the document
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry and a material for the cubes
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Create two cubes
const cubeA = new THREE.Mesh(geometry, material);
cubeA.position.set(100, 100, 0);

const cubeB = new THREE.Mesh(geometry, material);
cubeB.position.set(-100, -100, 0);

// Create a group and add the cubes to it
const group = new THREE.Group();
group.add(cubeA);
group.add(cubeB);

// Add the group to the scene
scene.add(group);

// Position the camera
camera.position.z = 500;

// Create an animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the group for some animation
  group.rotation.x += 0.01;
  group.rotation.y += 0.01;

  // Render the scene from the perspective of the camera
  renderer.render(scene, camera);
}

animate();