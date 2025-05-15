import React, { useRef, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Neural network nodes
    const nodes: {x: number; y: number; vx: number; vy: number; radius: number}[] = [];
    const nodeCount = Math.floor(window.innerWidth / 20); // Responsive node count
    
    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(123, 47, 247, ${node.radius / 3})`;
        ctx.fill();
        
        // Connect nodes within distance
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const dx = node.x - node2.x;
          const dy = node.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = `rgba(123, 47, 247, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 -z-10" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <div className="flex justify-center mb-8">
            <img 
              src="https://raw.githubusercontent.com/yourusername/yourrepo/main/logo.png" 
              alt="Synero Labs Logo" 
              className="w-24 h-24"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 mb-6 leading-tight">
            Fueling Tomorrow's Intelligence — Securely, On-Chain
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            The decentralized marketplace for AI models, datasets, and APIs — powered by Solana.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Explore the Marketplace
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span>Decentralized AI Models</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span>Trustless Exchange</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span>Solana-Powered Speed</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}