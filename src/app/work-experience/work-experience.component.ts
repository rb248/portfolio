import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class WorkExperienceComponent implements OnInit {
  experiences: WorkExperience[] = [
    {
      id: 'ika-rwth',
      title: 'Research Assistant',
      company: 'IKA RWTH Aachen',
      location: 'Aachen, Germany',
      period: 'April 2025 — Present',
      description: 'Working on advanced 3D object detection systems for autonomous vehicles using LiDAR technology.',
      achievements: [
        'Improved LiDAR 3D object detection accuracy by 10% through targeted data augmentation and fine-tuning',
        'Streamlined dataset quality via iterative labeling process',
        'Deployed Nuclio inference service for rapid model feedback loops',
        'Developed automated pipelines for model training and evaluation'
      ],
      technologies: ['Python', 'PyTorch', 'Docker', 'Nuclio', 'CVAT', '3D Object Detection', 'LiDAR Processing']
    },
    {
      id: 'ebc-rwth',
      title: 'Research Assistant',
      company: 'Institute for Energy-Efficient Buildings (EBC), RWTH Aachen',
      location: 'Aachen, Germany',
      period: 'Feb. 2023 — Jan. 2025',
      description: 'Built comprehensive time-series data pipelines and monitoring services for energy-efficient buildings.',
      achievements: [
        'Built time-series data pipelines using InfluxDB for real-time energy monitoring',
        'Developed monitoring services improving data visibility and system reliability',
        'Created energy analytics dashboards using Grafana and Power BI',
        'Enabled data-driven decisions used by multiple departments',
        'Deployed services using Docker and FastAPI'
      ],
      technologies: ['FastAPI', 'InfluxDB', 'Grafana', 'Power BI', 'Python', 'Docker', 'Time-Series Analysis']
    },
    {
      id: 'senseforth-ai',
      title: 'Software Engineer',
      company: 'Senseforth.ai',
      location: 'Bangalore, India',
      period: 'June 2020 — Feb. 2022',
      description: 'Built and deployed production LLM-based NLP models, improving chatbot accuracy and scaling infrastructure.',
      achievements: [
        'Shipped LLM-based NLP models to production, improving chatbot accuracy by 22%',
        'Reduced manual support load through intelligent automation',
        'Built and scaled REST APIs on Azure with CI/CD pipeline',
        'Implemented comprehensive monitoring and logging',
        'Reduced API latency by 35% for 1K+ concurrent users',
        'Integrated Hugging Face transformers for advanced NLP capabilities'
      ],
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'FastAPI', 'Hugging Face Transformers', 'Azure', 'Docker', 'CI/CD', 'REST APIs']
    },
    {
      id: 'dxc-technology',
      title: 'Backend Developer',
      company: 'DXC Technology',
      location: 'Bangalore, India',
      period: 'July 2019 — March 2020',
      description: 'Developed automated order-processing workflows and optimized backend services.',
      achievements: [
        'Automated order-processing workflows improving operational efficiency',
        'Built backend services using Java and Spring Boot',
        'Refactored SQL stored procedures reducing DB latency by 66%',
        'Improved response times for client systems',
        'Enhanced system reliability and maintainability'
      ],
      technologies: ['Java', 'Spring Boot', 'SQL', 'Backend Development', 'Database Optimization']
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
