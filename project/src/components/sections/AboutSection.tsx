import React from 'react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Brain, Database, Cpu, Zap } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 mb-6">
            What is Synero Labs?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Synero Labs is a decentralized AI marketplace enabling trustless exchange of models, 
            datasets, and APIs. Built on Solana for speed and transparency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card glow hover className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600/20 to-violet-600/10 mb-5">
              <Brain className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Decentralized AI Models</h3>
            <p className="text-gray-400">
              Buy, sell, and deploy AI models in a trustless environment with verifiable on-chain transactions.
            </p>
          </Card>
          
          <Card glow hover className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600/20 to-blue-600/10 mb-5">
              <Database className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Datasets Marketplace</h3>
            <p className="text-gray-400">
              Access high-quality, verified datasets for training your models with transparent usage rights.
            </p>
          </Card>
          
          <Card glow hover className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600/20 to-purple-600/10 mb-5">
              <Cpu className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">API Deployment</h3>
            <p className="text-gray-400">
              Monetize your AI solutions by deploying them as APIs with secure payment channels.
            </p>
          </Card>
          
          <Card glow hover className="flex flex-col items-center text-center p-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600/20 to-pink-600/10 mb-5">
              <Zap className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Solana-Powered Speed</h3>
            <p className="text-gray-400">
              Leverage Solana's high-speed, low-cost transactions for seamless AI asset exchange.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}