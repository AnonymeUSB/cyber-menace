// Importer la bibliothèque Three.js
import * as THREE from 'three';
import { GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Créer une scène, une caméra et un rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Charger le modèle GLB
const loader = new GLTFLoader();
loader.load('chemin/vers/scene.glb', (gltf) => {
  // Ajouter le modèle à la scène
  scene.add(gltf.scene);

  // Vous pouvez accéder aux objets, matériaux, animations, etc. du modèle ici
  // Exemple: gltf.scene, gltf.animations, gltf.materials, etc.
});

// Positionner la caméra
camera.position.z = 5;

// Animation
const animate = () => {
  requestAnimationFrame(animate);

  // Ajouter des animations, des mises à jour, etc. ici si nécessaire

  // Rendre la scène
  renderer.render(scene, camera);
};

// Lancer l'animation
animate();