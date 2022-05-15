import styled from "@emotion/styled";

import { GLTFExporter as GLTFExporterJsm } from "three/examples/jsm/exporters/GLTFExporter";
import { GLTFExporter as GLTFExporterStdlib, OBJExporter } from "three-stdlib";
import { BoxBufferGeometry, MeshBasicMaterial, Mesh } from "three";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";

const Container = styled.div`
  position: fixed;
  top: 4;
  left: 4;
  z-index: 1000;
`;

const parse = (exporter, model) =>
  exporter.parse(model, (file) => console.log(file, file.nodes[0]), {
    binary: false
  });

const mesh = new Mesh(new BoxBufferGeometry(), new MeshBasicMaterial());
const exporterJsm = new GLTFExporterJsm();
const exporterStdlib = new GLTFExporterStdlib();

function exportToObj(scene) {
  const exporter = new OBJExporter();
  const result = exporter.parse(scene);

  console.log(result);
}
const jsm = () => parse(exporterJsm, mesh);
const stdlib = () => parse(exporterStdlib, mesh);
const toObj = (scene) => exportToObj(scene)

export default function ExporterButtons() {
  const { scene } = useThree();
  const mesh = useRef<any>(null);
  
  return (
    <mesh ref={mesh}>
      <Container>
        <button onClick={stdlib}>stdlib</button>
        <button onClick={jsm}>jsm</button>
        <button onClick={() => toObj(scene)}>object</button>
      </Container>
    </mesh>
  )
}
