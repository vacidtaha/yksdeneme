"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { ChevronDown, ChevronRight, BookOpen, Play, CheckCircle } from "lucide-react";

interface SubTopic {
  id: string;
  title: string;
  completed?: boolean;
  hasVideo?: boolean;
  hasPDF?: boolean;
  hasQuiz?: boolean;
}

interface Topic {
  id: string;
  title: string;
  subTopics: SubTopic[];
  color: string;
  completedCount?: number;
}

export default function AytTarihPage() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [showProgressWarning, setShowProgressWarning] = useState(true);

  // AYT Tarih Konu Başlıkları
  const topics: Topic[] = [
    {
      id: "tarih-bilimi",
      title: "1. Tarih Bilimi ve Yöntemi",
      color: "#007AFF",
      subTopics: [
        { id: "tarihin-tanimi", title: "Tarihin tanımı, önemi ve bilimlerle ilişkisi", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "takvim-zaman", title: "Takvim, zaman ve kronoloji", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "ilk-orta-cag",
      title: "2. İlk ve Orta Çağlarda Türk Dünyası",
      color: "#34C759",
      subTopics: [
        { id: "islamiyet-oncesi", title: "İslamiyet öncesi Türk tarihi", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "islamiyet-kabulü", title: "İslamiyet'in kabulü ve Türk-İslam devletleri", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "orta-cag-avrupa", title: "Orta Çağ'da Avrupa ve Türk-İslam dünyası", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "osmanli-kurulus",
      title: "3. Osmanlı Devleti Kuruluş ve Yükselme",
      color: "#FF9F0A",
      subTopics: [
        { id: "osmanli-yapisi", title: "Osmanlı siyasi, ekonomik, sosyal ve kültürel yapı", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "kurulus-savislari", title: "Kuruluş ve yükselme sürecindeki savaşlar", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "teskilatlanma", title: "Teşkilatlanma, toprak yönetimi, tımar sistemi", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "osmanli-duraklama",
      title: "4. Osmanlı Duraklama ve Gerileme Dönemi",
      color: "#AF52DE",
      subTopics: [
        { id: "ic-dis-sorunlar", title: "İç ve dış sorunlar", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "18-yuzyil-islahatlar", title: "17. ve 18. yüzyılda ıslahatlar", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "osmanli-avrupa", title: "Osmanlı-Avrupa ilişkileri", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "osmanli-savislari", title: "Osmanlı-Rus ve Osmanlı-İran savaşları", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "19-yuzyil-osmanli",
      title: "5. 19. Yüzyılda Osmanlı ve Dağılma",
      color: "#FF3B30",
      subTopics: [
        { id: "tanzimat-islahat", title: "Tanzimat ve Islahat fermanları", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "mesrutiyetler", title: "Meşrutiyetler", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "azinlik-sorunlari", title: "Azınlık sorunları ve milliyetçilik hareketleri", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "93-harbi", title: "93 Harbi, Trablusgarp, Balkan savaşları", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "20-yuzyil-baslari",
      title: "6. 20. Yüzyıl Başları ve 1. Dünya Savaşı",
      color: "#30D158",
      subTopics: [
        { id: "ittihat-terakki", title: "İttihat ve Terakki dönemi", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "osmanli-savas", title: "Osmanlı'nın savaşa girişi ve cepheler", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "mondros-sevr", title: "Mondros ve Sevr antlaşmaları", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "kurtulus-savisi",
      title: "7. Kurtuluş Savaşı Dönemi",
      color: "#0A84FF",
      subTopics: [
        { id: "cemiyetler-kongreler", title: "Cemiyetler, kongreler, Misak-ı Millî", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "tbmm-acilisi", title: "TBMM'nin açılması", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "cepheler", title: "Doğu, güney ve batı cepheleri", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "mudanya-lozan", title: "Mudanya ve Lozan antlaşmaları", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "ataturk-ilkeleri",
      title: "8. Atatürk İlkeleri ve İnkılapları",
      color: "#FF6482",
      subTopics: [
        { id: "siyasi-hukuki", title: "Siyasi, hukuki, eğitim, ekonomi, toplumsal inkılaplar", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "ataturkculuk", title: "Atatürkçülük ve 6 ilke", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "ilkeler-detay", title: "Laiklik, halkçılık, cumhuriyetçilik", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "ataturk-dis-politika",
      title: "9. Atatürk Dönemi Dış Politika",
      color: "#64D2FF",
      subTopics: [
        { id: "ikili-iliskiler", title: "Musul, Yunanistan, Fransa, Sovyetler ile ilişkiler", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "anlasmalar", title: "Montrö, Balkan Paktı, Sadabat Paktı", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "dunya-savisi-soguk",
      title: "10. 2. Dünya Savaşı ve Soğuk Savaş",
      color: "#BF5AF2",
      subTopics: [
        { id: "turkiye-savas", title: "Türkiye'nin savaşa girmemesi", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "cok-partili", title: "Çok partili hayata geçiş", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "truman-nato", title: "Truman Doktrini, Marshall Planı, NATO", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "yakin-donem",
      title: "11. Yakın Dönem Türkiye Tarihi",
      color: "#FF9500",
      subTopics: [
        { id: "1960-1980", title: "1960 – 1980 arası Türkiye", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "1980-sonrasi", title: "1980 sonrası dönem", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "ic-dis-politika", title: "İç ve dış politikalar", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    },
    {
      id: "20-yuzyil-dunya",
      title: "12. XX. Yüzyılda Dünya",
      color: "#32D74B",
      subTopics: [
        { id: "dunya-savaslari", title: "1. ve 2. Dünya savaşları", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "soguk-savas", title: "Soğuk Savaş, SSCB – ABD rekabeti", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "uluslararasi", title: "BM, NATO, Varşova Paktı", hasVideo: true, hasPDF: true, hasQuiz: true },
        { id: "ortadogu", title: "Ortadoğu, Filistin, Körfez savaşları", hasVideo: true, hasPDF: true, hasQuiz: true }
      ]
    }
  ];

  // Progress tracking
  useEffect(() => {
    const saved = localStorage.getItem('ayt-tarih-completed');
    if (saved) {
      setCompletedTopics(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (completedTopics.length > 0) {
      localStorage.setItem('ayt-tarih-completed', JSON.stringify(completedTopics));
    }
  }, [completedTopics]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const selectTopic = (topicId: string) => {
    setSelectedTopic(topicId);
  };

  const markTopicComplete = (topicId: string) => {
    setCompletedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const getCurrentTopic = () => {
    if (!selectedTopic) return null;
    return topics.find(topic => 
      topic.subTopics.some(sub => sub.id === selectedTopic)
    );
  };

  const getCurrentSubTopic = () => {
    if (!selectedTopic) return null;
    for (const topic of topics) {
      const subTopic = topic.subTopics.find(sub => sub.id === selectedTopic);
      if (subTopic) return subTopic;
    }
    return null;
  };

  const getTopicProgress = (topic: Topic) => {
    const completedCount = topic.subTopics.filter(sub => 
      completedTopics.includes(sub.id)
    ).length;
    return Math.round((completedCount / topic.subTopics.length) * 100);
  };

  const getTotalProgress = () => {
    const totalSubTopics = topics.reduce((acc, topic) => acc + topic.subTopics.length, 0);
    return Math.round((completedTopics.length / totalSubTopics) * 100);
  };

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1d1d1f'}}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <Header alwaysShow={true} />
      
      <div className="pt-32">
        {/* Ana Header */}
        <div className="text-center mb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-white"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
              AYT Tarih
            </h1>
            
            {/* Overall Progress Bar */}
            <div className="max-w-md mx-auto mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-400">Genel İlerleme</span>
                <span className="text-sm font-semibold" style={{color: '#007AFF'}}>{getTotalProgress()}%</span>
              </div>
              <div 
                className="w-full rounded-full h-2"
                style={{backgroundColor: 'rgba(255,255,255,0.1)'}}
              >
                <div 
                  className="h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ 
                    width: `${getTotalProgress()}%`,
                    background: 'linear-gradient(90deg, #007AFF 0%, #34C759 100%)'
                  }}
                ></div>
              </div>
            </div>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto"
               style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
              Türk tarihinin köklü geçmişinden günümüze kadar olan süreci keşfedin, dünya tarihi ile bağlantıları kurun. 
              <span style={{
                background: 'linear-gradient(135deg, #32D74B 0%, #30D158 25%, #34C759 50%, #30D158 75%, #32D74B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '600',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}>
                Tamamladığınız konuları tıklayarak işaretleyin.
              </span>
            </p>
            
            {/* İlerleme Uyarısı */}
            {showProgressWarning && (
              <div className="max-w-2xl mx-auto mt-6">
                <div 
                  className="rounded-xl p-4 border relative"
                  style={{
                    backgroundColor: 'rgba(255, 149, 0, 0.1)',
                    borderColor: 'rgba(255, 149, 0, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <button
                    onClick={() => setShowProgressWarning(false)}
                    className="absolute top-3 right-3 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    ✕
                  </button>
                  <p className="text-sm text-center leading-relaxed pr-6"
                     style={{ 
                       color: '#FF9500',
                       fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' 
                     }}>
                    İlerleme durumunuz tarayıcıda önbelleği temizlemediğiniz sürece otomatik olarak kaydedilir. İstediğiniz zaman kaldığınız yerden devam edebilirsiniz.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Ana İçerik - 3 Sütun */}
        <div className="w-full">
          <div className="flex min-h-[600px]">
            
            {/* Sol Sütun - PDF ve Sorular (0-30%) */}
            <div className="w-[30%] flex justify-center">
              <div className="sticky top-32 w-full max-w-xs">
                {selectedTopic ? (
                  <div className="space-y-4">
                    {/* PDF Özet */}
                    <div 
                      className="rounded-xl p-5 border border-white/8 hover:border-white/12 transition-all duration-200"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(15px)'
                      }}
                    >
                      <div className="mb-4">
                        <h3 className="font-semibold text-white text-sm mb-1"
                            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                          {getCurrentSubTopic()?.title}
                        </h3>
                        <p className="text-xs text-gray-500">Konu Özeti</p>
                      </div>
                      
                      <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                        Bu konunun tüm önemli noktalarını, tarihsel gelişmeleri ve önemli olayları içeren kapsamlı özet. 
                        Tarih bilginizi pekiştirin.
                      </p>
                      
                      <button 
                        className="w-full py-2.5 rounded-lg transition-all duration-200 text-xs font-medium"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'white';
                        }}
                      >
                        PDF&apos;i Önizle
                      </button>
                    </div>

                    {/* Örnek Sorular */}
                    <div 
                      className="rounded-xl p-5 border border-white/8 hover:border-white/12 transition-all duration-200"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        backdropFilter: 'blur(15px)'
                      }}
                    >
                      <div className="mb-4">
                        <h3 className="font-semibold text-white text-sm mb-1"
                            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                          İnteraktif Sorular
                        </h3>
                        <p className="text-xs text-gray-500">Sınavdan Örnek Sorular</p>
                      </div>
                      
                      <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                        Geçmiş AYT sınavlarından yayınlanmış örnek sorulardan ve yapay zeka&apos;nın ürettiği sorulardan 
                        oluşan {getCurrentSubTopic()?.title.toLowerCase()} soruları. Tarih bilginizi test edin.
                      </p>
                      
                      <button 
                        className="w-full py-2.5 rounded-lg transition-all duration-200 text-xs font-medium"
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'white';
                        }}
                      >
                        Kendini Test Et
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                         style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
                      <BookOpen className="w-6 h-6 text-gray-500" />
                    </div>
                    <h3 className="text-base font-medium text-gray-400 mb-2"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                      Konu Kaynakları
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-40 mx-auto">
                      Sağ panelden bir konu seçerek kaynaklara erişin
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Orta Sütun - YouTube Videoları (30-70%) */}
            <div className="w-[40%] flex justify-center">
              <div className="sticky top-40 w-full max-w-4xl">
                {selectedTopic ? (
                  <div>
                    <div className="mb-8">
                      <div className="mb-4">
                        <h2 className="text-2xl font-semibold text-white mb-1"
                            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                          {getCurrentSubTopic()?.title}
                        </h2>
                        <p className="text-sm text-gray-400">
                          Seçilmiş eğitici videolar • {getCurrentTopic()?.title}
                        </p>
                      </div>
                    </div>
                    
                    {/* Video Grid */}
                    <div className="space-y-4">
                      {[
                        { title: "Tarihsel Gelişmeler", duration: "18:25", views: "3.2K", instructor: "Prof. Dr. Halil İnalcık" },
                        { title: "Önemli Olaylar", duration: "24:40", views: "2.8K", instructor: "Doç. Dr. Kemal Çiçek" },
                        { title: "Analiz ve Yorumlar", duration: "16:15", views: "2.1K", instructor: "Dr. Mehmet Özkan" }
                      ].map((video, i) => (
                        <div 
                          key={i}
                          className="rounded-2xl p-5 border border-white/10 hover:border-white/15 transition-all duration-200 cursor-pointer group"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(20px)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.transform = 'translateY(0px)';
                          }}
                        >
                          <div className="flex items-start gap-5">
                            <div className="w-40 h-24 rounded-xl overflow-hidden flex-shrink-0 relative group-hover:scale-105 transition-transform duration-200"
                                 style={{backgroundColor: '#FF0000'}}>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                  <Play className="w-6 h-6 text-white ml-1" />
                                </div>
                              </div>
                              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                {video.duration}
                              </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-white mb-2 text-base leading-tight"
                                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                                {getCurrentSubTopic()?.title} - {video.title}
                              </h3>
                              <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                                Bu videoda {getCurrentSubTopic()?.title.toLowerCase()} konusunun {video.title.toLowerCase()} bölümünü detaylı şekilde işliyoruz.
                              </p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                  <span>{video.instructor}</span>
                                  <span>•</span>
                                  <span>{video.views} görüntülenme</span>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <button 
                                    className="px-3 py-1.5 rounded-lg transition-all duration-200 text-xs font-medium"
                                    style={{
                                      backgroundColor: getCurrentTopic()?.color + '20',
                                      color: getCurrentTopic()?.color,
                                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.backgroundColor = getCurrentTopic()?.color + '30';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.backgroundColor = getCurrentTopic()?.color + '20';
                                    }}
                                  >
                                    İzle
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-32">
                    <div className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center"
                         style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
                      <Play className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-400 mb-3"
                        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                      Video Dersleri
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-60 mx-auto">
                      Sağ panelden bir konu seçerek o konuyla ilgili özenle seçilmiş video derslerine ulaşın
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sağ Sütun - Konu Başlıkları (70-100%) */}
            <div className="w-[30%] flex justify-center">
              <div className="sticky top-40 w-full max-w-xs">
                <div className="flex items-center justify-center mb-6">
                  <div className="text-xs text-gray-500 mr-3">
                    {completedTopics.length}/{topics.reduce((acc, topic) => acc + topic.subTopics.length, 0)}
                  </div>
                  <h3 className="text-lg font-semibold text-white"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                    Konu Başlıkları
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {topics.map((topic) => {
                    const topicProgress = getTopicProgress(topic);
                    const isTopicCompleted = topicProgress === 100;
                    
                    return (
                      <div key={topic.id}>
                        {/* Ana Başlık */}
                        <button
                          onClick={() => toggleSection(topic.id)}
                          className="w-full text-left p-4 rounded-xl transition-all duration-200 border hover:border-white/20"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(20px)',
                            borderColor: 'rgba(255,255,255,0.1)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.transform = 'translateY(0px)';
                          }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-white"
                                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                                {topic.title}
                              </span>
                              {isTopicCompleted && (
                                <CheckCircle className="w-4 h-4" style={{color: '#34C759'}} />
                              )}
                            </div>
                            {openSections.includes(topic.id) ? (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="flex items-center gap-3">
                            <div className="flex-1">
                              <div 
                                className="w-full rounded-full h-1.5"
                                style={{backgroundColor: 'rgba(255,255,255,0.1)'}}
                              >
                                <div 
                                  className="h-1.5 rounded-full transition-all duration-500 ease-out"
                                  style={{ 
                                    width: `${topicProgress}%`,
                                    backgroundColor: topic.color
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="text-xs font-medium text-gray-400">
                              {topicProgress}%
                            </div>
                          </div>
                        </button>

                        {/* Alt Başlıklar */}
                        {openSections.includes(topic.id) && (
                          <div className="mt-2 pl-2 space-y-1.5">
                            {topic.subTopics.map((subTopic) => {
                              const isCompleted = completedTopics.includes(subTopic.id);
                              const isSelected = selectedTopic === subTopic.id;
                              
                              return (
                                <button
                                  key={subTopic.id}
                                  onClick={() => selectTopic(subTopic.id)}
                                  className={`w-full text-left p-3 rounded-lg text-xs transition-all duration-200 ${
                                    isSelected
                                      ? 'text-white'
                                      : 'text-gray-300 hover:text-white'
                                  }`}
                                  style={{
                                    backgroundColor: isSelected 
                                      ? 'rgba(0, 122, 255, 0.15)' 
                                      : isCompleted 
                                        ? 'rgba(52, 199, 89, 0.1)' 
                                        : 'rgba(255,255,255,0.03)',
                                    border: isSelected 
                                      ? '1px solid rgba(0, 122, 255, 0.3)' 
                                      : isCompleted 
                                        ? '1px solid rgba(52, 199, 89, 0.2)' 
                                        : '1px solid rgba(255,255,255,0.06)',
                                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!isSelected) {
                                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!isSelected) {
                                      e.currentTarget.style.backgroundColor = isCompleted 
                                        ? 'rgba(52, 199, 89, 0.1)' 
                                        : 'rgba(255,255,255,0.03)';
                                    }
                                  }}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      <span className="leading-relaxed">{subTopic.title}</span>
                                    </div>
                                    
                                    {/* Completion Button */}
                                    <div
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        markTopicComplete(subTopic.id);
                                      }}
                                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 cursor-pointer ${
                                        isCompleted
                                          ? 'border-green-500 bg-green-500'
                                          : 'border-gray-500 hover:border-green-400'
                                      }`}
                                    >
                                      {isCompleted && (
                                        <CheckCircle className="w-3 h-3 text-white" />
                                      )}
                                    </div>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
} 