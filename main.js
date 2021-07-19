import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#app'),
})

renderer.setClearColor( 0xffffff )

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(10)

const controls = new OrbitControls( camera, renderer.domElement )

const loader = new GLTFLoader()
loader.load( 'model.glb', ( gltf ) => {
	scene.add( gltf.scene )
}, undefined, ( error ) => {
	console.error( error )
} );

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

const animate = () => {
	renderer.render(scene, camera)
	requestAnimationFrame( animate )
}

animate()
