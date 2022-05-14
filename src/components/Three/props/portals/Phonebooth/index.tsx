/* eslint-disable react/display-name */
import React, { useRef } from 'react';
import Model from './Phonebooth';


export default function Phonebooth({ route }: { route: string}, props) {
  const mesh = useRef<any>(null); 

  return (
    <mesh 
      ref={mesh}
      className="phonebooth-portal-root"
      {...props}
      >
      <Model scale={0.1} position={[0, -1, 0]}/>
    </mesh>
  )
}

// export default function Phonebooth({ route }: { route: string }) {
//   const router = useStore((s) => s.router);
//   const mesh = useRef<any>(null);
//   const [hovered, setHover] = useState(false);
  
//   const gltf  = useLoader(GLTFLoader, '/phonebooth.gltf')
//   const loader = new CubeTextureLoader();
//   const texture = loader.load(
//     textures.map(t => '/' + t["uri"])
//   )

//   return (
//     <primitive object={gltf.scene} textures={texture}/>
//   )
// }

// const BoothLoader = () => {
//   const gltf = useLoader(GLTFLoader, '/phonebooth.gltf')

//   
//   // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
//   const fileURIs = textures.map(t => '/' + t["uri"])

//   const texture = loader.load([
//     ...fileURIs
//   ], (txs) => {

//     gltf.asset.extras = txs;
//   });
//   console.log('textures ', fileURIs)
//   return null;

//     // return (
//     //   <primitive object={gltf.scene} textures={texture}/>
//     // );
// }

// const Portal = React.memo(({ nodes, materials, data }: {
//   nodes: any;
//   materials: any;
//   data: any;
// }) => {
//   const mesh = useRef<any>(null)
//   // const { nodes, materials } = useStore((state) => state.mutation)
//   useFrame(() => {

//     // const r = Math.cos((clock.getElapsedTime() / 2) * data.speed) * Math.PI
//     mesh.current.rotation.set(nodes.rotation.x, nodes.rotation.y, nodes.rotation.z)
//   })
//   return (
//     <group ref={mesh} position={data.offset} scale={[data.scale, data.scale, data.scale]}>
//       <group
//         position={[0, 0, 1]}
//         rotation={[-0.70710678118654746, -0, -0]}
//         scale={[1, 1, 1]}>
//         <mesh geometry={nodes.bolt_low001_box_tex_0.geometry} material={materials.box_tex_0} material-roughness={1} material-metalness={1} />
//       </group>
//     </group>
//   )
// })

// const NodeGroups = (nodes) => {
//   const main = useRef(null);
//   return (
//     <group ref={main}>
//       <group scale={[3.5, 3.5, 3.5]}>
//         <group rotation={[Math.PI / 2, Math.PI, 0]}>
//             <mesh name="bolt_low001_box_tex_0" scale={nodes['bolt_low001_box_tex_0'].scale}>
//               <meshStandardMaterial color="#070707" />
//             </mesh>
//             <mesh name="bolt_low001_glass_tex_0" scale={nodes['bolt_low001_glass_tex_0'].scale}>
//               <meshStandardMaterial color="black" />
//             </mesh>
//             <mesh name="bolt_low001_phone_tex_0" scale={nodes['bolt_low001_phone_tex_0'].scale}>
//               <meshStandardMaterial color="#070707" />
//             </mesh>
//             <mesh name="bolt_low001_line_tex_0" scale={nodes['bolt_low001_line_tex_0'].scale}>
//               <meshBasicMaterial color="lightblue" />
//             </mesh>
//           </group>
//       </group>
//     </group>
//   )
// }



// ** Sample
// const geometry = new THREE.BoxBufferGeometry(1, 1, 40)
// const lightgreen = new THREE.Color('lightgreen')
// const hotpink = new THREE.Color('hotpink')
// const laserMaterial = new THREE.MeshBasicMaterial({ color: lightgreen })
// const crossMaterial = new THREE.MeshBasicMaterial({ color: hotpink, fog: false })
// const position = new THREE.Vector3()
// const direction = new THREE.Vector3()


// // export default function Ship() {
  
//   const booth = useStore((state) => state.booth)
//   const { clock, mouse, ray } = booth;
//   const main = useRef<any>(null);
//   // const lasers = useStore((state) => state.lasers)
//   // const laserGroup = useRef<any>(null);
//   // const laserLight = useRef<any>(null);
//   // const exhaust = useRef<any>(null);
//   // const cross = useRef<any>(null);
//   // const target =useRef<any>(null);

