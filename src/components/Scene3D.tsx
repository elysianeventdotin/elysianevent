'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Lightformer, ContactShadows } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Cloche() {
  const g = useRef<THREE.Group>(null);
  const pts = useMemo(() => { const p: THREE.Vector2[] = []; for (let i = 0; i <= 40; i++) { const t = i / 40; p.push(new THREE.Vector2(Math.sin(t * Math.PI / 2) * 1.35 + 0.001, Math.cos(t * Math.PI / 2) * 1.15)); } return p; }, []);
  useFrame((s, d) => { if (!g.current) return; g.current.rotation.y += d * 0.15; g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, s.pointer.y * 0.18, 0.05); g.current.rotation.z = THREE.MathUtils.lerp(g.current.rotation.z, -s.pointer.x * 0.12, 0.05); });
  const gold = <meshStandardMaterial color="#D4AE5C" metalness={1} roughness={0.18} />;
  return (
    <group ref={g} position={[0, -0.25, 0]}>
      <mesh castShadow><latheGeometry args={[pts, 96]} /><meshStandardMaterial color="#E09A68" metalness={1} roughness={0.16} side={THREE.DoubleSide} /></mesh>
      <mesh position={[0, 1.22, 0]}><sphereGeometry args={[0.13, 32, 32]} />{gold}</mesh>
      <mesh position={[0, 1.12, 0]}><cylinderGeometry args={[0.05, 0.09, 0.12, 32]} />{gold}</mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}><torusGeometry args={[1.37, 0.045, 24, 128]} />{gold}</mesh>
      <mesh position={[0, -0.04, 0]}><cylinderGeometry args={[1.75, 1.6, 0.08, 96]} />{gold}</mesh>
    </group>
  );
}
function Rings() {
  const a = useRef<THREE.Mesh>(null), b = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { if (a.current) { a.current.rotation.x += d * 0.2; a.current.rotation.y += d * 0.1; } if (b.current) { b.current.rotation.y -= d * 0.15; b.current.rotation.z += d * 0.08; } });
  return (<>
    <mesh ref={a} rotation={[1.2, 0.3, 0]}><torusGeometry args={[2.5, 0.012, 16, 200]} /><meshStandardMaterial color="#E6CB8A" metalness={1} roughness={0.2} /></mesh>
    <mesh ref={b} rotation={[0.4, 0.8, 0.2]}><torusGeometry args={[2.9, 0.008, 16, 200]} /><meshStandardMaterial color="#C9A24B" metalness={1} roughness={0.3} /></mesh>
  </>);
}
function Leaves({ count = 46 }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const geo = useMemo(() => { const s = new THREE.Shape(); s.moveTo(0, 0); s.quadraticCurveTo(0.12, 0.12, 0, 0.32); s.quadraticCurveTo(-0.12, 0.12, 0, 0); return new THREE.ShapeGeometry(s, 8); }, []);
  const data = useMemo(() => Array.from({ length: count }, (_, i) => ({ x: (Math.random() - 0.5) * 9, y: Math.random() * 7 - 3.5, z: (Math.random() - 0.5) * 4 - 1, s: 0.5 + Math.random() * 0.9, sp: 0.15 + Math.random() * 0.3, r: Math.random() * 6, c: i % 3 })), [count]);
  const o = useMemo(() => new THREE.Object3D(), []);
  const colors = useMemo(() => [new THREE.Color('#8FA89A'), new THREE.Color('#E6CB8A'), new THREE.Color('#EBD3C4')], []);
  useFrame((s, d) => {
    const m = ref.current; if (!m) return; const t = s.clock.elapsedTime;
    data.forEach((p, i) => { p.y -= d * p.sp; if (p.y < -3.8) p.y = 3.8; o.position.set(p.x + Math.sin(t * 0.5 + p.r) * 0.4, p.y, p.z); o.rotation.set(t * 0.3 + p.r, t * 0.2 + p.r, p.r); o.scale.setScalar(p.s); o.updateMatrix(); m.setMatrixAt(i, o.matrix); m.setColorAt(i, colors[p.c]); });
    m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true;
  });
  return <instancedMesh ref={ref} args={[geo, undefined, count]}><meshStandardMaterial side={THREE.DoubleSide} roughness={0.6} transparent opacity={0.85} /></instancedMesh>;
}
function Rig() { useFrame((s) => { s.camera.position.x = THREE.MathUtils.lerp(s.camera.position.x, s.pointer.x * 0.6, 0.03); s.camera.position.y = THREE.MathUtils.lerp(s.camera.position.y, 0.4 + s.pointer.y * 0.3, 0.03); s.camera.lookAt(0, 0, 0); }); return null; }

export default function Scene3D() {
  return (
    <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0.4, 7], fov: 38 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} color="#FFF1D6" />
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}><Cloche /></Float>
      <Rings />
      <Leaves />
      <ContactShadows position={[0, -1.6, 0]} opacity={0.35} scale={8} blur={2.6} far={3} color="#0A1A13" />
      <Environment resolution={256}>
        <Lightformer form="ring" intensity={4} position={[2, 2, 4]} scale={2} color="#FFE7C2" />
        <Lightformer intensity={3} position={[0, 5, -2]} scale={[10, 2, 1]} color="#FFF4DE" />
        <Lightformer intensity={2} position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[6, 2, 1]} color="#E6CB8A" />
        <Lightformer intensity={1.5} position={[5, 0, 2]} rotation-y={-Math.PI / 2} scale={[6, 2, 1]} color="#8FA89A" />
        <Lightformer intensity={1} position={[0, -3, 3]} scale={[8, 1, 1]} color="#ffffff" />
      </Environment>
      <Rig />
    </Canvas>
  );
}
