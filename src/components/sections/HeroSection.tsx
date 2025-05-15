import React, { useRef, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import Logo from '../../assets/logo.png';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ---------- animated background (unchanged) ------------------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] =
      [];
    const count = Math.floor(window.innerWidth / 18);
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 2,
      });
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#8b5cf6';
      ctx.strokeStyle = '#7dd3fc';

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.globalAlpha = 1 - dist / 120;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(loop);
    };
    loop();
    return () => window.removeEventListener('resize', resize);
  }, []);
  /* ------------------------------------------------------------------- */

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 -z-10" />

      <Container className="relative z-10 text-center max-w-4xl pt-20">
        {/* ---------- logo ------------------------------------------------ */}
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Synero Labs logo" className="w-24 h-24" />
        </div>

        {/* ---------- headline & copy ------------------------------------ */}
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 mb-6 leading-tight">
          Fueling Tomorrow’s Intelligence — Securely, On-Chain
        </h1>
        <p className="text-gray-300 text-lg mb-10">
          Discover, trade, and deploy AI models, datasets, and APIs in a
          trust-minimized marketplace powered by Solana’s lightning-fast
          infrastructure.
        </p>

        {/* ---------- CTA buttons ---------------------------------------- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Explore the Marketplace</Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = '/about.html')}
          >
            Learn More
          </Button>
        </div>

        {/* ---------- quick feature bullets ------------------------------ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-sm">
          <FeatureDot label="Decentralized AI Models" color="violet" />
          <FeatureDot label="Trustless Exchange" color="blue" />
          <FeatureDot label="Solana-Powered Speed" color="pink" />
        </div>
      </Container>
    </section>
  );
}

/* helper for bullets */
function FeatureDot({
  label,
  color,
}: {
  label: string;
  color: 'violet' | 'blue' | 'pink';
}) {
  const colors: Record<string, string> = {
    violet: 'bg-violet-500',
    blue: 'bg-blue-500',
    pink: 'bg-pink-500',
  };
  return (
    <div className="flex items-center gap-2 justify-center">
      <div className={\`w-3 h-3 rounded-full \${colors[color]}\`} />
      <span>{label}</span>
    </div>
  );
}
