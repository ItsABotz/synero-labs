import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';
import { Button } from '../ui/Button';
import { Brain, Database, Cpu, Filter } from 'lucide-react';

// Mock marketplace items for the demo
const marketplaceItems = [
  {
    id: 1,
    title: 'Neural Text Generator Pro',
    description: 'Advanced NLP model for creative writing and content generation.',
    price: '1.25 SOL',
    type: 'model',
    creator: '0x7f3b...2a5d',
  },
  {
    id: 2,
    title: 'Financial News Dataset',
    description: 'Comprehensive dataset of financial news articles from 2020-2025.',
    price: '0.75 SOL',
    type: 'dataset',
    creator: '0x3e1c...9b7f',
  },
  {
    id: 3,
    title: 'Image Recognition API',
    description: 'High-performance API for real-time object detection and classification.',
    price: '2.5 SOL',
    type: 'api',
    creator: '0x8d4a...1c3e',
  },
  {
    id: 4,
    title: 'Sentiment Analysis Model',
    description: 'Accurate sentiment detection for social media and customer feedback.',
    price: '1.5 SOL',
    type: 'model',
    creator: '0x2f9e...6d4b',
  },
  {
    id: 5,
    title: 'Medical Imaging Dataset',
    description: 'Annotated collection of medical scans for healthcare AI training.',
    price: '3.2 SOL',
    type: 'dataset',
    creator: '0x4a7d...8e2c',
  },
  {
    id: 6,
    title: 'Speech-to-Text Conversion API',
    description: 'Multilingual speech recognition with high accuracy rates.',
    price: '1.8 SOL',
    type: 'api',
    creator: '0x1b5f...7a9d',
  },
];

export function MarketplaceSection() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredItems = filter 
    ? marketplaceItems.filter(item => item.type === filter)
    : marketplaceItems;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'model':
        return <Brain className="w-5 h-5 text-violet-400" />;
      case 'dataset':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'api':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-black/80" />
      
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-500 mb-6">
            AI Marketplace
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover and trade cutting-edge AI models, datasets, and APIs with transparent pricing and verifiable quality.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            variant={filter === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter(null)}
          >
            All Items
          </Button>
          <Button
            variant={filter === 'model' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter('model')}
          >
            <Brain className="w-4 h-4 mr-2" />
            Models
          </Button>
          <Button
            variant={filter === 'dataset' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter('dataset')}
          >
            <Database className="w-4 h-4 mr-2" />
            Datasets
          </Button>
          <Button
            variant={filter === 'api' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter('api')}
          >
            <Cpu className="w-4 h-4 mr-2" />
            APIs
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Card key={item.id} glow hover className="flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(item.type)}
                    <span className="text-xs uppercase tracking-wider text-gray-400">
                      {item.type}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-gray-500">
                    {item.creator}
                  </span>
                </div>
                <CardTitle className="mt-3">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Placeholder for additional content */}
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">
                  {item.price}
                </span>
                <Button variant="primary" size="sm">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Items
          </Button>
        </div>
      </Container>
    </section>
  );
}