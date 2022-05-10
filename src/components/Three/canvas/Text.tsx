import * as THREE from 'three';
import useStore from '@/utils/store'
// import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
// import { TWEEN } from '@/components/Three/helpers/jsm/libs/tween.module.min.js';
// import { CSS3DObject, CSS3DRenderer, CSS3DSprite } from '@/components/Three/helpers/jsm/renderers/CSS3DRenderer.js'
// import styles from './Text.module.css';
// import { CSS3DObject, CSS3DRenderer, CSS3DSprite, TextBufferGeometry, TrackballControls } from 'three-stdlib';

// let camera, scene, renderer;
// let controls;

// const particlesTotal = 512;
// const positions = [];
// const objects = [];
// let current = 0;

const Text =  ({ route }: {route: string}) => {
  const router = useStore((s) => s.router)
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef<any>(null)
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) =>
  //   mesh.current
  //     ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
  //     : null
  // )

  // function createText() {
  //   // camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	// 	// 		camera.position.z = 3000;
	// 	// 		scene = new THREE.Scene();
        
  //   // text element
  //       const element = (<div className="profile-text"></div>)
  //          // document.createElement( 'div' );
  //       element.props.props.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

  //       const label = (<div className="link-text"></div>)// document.createElement( 'div' );
  //       element.props.appendChild( label )

  //       const objectCSS = new CSS3DObject( element.props.children );
  //       objectCSS.position.x = Math.random() * 4000 - 2000;
  //       objectCSS.position.y = Math.random() * 4000 - 2000;
  //       objectCSS.position.z = Math.random() * 4000 - 2000;
  //       scene.add( objectCSS );

  //       const obj = new THREE.Object3D();
  //       obj.position.x = 11 - 1330;
  //       obj.position.y = -6 + 990;
  //       // button
  //       renderer = new CSS3DRenderer();
  //       renderer.setSize( window.innerWidth, window.innerHeight );
  //       document.getElementById('profile').appendChild(renderer.domElement);

  //       controls = new TrackballControls( camera, renderer.domElement );
  // }
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <mesh
        ref={mesh}
        onClick={() => router?.push(route)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.1 : 1}
      >
        <dataTexture3D>
          <bufferGeometry>
            <div id="text-btn"> 
              HI
            </div>
          </bufferGeometry>
          <spriteMaterial type="text" color={route === '/' ? 'black' : 'hotpink'} />
          {/* <boxBufferGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial color={route === '/' ? 'orange' : 'hotpink'} /> */}
        </dataTexture3D>
      </mesh>

      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  )
}

export default Text
