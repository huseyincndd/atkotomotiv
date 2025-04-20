"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [counter, setCounter] = useState(5);
  
  useEffect(() => {
    // Sayfa yüklendiğinde scrollu en üste çek
    window.scrollTo(0, 0);
    
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    
    if (counter === 0) {
      window.location.href = "/";
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [counter]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center text-white overflow-hidden p-4">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 right-0 h-96 bg-blue-500/10 blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-blue-500/10 blur-3xl transform translate-y-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="w-40 h-20 bg-white rounded-xl p-2 flex items-center justify-center">
            <Image
              src="https://villaqrmenu.b-cdn.net/images%20(2).jpeg"
              alt="ATK Otomotiv Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-100">
            Bu Sayfa Hazırlanıyor
          </span>
        </h1>
        
        <p className="text-xl text-center text-blue-100 mb-8 max-w-lg mx-auto">
          Aradığınız sayfa şu anda yapım aşamasında. Yakında sizlerle buluşacak benzersiz içeriklerimizi görmek için sabırsızlanıyoruz.
        </p>
        
        <div className="flex flex-col items-center md:flex-row justify-center gap-4 md:gap-6 mb-8">
          <Link
            href="/"
            className="relative inline-flex items-center px-8 py-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-full overflow-hidden shadow-lg group"
          >
            <span className="relative z-10">Ana Sayfaya Dön</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </Link>
          
          <div className="text-blue-200 text-lg font-medium">
            {counter} saniye içinde ana sayfaya yönlendirileceksiniz
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-blue-200">
            Sorularınız için: <a href="mailto:info@atkotomotiv.com" className="underline hover:text-white transition-colors">info@atkotomotiv.com</a>
          </p>
        </div>
      </div>
    </main>
  );
} 