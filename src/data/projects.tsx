import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'shop-savy',
    title: 'Shop Savy',
    description: 'A MERN stack e-commerce platform that aggregates products from 10+ Pakistani brands with AI-powered fashion recommendations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'LLM', 'Machine Learning'],
    duration: 'Sep 2024 – Apr 2025',
    github: 'https://github.com/zainabfatimaaa/P14-AI_Based_Shopping_Assistant',
    live: 'https://sprojp14.vercel.app/',
    image: '/api/placeholder/600/400',
    highlights: [
      'Real-time fashion recommendations via behavioral data analysis',
      'LLM-powered chatbot for image-based recommendations in under 5 seconds',
      'Integrated 10+ Pakistani fashion brands'
    ]
  },
  {
    id: 'rag-chatbot',
    title: 'RAG-Based Researcher Chatbot',
    description: 'Academic research chatbot using RAG architecture with LangChain, Pinecone, and Mixtral-8x7B for contextual responses.',
    technologies: ['LangChain', 'Pinecone', 'Mixtral-8x7B', 'Python', 'NLP'],
    duration: 'Sep 2024 – Dec 2024',
    github: 'https://github.com/zainabfatimaaa/RAG',
    image: '/api/placeholder/600/400',
    highlights: [
      '~95% accuracy in contextual academic responses',
      'Multi-turn dialogue handling',
      'Extensive prompt engineering optimization'
    ]
  },
  {
    id: 'intellinotes',
    title: 'IntelliNotes',
    description: 'AI-powered Android note-taking app with intelligent features like summarization, paraphrasing, and title generation.',
    technologies: ['Flutter', 'Firebase', 'GPT-3.5', 'Dart', 'Android'],
    duration: 'Jan 2024 – May 2024',
    github: 'https://github.com/tanzeela-aijaz/SE-Project-Group-17',
    image: '/api/placeholder/600/400',
    highlights: [
      '~90% relevance in AI-powered summarization',
      '~60% faster load times through optimization',
      'Advanced features: note locking, pinning, AI assistance'
    ]
  },
  {
    id: 'restaurant-system',
    title: 'Restaurant Management System',
    description: 'Cloud-native restaurant management app with real-time order tracking and serverless architecture.',
    technologies: ['AWS Lambda', 'Cognito', 'CloudFront', 'DynamoDB', 'React'],
    duration: 'Jan 2025 – May 2025',
    github: 'https://github.com/zainabfatimaaa/clouddev_project',
    image: '/api/placeholder/600/400',
    highlights: [
      'Handles 500+ concurrent users with sub-200ms latency',
      'Secure role-based access via AWS Cognito',
      'High availability through multi-AZ deployment'
    ]
  },
  {
    id: 'trading-app',
    title: 'Trading Web Application',
    description: 'Real-time trading platform with live market updates and optimized backend performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
    duration: 'Mar 2024 – May 2024',
    github: 'https://github.com/CS300-Advanced-Programming/mern-pa3-zainabfatimaaa',
    image: '/api/placeholder/600/400',
    highlights: [
      'Real-time asset listing and execution',
      'Socket programming for live updates',
      'Optimized backend for high-speed trading'
    ]
  }
];
