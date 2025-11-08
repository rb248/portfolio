import { IProject } from '../IProject';

export const EBCRWTHData: IProject = {
  id: 'EBC-RWTH-2023',
  name: 'Energy Building Time-Series Analytics Platform 🏢',
  description:
    'Built comprehensive time-series data pipelines and monitoring services for energy-efficient buildings at RWTH Aachen',
  projectLink: '#',
  isFeatured: true,
  features: [
    'Built time-series data pipelines using InfluxDB for real-time energy monitoring',
    'Developed monitoring services improving data visibility and system reliability',
    'Created energy analytics dashboards using Grafana and Power BI',
    'Enabled data-driven decisions used by multiple departments',
    'Deployed services using Docker and FastAPI'
  ],
  tags: ['python', 'backend'],
  techStuff: [
    'FastAPI',
    'InfluxDB',
    'Grafana',
    'Power BI',
    'Python',
    'Docker',
    'Time-Series Analysis'
  ],
  additionalData: [
    {
      title: 'Duration',
      data: ['Feb. 2023 — Jan. 2025', 'Research Assistant at Institute for Energy-Efficient Buildings']
    },
    {
      title: 'Impact',
      data: [
        'Improved data visibility across multiple departments',
        'Enhanced system reliability through monitoring',
        'Enabled better decision-making through analytics dashboards'
      ]
    }
  ]
};
