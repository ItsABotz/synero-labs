import React from 'react';
import { Container } from '../ui/Container';
import { Brain, Github, Twitter, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-12 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500" />
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500">
                Synero Labs
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Fueling Tomorrow's Intelligence — Securely, On-Chain.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Synero Labs. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}