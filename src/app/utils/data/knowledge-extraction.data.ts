import { IProject } from '../IProject';

export const KnowledgeExtractionData: IProject = {
  id: 'KNOWLEDGE-EXTRACTION-2024',
  name: 'Knowledge Extraction for Chemical Publications 🧪',
  description:
    'Built ML-powered APIs for extracting and classifying information from chemical publications, integrated into a Knowledge Graph',
  projectLink: '#',
  isFeatured: true,
  features: [
    'Built image extraction and classification APIs using ML models',
    'Integrated APIs into a Knowledge Graph for organized data',
    'Upgraded Streamlit interface with stats, meta-info, and image search features',
    'Addressed schema development and deployment issues',
    'Used FastAPI, Docker, and GitHub Actions for streamlined processes'
  ],
  tags: ['machine learning', 'python', 'backend'],
  techStuff: [
    'FastAPI',
    'Docker',
    'GitHub Actions',
    'CNNs',
    'Streamlit',
    'Knowledge Graphs',
    'Python'
  ],
  additionalData: [
    {
      title: 'Project Type',
      data: ['Lab Course - Master\'s Program', 'RWTH Aachen University', '2024']
    },
    {
      title: 'Key Components',
      data: [
        'APIs Development: Image extraction and classification',
        'Integration: Knowledge Graph implementation',
        'Frontend Enhancement: Streamlit interface upgrade',
        'Challenges: Schema development and deployment'
      ]
    }
  ]
};
