import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Music, Heart, ChevronRight } from 'lucide-react';
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
  const playerRef = useRef<any>(null);

  // Initialize YouTube API
  useEffect(() => {
    // 1. Load the IFrame Player API code asynchronously.
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // 2. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          'playsinline': 1,
          'controls': 0,
          'disablekb': 1,
          'fs': 0,
          'loop': 1,
          'playlist': YOUTUBE_VIDEO_ID // Required for loop to work
        },
        events: {
          'onReady': (event: any) => {
             event.target.setVolume(50); // Set volume to 50%
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

  const handleInteraction = useCallback(() => {
    // Only advance if not the last slide
    if (currentIndex < SLIDES.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }

    // Attempt to play YouTube video on first interaction if not playing
    if (!isPlaying && playerRef.current && playerRef.current.playVideo) {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  }, [currentIndex, isPlaying]);

  const restart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(0);
  };

  const currentSlide = SLIDES[currentIndex];

  // Render content based on slide type
  const renderContent = () => {
    switch (currentSlide.type) {
      case SlideType.INTRO:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in">
            <h1 className="font-script text-7xl mb-4 text-romantic-text">{currentSlide.title}</h1>
            <p className="font-serif text-xl italic text-romantic-secondary mb-12">{currentSlide.text}</p>
            <div className="animate-bounce mt-8">
              <button className="bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg text-romantic-text font-serif tracking-widest uppercase text-sm flex items-center gap-2">
                <Play size={16} className="fill-current" />
                Başlamak İçin Dokun
              </button>
            </div>
          </div>
        );

      case SlideType.MEMORY:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 animate-fade-in">
            <div className={`relative p-3 bg-white shadow-2xl mb-8 w-full max-w-sm ${currentSlide.imageRotate || 'rotate-2'}`}>
              <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                <img 
                  src={currentSlide.image} 
                  alt={currentSlide.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 right-0 font-script text-4xl text-romantic-secondary/50 opacity-50 z-[-1]">
                {currentSlide.watermark || 'Anılar'}
              </div>
            </div>
            <h2 className="font-serif text-3xl mb-4 text-romantic-text">{currentSlide.title}</h2>
            <p className="font-sans text-lg text-center leading-relaxed text-romantic-text/80 whitespace-pre-line">
              {currentSlide.text}
            </p>
          </div>
        );

      case SlideType.MESSAGE:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8 text-center animate-fade-in relative">
            <div className="font-serif text-6xl text-romantic-primary opacity-20 absolute top-[20%] left-4">"</div>
            <h2 className="font-serif text-3xl md:text-4xl leading-relaxed text-romantic-text italic relative z-10">
              {currentSlide.text}
            </h2>
            <div className="font-serif text-6xl text-romantic-primary opacity-20 absolute bottom-[20%] right-4">"</div>
            <div className="mt-8">
               <Heart className="text-romantic-accent fill-current animate-pulse-slow" size={32} />
            </div>
          </div>
        );

      case SlideType.MUSIC:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 animate-fade-in">
             <div className="w-48 h-48 bg-gradient-to-br from-romantic-primary to-romantic-secondary rounded-full shadow-2xl flex items-center justify-center mb-10 animate-spin" style={{ animationDuration: '10s' }}>
                <Music size={64} className="text-white" />
             </div>
             <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-bold text-romantic-text mb-1">{currentSlide.title}</h3>
                <p className="font-sans text-sm text-romantic-secondary uppercase tracking-widest">{currentSlide.text}</p>
             </div>
             <div className="space-y-2 text-center">
               {currentSlide.extra?.map((line, i) => (
                 <p key={i} className="font-serif text-xl italic text-romantic-text/70">
                   {line}
                 </p>
               ))}
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
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-romantic-primary/20 text-romantic-accent group-hover:bg-romantic-accent group-hover:text-white transition-colors duration-300">
                    <Heart size={14} className="fill-current" />
                  </span>
                  <span className="font-serif text-xl text-romantic-text border-b border-transparent group-hover:border-romantic-primary transition-all">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );

      case SlideType.FINAL:
        return (
          <div className="flex flex-col items-center justify-center h-full px-6 text-center animate-fade-in">
            <h1 className="font-script text-6xl mb-6 text-romantic-text">{currentSlide.title}</h1>
            <p className="font-serif text-xl text-romantic-secondary mb-12">{currentSlide.text}</p>
            
            <div className="relative">
              <Heart size={120} className="text-romantic-accent fill-current animate-pulse" />
            </div>

            <button 
              onClick={restart}
              className="mt-20 text-xs font-sans uppercase tracking-widest text-romantic-secondary/50 hover:text-romantic-secondary transition-colors z-50 p-4"
            >
              Başa Dön ↺
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      onClick={handleInteraction}
      className="relative w-full h-screen bg-romantic-bg overflow-hidden cursor-pointer select-none"
    >
      {/* Hidden YouTube Player */}
      <div id="youtube-player" className="absolute top-0 left-0 opacity-0 pointer-events-none -z-50 h-0 w-0" />

      <ProgressBar total={SLIDES.length} current={currentIndex} />
      <FloatingHearts />
      
      {/* Background Gradient Mesh Effect */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-romantic-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-romantic-secondary/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full max-w-lg mx-auto transition-all duration-700 ease-in-out">
        {renderContent()}
      </main>

      {/* Footer Hint */}
      {currentIndex < SLIDES.length - 1 && (
        <div className="absolute bottom-6 w-full text-center z-20 animate-pulse">
           <p className="font-sans text-xs uppercase tracking-[0.2em] text-romantic-text/40 flex items-center justify-center gap-2">
             Devam etmek için dokun <ChevronRight size={12} />
           </p>
        </div>
      )}
    </div>
  );
};

export default App;