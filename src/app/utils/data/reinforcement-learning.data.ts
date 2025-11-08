import { IProject } from '../IProject';

export const ReinforcementLearningData: IProject = {
  id: 'RL-ATARI-GAMES-2023',
  name: 'Learning Generalized Policies from Pixels and Relational Representation 🎮',
  description:
    'Developed and compared CNN and GNN models for reinforcement learning in modified Atari games with symbolic representations',
  projectLink: '#',
  isFeatured: true,
  features: [
    'Modified Atari games (Pong, Freeway, Pac-Man, Breakout) with symbolic representations',
    'Developed CNN for pixel inputs and GNN for graph-based data',
    'Compared CNN vs. GNN on generalization using metrics like rewards and success rates',
    'Assessed models across different game settings with varied parameters'
  ],
  tags: ['machine learning', 'python'],
  techStuff: [
    'Python',
    'CNNs',
    'GNNs',
    'Reinforcement Learning',
    'PyTorch',
    'Atari Games',
    'Graph Neural Networks'
  ],
  additionalData: [
    {
      title: 'Project Type',
      data: ['Personal Project', '2023']
    },
    {
      title: 'Research Focus',
      data: [
        'Custom Game Development: Modified classic Atari games',
        'Model Implementation: CNN for pixels, GNN for graphs',
        'Comparative Analysis: Generalization performance',
        'Performance Evaluation: Multiple game environments'
      ]
    }
  ]
};
