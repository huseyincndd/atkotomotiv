import Image from "next/image";
import Link from 'next/link';
import SketchfabSeat from '@/components/SketchfabSeat';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Parallax Effect */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Parallax Layers */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)]"></div>
        <Image
            src="https://www.autotrimdev.com/images/popup7.jpg"
            alt="Modern vehicle interior"
            fill
            className="object-cover object-center opacity-80"
          priority
            quality={100}
          />
        </div>
        
        {/* Animated Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <div className="inline-block mb-4 px-6 py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30">
                <p className="text-blue-200 font-medium">40+ Yıllık Kalite ve Tecrübe</p>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold text-white leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <span className="relative inline-block">
                <span className="relative z-10">ATK</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-blue-500/40 -skew-x-12 transform"></span>
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Otomotiv
              </span>{" "}
              <br />Kalite ve Konfor
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl animate-fade-in-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              Türkiye&apos;nin lider taşıt koltuğu üreticisi olarak, en son teknoloji ve yenilikçi tasarımlarla sektöre yön veriyoruz.
            </p>
            
            <div className="flex flex-wrap gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
              <Link 
                href="/urunler"
                className="group relative inline-flex items-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/30"
              >
                <span className="relative z-10">Ürünlerimizi Keşfedin</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <svg 
                  className="w-6 h-6 ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/iletisim"
                className="group relative inline-flex items-center px-8 py-4 font-semibold transition-all duration-300 border-2 border-white/30 hover:border-white/80 rounded-full text-white/90 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm"
              >
                <span>İletişime Geçin</span>
                <svg 
                  className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce z-20">
          <p className="text-sm mb-2">Aşağı Kaydır</p>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute hidden sm:block bottom-32 sm:bottom-36 left-10 md:bottom-32 md:left-20 animate-fade-in-up opacity-0 z-10" style={{ animationDelay: "1s", animationFillMode: "forwards" }}>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
            <p className="text-blue-300 font-medium text-sm">Müşteri Memnuniyeti</p>
            <p className="text-4xl font-bold text-white">98%</p>
          </div>
        </div>
        
        <div className="absolute hidden sm:block bottom-32 sm:bottom-36 right-10 md:bottom-32 md:right-20 animate-fade-in-up opacity-0 z-10" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
            <p className="text-blue-300 font-medium text-sm">Başarılı Proje</p>
            <p className="text-4xl font-bold text-white">500+</p>
          </div>
        </div>
      </section>

      {/* Intro Marquee Section */}
      <section className="bg-white py-10 overflow-hidden">
        <div className="inline-flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, index) => (
            <span key={index} className="mx-10 text-xl font-semibold text-gray-400">Konfor • Güvenlik • Yenilik • Kalite • Estetik • Dayanıklılık</span>
          ))}
        </div>
      </section>

      {/* Vehicle Seat Categories Showcase */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_45%,rgba(59,130,246,0.05)_45%,rgba(59,130,246,0.05)_55%,transparent_55%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(150deg,transparent_45%,rgba(59,130,246,0.05)_45%,rgba(59,130,246,0.05)_55%,transparent_55%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
              <span className="text-blue-600 font-semibold">Uzman Olduğumuz Alanlar</span>
              <span className="w-2 h-2 rounded-full bg-blue-600 ml-2"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              ATK Otomotiv ile Her Türlü Taşıt İçin Özel Çözümler
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              40 yılı aşkın tecrübemizle, her türlü taşıt için özel tasarlanmış koltuk çözümleri sunuyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              {
                icon: "https://segeseat.com/img/ikons/otobus.png",
                title: "Otobüs Koltukları",
                description: "Uzun yolculuklar için maksimum konfor"
              },
              {
                icon: "https://segeseat.com/img/ikons/panelvan.png",
                title: "Minibüs Koltukları",
                description: "Kompakt ve fonksiyonel tasarım"
              },
              {
                icon: "https://segeseat.com/img/ikons/askeri.png",
                title: "Askeri Koltuklar",
                description: "Dayanıklı ve güvenli"
              },
              {
                icon: "https://segeseat.com/img/ikons/tir.png",
                title: "Kamyon Koltukları",
                description: "Profesyonel sürüş konforu"
              },
              {
                icon: "https://segeseat.com/img/ikons/karavan.png",
                title: "Karavan Koltukları",
                description: "Ev konforu"
              },
              {
                icon: "https://segeseat.com/img/ikons/ambulans.png",
                title: "Ambulans Koltukları",
                description: "Acil müdahaleye uygun"
              },
              {
                icon: "https://segeseat.com/img/ikons/gemi.png",
                title: "Gemi Koltukları",
                description: "Denize dayanıklı"
              },
              {
                icon: "https://segeseat.com/img/ikons/tren.png",
                title: "Tren Koltukları",
                description: "Raylı sistem konforu"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-blue-100 flex flex-col items-center"
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-blue-50 rounded-xl p-1">
            <Image
                    src={item.icon}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 text-center">{item.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 text-center">{item.description}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/urunler"
              className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <span>Tüm Ürünlerimizi İnceleyin</span>
              <svg 
                className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Section - 3D Card Effect */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Interactive 3D Chair Model */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 -z-10 w-40 h-40 bg-blue-50 rounded-full opacity-70"></div>
              <div className="absolute -bottom-8 -right-8 -z-10 w-60 h-60 bg-blue-50 rounded-full opacity-70"></div>
              
              {/* Sketchfab 3D Model */}
              <SketchfabSeat />
            </div>
            
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full">
                <p className="text-blue-600 font-medium">Neden Bizi Tercih Etmelisiniz?</p>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                ATK Otomotiv <span className="text-blue-600">Kalitesi</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                En son teknolojilerle donatılmış koltuk sistemlerimiz, yolculuklarınızı daha konforlu ve güvenli hale getiriyor. Ergonomik tasarımlarımız, uzun yolculuklarda bile maksimum konfor sağlar.
              </p>
              
              {/* Feature List */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Gelişmiş Güvenlik Standartları</h3>
                    <p className="text-gray-600 mt-2">ISO ve TSE onaylı ürünlerimiz uluslararası güvenlik standartlarının üzerinde test edilmektedir.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Yenilikçi Malzemeler</h3>
                    <p className="text-gray-600 mt-2">Hafif, dayanıklı ve sürdürülebilir malzemelerle tasarladığımız koltuklar uzun ömürlü kullanım sağlar.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Kişiselleştirilebilir Tasarım</h3>
                    <p className="text-gray-600 mt-2">Her müşterinin ihtiyacına özel çözümler sunan modüler koltuk sistemleri geliştiriyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-blue-50 rounded-full"></div>
        <div className="absolute -left-20 top-20 w-40 h-40 bg-blue-50 rounded-full"></div>
      </section>

      {/* Featured Products Showcase - Horizontal Scroll */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 font-semibold">ATK Otomotiv&apos;in Öne Çıkan Ürünleri</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Öne Çıkan <span className="text-blue-600">Ürünlerimiz</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En son teknoloji ile üretilen, yüksek konfor ve güvenlik standartları sunan ürünlerimiz
            </p>
          </div>
          
          {/* Horizontal Scrolling Products */}
          <div className="relative">
            {/* Left Shadow Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
            
            {/* Right Shadow Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
            
            <div className="flex space-x-6 overflow-x-auto pb-8 px-4 scrollbar-hide">
              {/* Product Card 1 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src="https://segeseat.com/upload/makale/sege-passenger-302583546590.jpg"
                      alt="Executive Seat"
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                      Yeni
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Executive Pro XL</h3>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">Yönetici koltukları için tasarlanmış premium model. Geniş oturma alanı ve tam ayarlanabilir bel desteği.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">Otobüs Koltukları</span>
                      <Link href="/urunler/yolcu-koltuklari/executive-pro-xl" className="text-blue-600 hover:text-blue-800 transition-colors font-medium flex items-center">
                        Detaylı İncele
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Card 2 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src="https://segeseat.com/upload/makale/sege-driver-e192075876.jpg"
                      alt="Captain Comfort"
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold uppercase rounded-full px-3 py-1">
                      Çok Satan
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Captain Comfort</h3>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">Şoför koltuğu olarak tasarlanan bu model, uzun yolculuklarda maksimum konfor ve destek sağlar.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">Sürücü Koltukları</span>
                      <Link href="/urunler/surucu-koltuklari/captain-comfort" className="text-blue-600 hover:text-blue-800 transition-colors font-medium flex items-center">
                        Detaylı İncele
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Card 3 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
          <Image
                      src="https://segeseat.com/upload/makale/sege-military-5p85573925.jpg"
                      alt="Tactical Pro"
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Tactical Pro</h3>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">Zorlu koşullar için geliştirilen dayanıklı ve güvenli askeri araç koltuğu. Titreşim emici özellikli.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">Askeri Koltuklar</span>
                      <Link href="/urunler/askeri-koltuklar/tactical-pro" className="text-blue-600 hover:text-blue-800 transition-colors font-medium flex items-center">
                        Detaylı İncele
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Product Card 4 */}
              <div className="flex-shrink-0 w-80 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-72 overflow-hidden">
          <Image
                      src="https://segeseat.com/upload/makale/sege-tip-up-sunset63421235.jpg"
                      alt="Cargo Master"
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Cargo Master</h3>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-6">Kamyon sürücüleri için özel geliştirilmiş, uzun mesafelerde yorgunluğu azaltan hava süspansiyonlu koltuk.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold">Kamyon Koltukları</span>
                      <Link href="/urunler/kamyon-koltuklari/cargo-master" className="text-blue-600 hover:text-blue-800 transition-colors font-medium flex items-center">
                        Detaylı İncele
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/urunler"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Tüm Ürünlerimizi Görüntüleyin</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-2 mb-6">
              <span className="text-blue-600 font-semibold">Müşteri Deneyimleri</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Müşterilerimiz <span className="text-blue-600">Ne Diyor?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ürünlerimizi kullanan müşterilerimizin memnuniyet ve deneyimleri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="absolute -top-5 left-8 text-blue-600 text-6xl">&quot;</div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;Filomuz için tercih ettiğimiz Executive Pro XL koltuklar, yolcularımızdan büyük beğeni topladı. Uzun yolculuklarda bile konfor sağlayan bu koltuklar, firmamızın kalite standardını yükseltti.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    A
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Ahmet Yılmaz</h4>
                    <p className="text-gray-500 text-sm">Metropol Turizm, Filo Müdürü</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="absolute -top-5 left-8 text-blue-600 text-6xl">&quot;</div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;Cargo Master koltuklar, şoförlerimizin uzun yol yorgunluğunu önemli ölçüde azalttı. Ayarlanabilir bel desteği ve süspansiyon sistemi sayesinde çok daha verimli çalışıyoruz.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    M
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Mehmet Demir</h4>
                    <p className="text-gray-500 text-sm">Anadolu Lojistik, Operasyon Direktörü</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="absolute -top-5 left-8 text-blue-600 text-6xl">&quot;</div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  &quot;Tactical Pro koltukları zorlu arazi koşullarında test ettik ve performanslarından çok memnun kaldık. Darbelere karşı dayanıklılığı ve güvenlik özellikleri rakipsiz.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                    S
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Serkan Kaya</h4>
                    <p className="text-gray-500 text-sm">Vatan Savunma, Proje Müdürü</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      </section>

      {/* Brands We Work With */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-12">Birlikte Çalıştığımız Markalar</h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center h-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="w-32 h-12 flex items-center justify-center bg-gray-200 rounded">
                  <span className="text-gray-500 font-semibold">MARKA {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - Modern Design */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-black/90 mix-blend-multiply"></div>
          <Image
            src="https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=2070&auto=format&fit=crop"
            alt="Contact background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <p className="text-blue-200">Projeleriniz İçin Yanınızdayız</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Özel Projeniz mi Var?
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Her projeye özel, ihtiyaçlarınıza uygun çözümler geliştiriyoruz. Uzman ekibimizle tanışın.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/iletisim"
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-200 overflow-hidden shadow-lg hover:shadow-blue-500/50"
              >
                <span className="relative z-10">İletişime Geçin</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <svg 
                  className="w-6 h-6 ml-3 relative z-10 transition-transform duration-200 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/tel:+902121234567"
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+90 (212) 123 45 67</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </section>

     
    </div>
  );
}