//   useFrame(() => {
//     main.current.position.z = Math.sin(clock.getElapsedTime() * 40) * Math.PI * 0.2
//     main.current.rotation.z += (mouse.x / 500 - main.current.rotation.z) * 0.2
//     main.current.rotation.x += (-mouse.y / 1200 - main.current.rotation.x) * 0.2
//     main.current.rotation.y += (-mouse.x / 1200 - main.current.rotation.y) * 0.2
//     main.current.position.x += (mouse.x / 10 - main.current.position.x) * 0.2
//     main.current.position.y += (25 + -mouse.y / 10 - main.current.position.y) * 0.2
//     // exhaust.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 200)
//     // exhaust.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 200)
//     // for (let i = 0; i < lasers.length; i++) {
//     //   const group = laserGroup.current.children[i]
//     //   group.position.z -= 20
//     // }
//     // laserLight.current.intensity += ((lasers.length && Date.now() - lasers[lasers.length - 1] < 100 ? 20 : 0) - laserLight.current.intensity) * 0.3

//     // Get ships orientation and save it to the stores ray
//     main.current.getWorldPosition(position)
//     main.current.getWorldDirection(direction)
//     ray.origin.copy(position)
//     ray.direction.copy(direction.negate())

//     // ...
//     // crossMaterial.color = mutation.hits ? lightgreen : hotpink
//     // cross.current.visible = !mutation.hits
//     // target.current.visible = !!mutation.hits
//   })

// //   return (
// //     <group ref={main}>
// //       <group scale={[3.5, 3.5, 3.5]}>
// //         <group ref={cross} position={[0, 0, -300]} name="cross">
// //           <mesh renderOrder={1000} material={crossMaterial}>
// //             <boxGeometry args={[20, 2, 2]} />
// //           </mesh>
// //           <mesh renderOrder={1000} material={crossMaterial}>
// //             <boxGeometry args={[2, 20, 2]} />
// //           </mesh>
// //         </group>
// //         <group ref={target} position={[0, 0, -300]} name="target">
// //           <mesh position={[0, 20, 0]} renderOrder={1000} material={crossMaterial}>
// //             <boxGeometry args={[40, 2, 2]} />
// //           </mesh>
// //           <mesh position={[0, -20, 0]} renderOrder={1000} material={crossMaterial}>
// //             <boxGeometry args={[40, 2, 2]} />
// //           </mesh>
// //           <mesh position={[20, 0, 0]} renderOrder={1000} material={crossMaterial}>
// //             <boxGeometry args={[2, 40, 2]} />
// //           </mesh>
// //           <mesh position={[-20, 0, 0]} renderOrder={1000} material={crossMaterial}>
// //             <boxGeometry args={[2, 40, 2]} />
// //           </mesh>
// //         </group>
// //         <pointLight ref={laserLight} position={[0, 0, -20]} distance={100} intensity={0} color="lightgreen" />
// //         <group ref={laserGroup}>
// //           {lasers.map((t, i) => (
// //             <group key={i}>
// //               <mesh position={[-2.8, 0, -0.8]} geometry={geometry} material={laserMaterial} />
// //               <mesh position={[2.8, 0, -0.8]} geometry={geometry} material={laserMaterial} />
// //             </group>
// //           ))}
// //         </group>
// //         <group rotation={[Math.PI / 2, Math.PI, 0]}>
// //           <mesh name="bolt_low001_box_tex_0" geometry={nodes['bolt_low001_box_tex_0'].geometry}>
// //             <meshStandardMaterial color="#070707" />
// //           </mesh>
// //           <mesh name="bolt_low001_glass_tex_0" geometry={nodes['bolt_low001_glass_tex_0'].geometry}>
// //             <meshStandardMaterial color="black" />
// //           </mesh>
// //           <mesh name="bolt_low001_phone_tex_0" geometry={nodes['bolt_low001_phone_tex_0'].geometry}>
// //             <meshStandardMaterial color="#070707" />
// //           </mesh>
// //           <mesh name="bolt_low001_line_tex_0" geometry={nodes['bolt_low001_line_tex_0'].geometry}>
// //             <meshBasicMaterial color="lightblue" />
// //           </mesh>
// //         </group>
// //       </group>
// //       <mesh ref={exhaust} scale={[1, 1, 30]} position={[0, 1, 30]}>
// //         <dodecahedronBufferGeometry args={[1.5, 0]} />
// //         <meshBasicMaterial color="lightblue" />
// //       </mesh>
// //     </group>
// //   )
// // }
