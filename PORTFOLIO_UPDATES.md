# Portfolio Update Summary

## Overview
Updated portfolio to reflect current professional experience as Data Scientist | AI Engineer | MLOps with 5+ years of experience.

## Changes Made

### 1. Landing Page (`src/app/landing-page/landing-page.component.html`)
- **Updated bio**: Changed from "Student | Developer | Contributor" to "Data Scientist | AI Engineer | MLOps"

### 2. About Section (`src/app/about/about.component.html`)
- **Updated profile description** to highlight:
  - 5+ years of experience in ML systems
  - Expertise in NLP, 3D vision, and time-series
  - Strong MLOps and production AI deployment skills
  - Master's thesis work at RWTH Aachen

### 3. Skills (`src/app/utils/data/skills.data.ts`)
Updated skill categories to reflect current expertise:
- **Machine Learning**: ML Algorithms, NLP (Transformers), Time-Series, 3D Vision, Computer Vision, Deep Learning
- **Tech & Frameworks**: Python, SQL, Spark, PyTorch, TensorFlow, Hugging Face, scikit-learn
- **MLOps & Cloud**: FastAPI, Docker, CI/CD, REST APIs, Kubernetes, Nuclio, AWS, Azure
- **Data Engineering**: InfluxDB, Grafana, Power BI, Data Pipelines, ETL
- **Programming Languages**: Python, SQL, Java, JavaScript, TypeScript, C, C++
- **Tools & Others**: Git & GitHub, CVAT, Spring Boot, Angular, Node.js

### 4. Contact Information (`src/app/contact/contact.component.ts`)
- **Updated email**: rishabh.bhatia@rwth-aachen.de
- **Added address**: Buechel 22, Aachen, Germany
- **Added phone**: +4917645873560
- **Updated GitHub**: https://github.com/rb248

### 5. New Work Experience Projects

Created 5 new project data files showcasing professional experience:

#### a. Master's Thesis (`src/app/utils/data/masters-thesis.data.ts`)
- **Project**: Robust & Uncertainty-Aware 3D Object Detection for V2X
- **Achievement**: 30% accuracy improvement in challenging conditions
- **Institution**: RWTH Aachen University (2022-2025)

#### b. IKA RWTH Research (`src/app/utils/data/ika-rwth.data.ts`)
- **Role**: Research Assistant (April 2025 - Present)
- **Achievement**: 10% improvement in LiDAR 3D object detection
- **Technologies**: Python, PyTorch, Docker, Nuclio, CVAT

#### c. EBC RWTH Research (`src/app/utils/data/ebc-rwth.data.ts`)
- **Role**: Research Assistant (Feb 2023 - Jan 2025)
- **Focus**: Time-series data pipelines and energy analytics
- **Technologies**: FastAPI, InfluxDB, Grafana, Power BI

#### d. Senseforth.ai (`src/app/utils/data/senseforth-ai.data.ts`)
- **Role**: Software Engineer (June 2020 - Feb 2022)
- **Achievements**: 
  - 22% improvement in chatbot accuracy
  - 35% reduction in API latency
  - Scaled to 1K+ concurrent users
- **Technologies**: Python, PyTorch, TensorFlow, FastAPI, Hugging Face, Azure

#### e. DXC Technology (`src/app/utils/data/dxc-technology.data.ts`)
- **Role**: Backend Developer (July 2019 - March 2020)
- **Achievement**: 66% reduction in database latency
- **Technologies**: Java, Spring Boot, SQL

### 6. Project Registry (`src/app/utils/project-data.ts`)
- Added imports for all 5 new projects
- Added projects to the main project list (positioned at the top as featured work)

### 7. Meta Tags (`src/index.html`)
Updated SEO and social media meta tags:
- Updated title, description, and keywords
- Updated Open Graph tags for better social sharing
- Updated Twitter card information
- Updated canonical URLs
- Updated structured data (JSON-LD) with correct social profiles

## Languages Reflected
- **English**: C1
- **German**: B2
- **Hindi**: Mother tongue

## Extra-curricular Activities (for future reference)
- Member of Core team, Sky Campus, Aachen
- Member of Basketball Team, SRM University (2018)
- Project Mentor, Techlabs, Aachen

## Next Steps to Deploy

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Test locally**:
   ```bash
   npm start
   ```

4. **Deploy to GitHub Pages** (or your hosting platform):
   ```bash
   npm run deploy
   ```

## Notes
- All new projects are marked as `isFeatured: true` to display them prominently
- Projects are ordered chronologically (most recent first)
- Contact information is updated but additional styling may be needed in the template to display address/phone
- Consider updating profile picture if needed
- Consider updating favicon and logo images to match your brand

## Files Modified
1. `/src/app/landing-page/landing-page.component.html`
2. `/src/app/about/about.component.html`
3. `/src/app/utils/data/skills.data.ts`
4. `/src/app/contact/contact.component.ts`
5. `/src/app/utils/project-data.ts`
6. `/src/index.html`

## Files Created
1. `/src/app/utils/data/masters-thesis.data.ts`
2. `/src/app/utils/data/ika-rwth.data.ts`
3. `/src/app/utils/data/ebc-rwth.data.ts`
4. `/src/app/utils/data/senseforth-ai.data.ts`
5. `/src/app/utils/data/dxc-technology.data.ts`
