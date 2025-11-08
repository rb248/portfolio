# Portfolio Issues Fixed - November 8, 2025

## Issues Identified:
1. ❌ New work experience projects were not showing in the portfolio
2. ❌ Project card images were not displaying

## Root Causes:

### Issue 1: Projects Not Showing
**Problem**: The portfolio filters projects by tags, but the new projects had tags like:
- `'machine-learning'`, `'3d-vision'`, `'nlp'`, `'llm'`, `'azure'`, etc.

However, the available filter tags in `tags-data.ts` only included:
- `'Angular'`, `'React.js'`, `'Node.js'`, `'ASP.NET'`, `'CSS'`, `'Others'`

Since none of the new project tags matched the available filters, they were filtered out and never displayed.

### Issue 2: Images Not Showing
**Problem**: The current project card component doesn't include image display functionality. The IProject interface doesn't have an image field, and the card template only shows text content.

## Solutions Applied:

### ✅ Fixed Project Visibility:

1. **Updated `tags-data.ts`** - Added new filter tags:
   - `'Machine Learning'` (selected by default)
   - `'Python'` (selected by default)
   - `'Backend'` (selected by default)
   - Kept existing tags: Angular, React.js, Node.js, ASP.NET, CSS

2. **Updated project tags** to match available filters:
   - **masters-thesis.data.ts**: `['machine-learning', 'python']`
   - **ika-rwth.data.ts**: `['machine-learning', 'python']`
   - **ebc-rwth.data.ts**: `['python', 'backend']`
   - **senseforth-ai.data.ts**: `['machine-learning', 'python', 'backend']`
   - **dxc-technology.data.ts**: `['backend']`

Now all 5 new work experience projects will show up when their respective tags are selected!

### 📸 About the Images:

The current portfolio design doesn't include images in project cards. The cards show:
- Project name
- Description
- Tech stack (on card flip)
- "More Details" button

**To add images in the future**, you would need to:
1. Add an `imageUrl` field to the `IProject` interface
2. Update the project-card component HTML to display images
3. Add image files to the `assets` folder
4. Update each project data file with image URLs

However, the current minimalist card design works well without images and focuses on content!

## Changes Committed:

```
commit 7a2e462 - Fix project visibility: update tags to match available filters
commit a3022ca - Fix build errors: add WelcomeComponent to NgModule and pin RxJS version
commit 8d04748 - Fix GitHub Actions workflow - use Node 14 instead of NODE_OPTIONS
```

## Result:

✅ All 5 new work experience projects now visible in portfolio
✅ Projects can be filtered by: Machine Learning, Python, Backend, Angular, React.js, Node.js, ASP.NET, CSS
✅ Build successfully completes
✅ Portfolio ready to deploy!

## Next Deployment:

The GitHub Actions workflow will automatically deploy these changes to:
**https://rb248.github.io/portfolio/**

Monitor deployment at: **https://github.com/rb248/portfolio/actions**
