import { IProject } from '../IProject';

export const SenseforthAIData: IProject = {
  id: 'SENSEFORTH-2020',
  name: 'LLM-based NLP Chatbot Platform 🤖',
  description:
    'Built and deployed production LLM-based NLP models at Senseforth.ai, improving chatbot accuracy and scaling to handle 1K+ concurrent users',
  projectLink: '#',
  isFeatured: true,
  features: [
    'Shipped LLM-based NLP models to production, improving chatbot accuracy by 22%',
    'Reduced manual support load through intelligent automation',
    'Built and scaled REST APIs on Azure with CI/CD pipeline',
    'Implemented comprehensive monitoring and logging',
    'Reduced API latency by 35% for 1K+ concurrent users',
    'Integrated Hugging Face transformers for advanced NLP capabilities'
  ],
  tags: ['machine learning', 'python', 'backend'],
  techStuff: [
    'Python',
    'PyTorch',
    'TensorFlow',
    'FastAPI',
    'Hugging Face Transformers',
    'Azure',
    'Docker',
    'CI/CD',
    'REST APIs'
  ],
  additionalData: [
    {
      title: 'Duration',
      data: ['June 2020 — Feb. 2022', 'Software Engineer at Senseforth.ai, Bangalore']
    },
    {
      title: 'Impact',
      data: [
        '22% improvement in chatbot accuracy',
        '35% reduction in API latency',
        'Successfully scaled to 1K+ concurrent users',
        'Reduced manual support load significantly'
      ]
    }
  ]
};
