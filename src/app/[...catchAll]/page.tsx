"use client";

import { useEffect } from 'react';
import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  useEffect(() => {
    // Sayfa yüklendiğinde scrollu en üste çek
    window.scrollTo(0, 0);
  }, []);
  
  // Tüm uyuşmayan rotaları yakalayıp not-found sayfasına yönlendiriyoruz
  notFound();
} 