import { IProject } from '../IProject';

export const NewsAppData: IProject = {
  id: 'NEWS-APP-ANDROID-2018',
  name: 'News App for Android 📰',
  description:
    'News app for Android using live API to read news articles from the most popular news websites',
  projectLink: 'https://github.com/cuckooinc/news',
  isFeatured: true,
  features: [
    'Built Android application with live news feed',
    'Integrated REST API for real-time news updates',
    'Implemented clean UI/UX for news reading',
    'Published on GitHub for open-source contribution'
  ],
  tags: ['android', 'mobile'],
  techStuff: [
    'Android',
    'Java',
    'REST API',
    'Mobile Development'
  ],
  additionalData: [
    {
      title: 'Project Type',
      data: ['Personal Project', '2018']
    },
    {
      title: 'Features',
      data: [
        'Live news feed from popular sources',
        'Real-time API integration',
        'Clean and intuitive UI'
      ]
    }
  ]
};
