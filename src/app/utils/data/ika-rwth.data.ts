import { IProject } from '../IProject';

export const IKARWTHData: IProject = {
  id: 'IKA-RWTH-2025',
  name: 'LiDAR 3D Object Detection Enhancement 🚗',
  description:
    'Research project at IKA RWTH Aachen focused on improving 3D object detection for autonomous vehicles using LiDAR data',
  projectLink: '#',
  isFeatured: true,
  features: [
    'Improved LiDAR 3D object detection accuracy by 10% through targeted data augmentation and fine-tuning',
    'Streamlined dataset quality via iterative labeling process',
    'Deployed Nuclio inference service for rapid model feedback loops',
    'Developed automated pipelines for model training and evaluation'
  ],
  tags: ['machine-learning', 'python'],
  techStuff: [
    'Python',
    'PyTorch',
    'Docker',
    'Nuclio',
    'CVAT',
    '3D Object Detection',
    'LiDAR Processing'
  ],
  additionalData: [
    {
      title: 'Duration',
      data: ['April 2025 — Present', 'Research Assistant at IKA RWTH Aachen']
    },
    {
      title: 'Impact',
      data: [
        '10% improvement in detection accuracy',
        'Faster iteration cycles through automated inference service',
        'Improved data quality through systematic labeling approach'
      ]
    }
  ]
};
