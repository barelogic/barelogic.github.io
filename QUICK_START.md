# 🚀 Quick Start Guide

## Get Your Portfolio Running in 3 Steps!

### Step 1: Start Development Server
```bash
npm run dev
```
Then open http://localhost:5173 in your browser

### Step 2: Customize Your Content

**Add Your Projects:**
```bash
# Open this file in your editor:
src/data/projects.json

# Add your project like this:
{
  "id": 5,
  "title": "Your Project Name",
  "description": "What it does",
  "technologies": ["React", "Django", "PostgreSQL"],
  "githubUrl": "https://github.com/barelogic/your-repo",
  "liveUrl": "https://your-demo.com",
  "featured": true
}
```

**Update Your Skills:**
```bash
# Open this file:
src/data/skills.json

# Modify skill levels (0-100):
{ "name": "React.js", "level": 90 }
```

**Add Blog Posts:**
```bash
# Open this file:
src/data/blogPosts.json

# Add your blog post:
{
  "id": 4,
  "title": "Your Blog Title",
  "excerpt": "Summary...",
  "date": "2026-02-20",
  "readTime": "5 min read",
  "url": "https://yourblog.com/post",
  "tags": ["React", "Tutorial"]
}
```

### Step 3: Deploy to GitHub Pages

**First Time Setup:**
```bash
# 1. Create a repo on GitHub named "portfolio"

# 2. Initialize git (if not already done):
git init
git add .
git commit -m "Initial commit: Portfolio site"
git branch -M main
git remote add origin https://github.com/barelogic/portfolio.git
git push -u origin main
```

**Deploy:**
```bash
npm run deploy
```

Your site will be live at: **https://barelogic.github.io/portfolio**

---

## 🔗 Update Your Social Links

Replace these placeholder URLs with your real profiles:

**Files to update:**
- `src/components/About.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

**Find and replace:**
```jsx
// LinkedIn
href="https://linkedin.com/in/yourprofile"

// Instagram  
href="https://instagram.com/yourprofile"
```

---

## 🎨 Change Colors (Optional)

Open `src/index.css` and find the `@theme` section:

```css
@theme {
  --color-primary-500: #a78bfa;  /* Change this purple color */
  --color-dark-900: #0f172a;     /* Change background color */
}
```

---

## 📝 Important Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run deploy   # Deploy to GitHub Pages
```

---

## ✅ Pre-Deployment Checklist

- [ ] Updated projects.json with your projects
- [ ] Updated skills.json with your skills
- [ ] Updated social media links (LinkedIn, Instagram)
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Committed all changes to git
- [ ] Created GitHub repository named "portfolio"

---

## 🆘 Troubleshooting

**Issue: Site not loading locally**
```bash
# Solution: Make sure dependencies are installed
npm install
npm run dev
```

**Issue: Build fails**
```bash
# Solution: Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

**Issue: Deploy fails**
```bash
# Solution: Make sure gh-pages is installed
npm install gh-pages --save-dev
npm run deploy
```

**Issue: 404 on GitHub Pages**
- Wait 5-10 minutes after deployment
- Check GitHub repo Settings > Pages
- Ensure "gh-pages" branch is selected as source

---

## 📚 Learn More

- Full documentation: See `README.md`
- Build summary: See `BUILD_SUMMARY.md`
- React docs: https://react.dev
- Tailwind docs: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion/

---

**That's it! Your portfolio is ready to go live! 🎉**

For detailed instructions, see the comprehensive `README.md` file.
