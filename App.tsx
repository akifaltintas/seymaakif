import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Music, Heart, ChevronRight, ChevronLeft, Volume2, Lock, ArrowLeft, Phone, Video, MoreVertical, ChevronsDown, VolumeX } from 'lucide-react';
import { SLIDES, YOUTUBE_VIDEO_ID } from './constants';
import { SlideType } from './types';
import ProgressBar from './components/ProgressBar';
import FloatingHearts from './components/FloatingHearts';

// Helper to access window globals for YouTube API
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const playerRef = useRef<any>(null);

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate Countdown
  useEffect(() => {
    const targetDate = new Date('2026-04-25T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Initialize YouTube API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '1',
        width: '1',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          'playsinline': 1,
          'controls': 0,
          'disablekb': 1,
          'fs': 0,
          'loop': 1,
          'playlist': YOUTUBE_VIDEO_ID
        },
        events: {
          'onReady': (event: any) => {
             event.target.setVolume(50);
          }
        }
      });
    };

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (currentIndex === 0) return;
    const currentSlide = SLIDES[currentIndex];
    if (currentSlide.type === SlideType.VIDEO) {
        if (playerRef.current && playerRef.current.pauseVideo) {
            playerRef.current.pauseVideo();
            setIsPlaying(false);
        }
    } else {
        if (!isPlaying && playerRef.current && playerRef.current.playVideo) {
            playerRef.current.playVideo();
            setIsPlaying(true);
        }
    }
  }, [currentIndex]);

  const handleStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cleanInput = password.toLowerCase().replace(/\s/g, '');
    if (cleanInput === 'seniseviyorum') {
      if (playerRef.current && playerRef.current.playVideo) {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
      setCurrentIndex(1);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  const handleInteraction = useCallback((e: React.MouseEvent) => {
    if (currentIndex === 0) return;
    if (SLIDES[currentIndex].type !== SlideType.VIDEO && !isPlaying && playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
    const { clientX } = e;
    const { innerWidth } = window;
    if (clientX > innerWidth / 2) {
      if (SLIDES[currentIndex].type === SlideType.FINAL) return;
      if (currentIndex < SLIDES.length - 1) setCurrentIndex((prev) => prev + 1);
    } else {
      if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex, isPlaying]);

  const restart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(0);
    setPassword('');
    setIsPlaying(false);
    if (playerRef.current && playerRef.current.stopVideo) {
       playerRef.current.stopVideo();
    }
  };

  const renderContent = () => {
    const currentSlide = SLIDES[currentIndex];
    switch (currentSlide.type) {
      case SlideType.INTRO:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in relative">
            <div className="absolute top-[8%] animate-pulse-slow">
              <div className="flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/60 shadow-sm">
                <Volume2 size={16} className="text-romantic-text" />
                <span className="text-xs font-sans tracking-widest uppercase text-romantic-text font-semibold">Sesi Açın</span>
              </div>
            </div>

            {/* Countdown Section */}
            <div className="mb-10 w-full max-w-sm">
              <h2 className="font-serif text-2xl md:text-3xl text-romantic-text mb-6 drop-shadow-sm">En Güzel Günümüze</h2>
              <div className="grid grid-cols-4 gap-2 md:gap-4 px-2">
                {[
                  { label: 'Gün', value: timeLeft.days },
                  { label: 'Saat', value: timeLeft.hours },
                  { label: 'Dak', value: timeLeft.minutes },
                  { label: 'Sn', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/50 backdrop-blur-md rounded-2xl p-2 md:p-3 border border-white/40 shadow-sm flex flex-col items-center">
                    <span className="font-sans text-xl md:text-2xl font-bold text-romantic-accent tabular-nums">
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-[10px] md:text-xs uppercase tracking-widest text-romantic-text/70">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full max-w-xs space-y-6 z-20">
              <div className={`transition-transform duration-100 ${error ? 'translate-x-[-10px] border-red-400' : ''} ${error ? 'animate-[pulse_0.5s_ease-in-out]' : ''}`}>
                <div className="relative group">
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    placeholder="Sihirli sözcüğü giriniz..."
                    className={`w-full bg-white/60 backdrop-blur-md border-2 ${error ? 'border-red-300 text-red-500' : 'border-white/50 text-romantic-text'} rounded-full px-6 py-4 text-center outline-none focus:border-romantic-primary focus:bg-white/80 transition-all font-serif text-lg placeholder:text-romantic-text/40 shadow-lg`}
                  />
                  {!password && <Lock size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-romantic-text/30" />}
                </div>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={handleStart}
                  className="bg-romantic-primary text-white px-10 py-4 rounded-full shadow-xl font-serif tracking-widest uppercase text-sm flex items-center gap-3 transform hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-romantic-accent"
                >
                  <Play size={18} className="fill-current" />
                  Başla
                </button>
              </div>
            </div>
          </div>
        );

      case SlideType.WHATSAPP:
        return (
          <div className="flex flex-col h-full items-center justify-start pt-16 px-4 animate-fade-in relative z-20">
            <div className="w-full max-w-[320px] h-[55vh] md:h-[68vh] bg-[#E5DDD5] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative border border-gray-300 ring-4 ring-black/5 mx-auto transition-all duration-300">
              <div className="bg-[#075E54] text-white p-2 px-3 flex items-center shadow-md z-10 shrink-0">
                <ArrowLeft size={18} className="mr-1" />
                <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 flex items-center justify-center text-gray-500 overflow-hidden shrink-0">
                  <div className="bg-gray-400 w-full h-full flex items-center justify-center text-xs font-bold">A</div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-semibold text-sm leading-tight truncate">{currentSlide.title}</h3>
                  <p className="text-[10px] opacity-80 truncate">Çevrimiçi</p>
                </div>
                <div className="flex gap-3 ml-2">
                  <Video size={16} />
                  <Phone size={16} />
                  <MoreVertical size={16} />
                </div>
              </div>
              <div className="flex-1 p-3 bg-[#E5DDD5] relative overflow-y-auto scrollbar-hide">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] pointer-events-none"></div>
                  <div className="flex justify-center mb-4 relative z-10">
                    <span className="bg-[#D4EAF4] text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-lg shadow-sm">{currentSlide.date}</span>
                  </div>
                  <div className="space-y-2 relative z-10 pb-4">
                    {currentSlide.messages?.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-1.5 px-2.5 rounded-lg shadow-sm text-xs relative ${msg.isSender ? 'bg-[#E2FFC7] rounded-tr-none' : 'bg-white rounded-tl-none'}`}>
                          <p className="text-[#303030] leading-snug pb-1 whitespace-pre-wrap">{msg.text}</p>
                          <div className="text-right"><span className="text-[9px] text-gray-500">{msg.time}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
            <p className="mt-2 text-xs text-romantic-text/60 font-sans italic animate-pulse">(Mesajı aşağı kaydırabilirsin.)</p>
            {currentSlide.footerText && (
              <div className="mt-4 md:mt-6 text-center max-w-xs animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <p className="font-serif text-xl md:text-2xl text-romantic-text italic font-medium leading-relaxed drop-shadow-sm px-2">{currentSlide.footerText}</p>
              </div>
            )}
          </div>
        );

      case SlideType.MEMORY:
        return (
          <div className={`flex flex-col items-center justify-center h-full px-6 pb-20 animate-fade-in ${currentSlide.textAlign === 'text-left' ? 'items-start' : ''}`}>
            <div className={`relative p-3 bg-white shadow-2xl mb-4 ${currentSlide.containerClass || 'w-full max-w-sm'} ${currentSlide.imageRotate || 'rotate-2'}`}>
              <div className={`${currentSlide.aspectRatio === 'aspect-auto' ? '' : (currentSlide.aspectRatio || 'aspect-[3/4]')} ${currentSlide.aspectRatio === 'aspect-auto' ? '' : 'overflow-hidden'} bg-gray-200`}>
                <img src={currentSlide.image} alt={currentSlide.title} className={`w-full ${currentSlide.aspectRatio === 'aspect-auto' ? 'h-auto' : 'h-full object-cover'}`} />
              </div>
              <div className="absolute -bottom-10 right-0 font-script text-4xl text-romantic-secondary/50 opacity-50 z-[-1]">{currentSlide.watermark || 'Anılar'}</div>
            </div>
            {currentSlide.secondImage && (
              <div className={`relative p-3 bg-white shadow-2xl mb-8 w-full max-w-sm ${currentSlide.imageRotate ? '-'+currentSlide.imageRotate : '-rotate-2'}`}>
                <div className={`${currentSlide.aspectRatio || 'aspect-[3/4]'} overflow-hidden bg-gray-200`}>
                  <img src={currentSlide.secondImage} alt={currentSlide.title} className="w-full h-full object-cover" />
                </div>
              </div>
            )}
            <div className={`w-full max-w-sm ${currentSlide.textAlign || 'text-center'}`}>
              <h2 className="font-serif text-3xl mb-4 text-romantic-text">{currentSlide.title}</h2>
              <p className="font-sans text-lg leading-relaxed text-romantic-text/80 whitespace-pre-line">{currentSlide.text}</p>
              {currentSlide.author && <p className="mt-2 text-sm text-romantic-secondary italic text-right font-serif">— {currentSlide.author}</p>}
            </div>
          </div>
        );

      case SlideType.COLLAGE:
        let layoutClass = "grid grid-cols-2 gap-3";
        if (currentSlide.collageLayout === 'row') layoutClass = "flex flex-row gap-2 h-64 justify-center items-center";
        else if (currentSlide.collageLayout === 'col') layoutClass = "flex flex-col gap-4 w-full mx-auto";
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 animate-fade-in">
             <h2 className="font-serif text-3xl mb-6 text-romantic-text text-center">{currentSlide.title}</h2>
             <div className={`w-full max-w-md bg-white p-3 shadow-xl transform rotate-1 ${layoutClass}`}>
                {currentSlide.collageImages?.map((img, idx) => (
                  <div key={idx} className={`bg-gray-100 rounded-sm ${currentSlide.collageLayout === 'row' ? 'flex-1 h-full overflow-hidden' : currentSlide.collageLayout === 'col' ? 'w-full' : 'aspect-square overflow-hidden'}`}>
                    <img src={img} alt={`Collage ${idx}`} className={`w-full hover:scale-110 transition-transform duration-500 ${currentSlide.collageLayout === 'col' ? 'h-auto' : 'h-full object-cover'}`} />
                  </div>
                ))}
             </div>
             {currentSlide.text && <div className="mt-12 text-center"><p className="font-script text-3xl text-romantic-text whitespace-pre-line leading-relaxed">{currentSlide.text}</p></div>}
          </div>
        );

      case SlideType.MESSAGE:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8 text-center animate-fade-in relative">
            <div className="font-serif text-6xl text-romantic-primary opacity-20 absolute top-[20%] left-4">"</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-relaxed text-romantic-text italic relative z-10">{currentSlide.text}</h2>
            <div className="font-serif text-6xl text-romantic-primary opacity-20 absolute bottom-[20%] right-4">"</div>
            <div className="mt-8"><Heart className="text-romantic-accent fill-current animate-pulse-slow" size={32} /></div>
          </div>
        );

      case SlideType.MUSIC:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 animate-fade-in">
             <div className="w-48 h-48 bg-gradient-to-br from-romantic-primary to-romantic-secondary rounded-full shadow-2xl flex items-center justify-center mb-10 animate-spin" style={{ animationDuration: '10s' }}><Music size={64} className="text-white" /></div>
             <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-bold text-romantic-text mb-1">{currentSlide.title}</h3>
                <p className="font-sans text-sm text-romantic-secondary uppercase tracking-widest">{currentSlide.text}</p>
             </div>
             <div className="space-y-2 text-center">
               {currentSlide.extra?.map((line, i) => <p key={i} className="font-serif text-xl italic text-romantic-text/70">{line}</p>)}
             </div>
          </div>
        );

      case SlideType.DREAMS:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8 animate-fade-in">
            <h2 className="font-script text-5xl mb-12 text-romantic-text">{currentSlide.title}</h2>
            <ul className="space-y-6 w-full max-w-md">
              {currentSlide.extra?.map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-romantic-primary/20 text-romantic-accent group-hover:bg-romantic-accent group-hover:text-white transition-colors duration-300"><Heart size={14} className="fill-current" /></span>
                  <span className="font-serif text-xl text-romantic-text border-b border-transparent group-hover:border-romantic-primary transition-all">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case SlideType.VIDEO:
        return (
          <div className="flex flex-col items-center justify-center h-full w-full animate-fade-in relative z-50 p-4">
             {currentSlide.title && <h2 className="font-serif text-2xl mb-4 text-romantic-text text-center">{currentSlide.title}</h2>}
             <div className="w-full max-w-sm aspect-[9/16] max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50 bg-black relative group">
               <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${currentSlide.videoId}?autoplay=1&playsinline=1&mute=1&rel=0&loop=1&playlist=${currentSlide.videoId}&controls=1&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full object-cover"></iframe>
             </div>
             <div className="mt-4 flex items-center gap-2 text-romantic-text/60 animate-pulse bg-white/50 px-3 py-1 rounded-full"><VolumeX size={14} /><p className="font-sans text-xs">Otomatik başlamazsa veya ses gelmezse videoya dokunun.</p></div>
          </div>
        );

      case SlideType.FINAL:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 text-center animate-fade-in">
            <h1 className="font-script text-6xl mb-6 text-romantic-text">{currentSlide.title}</h1>
            <p className="font-serif text-xl text-romantic-secondary mb-12">{currentSlide.text}</p>
            <div className="relative cursor-pointer group" onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => prev + 1); }}>
              <Heart size={150} className="text-romantic-accent fill-current animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold font-sans text-sm tracking-wider animate-bounce">Buraya Bas</span>
            </div>
            <button onClick={restart} className="mt-20 text-xs font-sans uppercase tracking-widest text-romantic-secondary/50 hover:text-romantic-secondary transition-colors z-50 p-4 cursor-pointer">Başa Dön ↺</button>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div onClick={handleInteraction} className="relative w-full h-[100dvh] bg-romantic-bg overflow-hidden cursor-pointer select-none">
      <div id="youtube-player" className="absolute top-0 left-0 opacity-1 pointer-events-none -z-50 h-[1px] w-[1px]" />
      <ProgressBar total={SLIDES.length} current={currentIndex} />
      <FloatingHearts />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-romantic-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-romantic-secondary/20 rounded-full blur-[80px] pointer-events-none" />
      <main className="relative z-10 w-full h-full max-w-lg mx-auto transition-all duration-700 ease-in-out">
        {renderContent()}
      </main>
      {currentIndex > 0 && (
        <div className="absolute bottom-12 md:bottom-8 w-full z-50 pointer-events-none px-8" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <div className="flex items-center justify-between text-romantic-text/40">
            <div className={`w-24 flex justify-start transition-opacity duration-300 ${currentIndex > 1 ? 'opacity-100 animate-pulse' : 'opacity-0'}`}><div className="flex items-center gap-1 font-sans text-[10px] uppercase tracking-widest"><ChevronLeft size={10} /> Geri</div></div>
            <div className="font-serif text-sm font-medium tracking-widest opacity-60">{currentIndex} / {SLIDES.length - 1}</div>
            <div className={`w-24 flex justify-end transition-opacity duration-300 ${currentIndex < SLIDES.length - 1 ? 'opacity-100 animate-pulse' : 'opacity-0'}`}><div className="flex items-center gap-1 font-sans text-[10px] uppercase tracking-widest">İleri <ChevronRight size={10} /></div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;