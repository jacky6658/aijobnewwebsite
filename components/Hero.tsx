'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 設定畫布大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 粒子系統
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        const colors = [
          'rgba(79, 70, 229, 0.3)', // indigo
          'rgba(139, 92, 246, 0.3)', // purple
          'rgba(6, 182, 212, 0.3)', // cyan
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // 創建粒子
    const particles: Particle[] = [];
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // 動畫循環
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 繪製連接線
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79, 70, 229, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // 更新和繪製粒子
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-40 pb-32 px-4 bg-white">
      {/* 動態粒子背景 Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* 動態漸變背景 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-50 rounded-full blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 浮動光點 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto text-center space-y-12 z-10">
        <div className="space-y-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100 text-[10px] font-black uppercase tracking-[0.3em] shadow-sm animate-slide-down">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            未來已來 • AIJOB
          </span>
          <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter text-slate-900 animate-slide-up">
            打造您的 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 animate-gradient bg-[length:200%_auto]">
              專屬 AI 智能體
            </span>
          </h1>
          <p className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            我們提供頂尖的客製化 AI 系統開發服務，<br />
            並透過實戰課程手把手教您掌握這項未來核心技能。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://lin.ee/ZTgJbYG"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-base hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 active:scale-95 text-center min-h-[52px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 relative overflow-hidden group"
          >
            <span className="relative z-10">客製化 AI 諮詢</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
          <Link 
            href="/courses" 
            className="px-12 py-5 bg-white text-slate-600 rounded-2xl font-black text-center text-base hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-indigo-300 active:scale-95 min-h-[52px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:shadow-lg"
          >
            探索實戰課程
          </Link>
        </div>

        <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto border-t border-slate-100 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="space-y-1 group hover:scale-105 transition-transform duration-300">
            <div className="text-slate-900 font-black text-3xl tracking-tighter group-hover:text-indigo-600 transition-colors">AI AGENT</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">智能體客製開發</div>
          </div>
          <div className="space-y-1 group hover:scale-105 transition-transform duration-300">
            <div className="text-slate-900 font-black text-3xl tracking-tighter group-hover:text-purple-600 transition-colors">MINI APPS</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">微型應用生態</div>
          </div>
          <div className="space-y-1 group hover:scale-105 transition-transform duration-300">
            <div className="text-slate-900 font-black text-3xl tracking-tighter group-hover:text-cyan-600 transition-colors">COURSES</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">實戰教學課程</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
