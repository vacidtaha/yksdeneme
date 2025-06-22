"use client";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export default function AgacimPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header alwaysShow={true} />
      
      <div className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-white"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
              🌳 Ağacım
            </h1>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
               style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
              Bu sayfa henüz yapım aşamasında. Yakında burada özel bir deneyim sizi bekliyor olacak.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full flex items-center justify-center"
                 style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
              <span className="text-6xl">🌱</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 