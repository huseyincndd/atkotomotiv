'use client'

import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Daha gerçekçi bir koltuk modeli oluşturalım
function Model({ color = "#283593", material = "deri", ...props }) {
  const group = useRef()
  
  // Basit animasyon - hafif döndürme
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2,
        0.025
      )
    }
  })

  // Materyal özelliklerini tanımlayalım
  const getMaterialProps = () => {
    // Malzeme tipine göre özellikler
    const materialTypes = {
      deri: { roughness: 0.5, metalness: 0.1, clearcoat: 0.3 },
      kumaş: { roughness: 0.9, metalness: 0, clearcoat: 0 },
      süet: { roughness: 0.8, metalness: 0, clearcoat: 0.1 },
      spor: { roughness: 0.6, metalness: 0.1, clearcoat: 0.2 }
    }
    
    // Varsayılan olarak deri kullan, belirtilen materyal varsa onu al
    return materialTypes[material.toLowerCase()] || materialTypes.deri
  }
  
  // Materyal özelliklerini al
  const materialProps = getMaterialProps()
  
  // Standart malzemeler
  const fabricMaterial = new THREE.MeshStandardMaterial({ 
    color: color, // Dinamik renk 
    roughness: materialProps.roughness,
    metalness: materialProps.metalness,
  })
  
  const frameMaterial = new THREE.MeshStandardMaterial({ 
    color: "#424242",  // Gri
    roughness: 0.2,
    metalness: 0.8,
  })

  const detailMaterial = new THREE.MeshStandardMaterial({ 
    color: "#9e9e9e", // Açık gri
    roughness: 0.3,
    metalness: 0.7,
  })

  // Accent rengini ana renkten türetelim
  const accentColor = new THREE.Color(color);
  accentColor.offsetHSL(0, 0.1, 0.2); // Biraz daha canlı bir tonu

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: accentColor,
    roughness: 0.5,
  });

  // Resimdeki gibi çift koltuk modeli oluşturalım
  return (
    <group ref={group} {...props} dispose={null} position={[0, -1.5, 0]}>
      {/* Çift koltuk modeli - iki yan yana koltuk */}
      {[-1.1, 1.1].map((xOffset, index) => (
        <group key={index} position={[xOffset, 0, 0]}>
          {/* Koltuk oturma kısmı */}
          <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
            <boxGeometry args={[1.8, 0.15, 1.8]} />
            <meshStandardMaterial {...fabricMaterial} />
          </mesh>
          
          {/* Koltuk minderi - daha yumuşak görünüm için */}
          <mesh castShadow receiveShadow position={[0, 0.43, 0]}>
            <boxGeometry args={[1.7, 0.15, 1.7]} />
            <meshStandardMaterial {...fabricMaterial} />
          </mesh>
          
          {/* Koltuk arkalığı ana kısım */}
          <mesh castShadow receiveShadow position={[0, 1.4, -0.85]}>
            <boxGeometry args={[1.8, 2.1, 0.2]} />
            <meshStandardMaterial {...fabricMaterial} />
          </mesh>
          
          {/* Koltuk arkalığı yastık kısmı */}
          <mesh castShadow receiveShadow position={[0, 1.4, -0.75]}>
            <boxGeometry args={[1.6, 1.9, 0.15]} />
            <meshStandardMaterial {...fabricMaterial} />
          </mesh>
          
          {/* Koltuk arkalığı paralel çizgiler - yatay şeritler */}
          {[0.2, 0.6, 1.0, 1.4, 1.8].map((y, i) => (
            <mesh key={i} castShadow receiveShadow position={[0, y, -0.65]}>
              <boxGeometry args={[1.5, 0.05, 0.05]} />
              <meshStandardMaterial {...detailMaterial} />
            </mesh>
          ))}
          
          {/* Koltuk kol dayama kısmı */}
          <mesh castShadow receiveShadow position={[xOffset < 0 ? 0.85 : -0.85, 0.7, 0]}>
            <boxGeometry args={[0.12, 0.4, 1.7]} />
            <meshStandardMaterial {...frameMaterial} />
          </mesh>
          
          {/* Kol dayama üst kısmı (yastık) */}
          <mesh castShadow receiveShadow position={[xOffset < 0 ? 0.85 : -0.85, 0.9, 0]}>
            <boxGeometry args={[0.2, 0.1, 1.5]} />
            <meshStandardMaterial {...fabricMaterial} />
          </mesh>
          
          {/* Koltuk bacağı */}
          <mesh castShadow receiveShadow position={[0, -0.5, 0]}>
            <boxGeometry args={[1.6, 0.2, 0.5]} />
            <meshStandardMaterial {...frameMaterial} />
          </mesh>
          
          {/* Koltuğun yan kenar detayları - aksan rengi */}
          <mesh castShadow receiveShadow position={[xOffset < 0 ? 0.9 : -0.9, 1.4, -0.78]}>
            <boxGeometry args={[0.05, 1.9, 0.25]} />
            <meshStandardMaterial {...accentMaterial} />
          </mesh>
        </group>
      ))}
      
      {/* Ortak kısım - ortadaki kol dayama */}
      <mesh castShadow receiveShadow position={[0, 0.7, 0]}>
        <boxGeometry args={[0.3, 0.4, 1.7]} />
        <meshStandardMaterial {...frameMaterial} />
      </mesh>
      
      {/* Ortak kol dayama üstü */}
      <mesh castShadow receiveShadow position={[0, 0.9, 0]}>
        <boxGeometry args={[0.4, 0.1, 1.5]} />
        <meshStandardMaterial {...fabricMaterial} />
      </mesh>
      
      {/* Koltuk altlığı - tümünü saran platform */}
      <mesh castShadow receiveShadow position={[0, -0.8, 0]}>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial {...frameMaterial} />
      </mesh>
    </group>
  )
}

export default function ChairModel({ color, material }) {
  const [loading, setLoading] = useState(true)

  // Yükleme gecikmesini simüle et
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-lg">
      {loading ? (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-blue-600 font-medium">3D Model Yükleniyor...</p>
          </div>
        </div>
      ) : (
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 10, 5]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <spotLight position={[-5, 10, 5]} angle={0.15} penumbra={1} intensity={0.5} castShadow />
          <pointLight position={[0, -5, 0]} intensity={0.2} />
          
          <Suspense fallback={null}>
            <Model scale={[0.6, 0.6, 0.6]} color={color} material={material} />
            <Environment preset="city" />
          </Suspense>
          
          <ContactShadows 
            rotation={[Math.PI / 2, 0, 0]} 
            position={[0, -1.7, 0]} 
            opacity={0.6} 
            width={10} 
            height={10} 
            blur={1.5} 
            far={2} 
          />
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={true} 
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2.2}
            minDistance={4}
            maxDistance={10}
          />
        </Canvas>
      )}
      
      <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-md">
        <p className="text-blue-800 font-medium text-sm">Döndürmek için sürükleyin</p>
      </div>
    </div>
  )
} 