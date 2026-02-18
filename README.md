# Venkatesh R - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a dark theme with soft purple/lavender accents and smooth animations throughout.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-19.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7.3-646cff)

## ✨ Features

- **Modern Dark Theme** - Elegant dark design with purple/lavender accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Powered by Framer Motion
- **Easy Content Management** - Update projects, skills, and blog posts via JSON files
- **No Images Required** - Text and icon-based design
- **GitHub Pages Ready** - One-command deployment
- **Contact Form** - Functional contact form (backend integration required)
- **Blog Section** - Showcase your articles and tutorials
- **Social Links** - Connect to GitHub, LinkedIn, and Instagram

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/barelogic/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills with progress bars
│   │   ├── Projects.jsx    # Projects grid
│   │   ├── ProjectCard.jsx # Reusable project card
│   │   ├── BlogPosts.jsx   # Blog posts grid
│   │   ├── BlogCard.jsx    # Reusable blog card
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer section
│   ├── data/               # ⭐ EDIT THESE FILES
│   │   ├── projects.json   # Your projects
│   │   ├── skills.json     # Your skills
│   │   └── blogPosts.json  # Your blog posts
│   ├── App.jsx             # Main app component
│   ├── index.css           # Tailwind styles
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── package.json
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── README.md
```

## 🎨 Customization

### Adding New Projects

**Step 1:** Open `src/data/projects.json`

**Step 2:** Add your project using this template:

```json
{
  "id": 5,
  "title": "Your Project Name",
  "description": "Detailed description of your project. Explain what it does, the problem it solves, and key features.",
  "technologies": ["React", "Django", "PostgreSQL", "Docker"],
  "githubUrl": "https://github.com/barelogic/your-project",
  "liveUrl": "https://your-project-demo.com",
  "featured": true
}
```

**Step 3:** Save the file. The project will automatically appear on your portfolio!

### Updating Skills

**Step 1:** Open `src/data/skills.json`

**Step 2:** Add or modify skills in any category:

```json
{
  "frontend": [
    { "name": "Your Skill", "level": 85 }
  ],
  "backend": [
    { "name": "Your Skill", "level": 90 }
  ],
  "database": [
    { "name": "Your Skill", "level": 80 }
  ],
  "tools": [
    { "name": "Your Skill", "level": 75 }
  ]
}
```

**Note:** Level is a number from 0-100 representing your proficiency.

### Adding Blog Posts

**Step 1:** Open `src/data/blogPosts.json`

**Step 2:** Add your blog post:

```json
{
  "id": 4,
  "title": "Your Blog Post Title",
  "excerpt": "A brief summary of your blog post that entices readers to click and read more.",
  "date": "2026-02-18",
  "readTime": "7 min read",
  "url": "https://yourblog.com/your-article",
  "tags": ["React", "Tutorial", "Frontend"]
}
```

### Updating Social Links

Open the following files and replace the URLs:

**About Section:** `src/components/About.jsx` (lines with LinkedIn and Instagram)
**Contact Section:** `src/components/Contact.jsx`
**Footer:** `src/components/Footer.jsx`

```jsx
// Replace these URLs with your own:
href="https://linkedin.com/in/yourprofile"
href="https://instagram.com/yourprofile"
```

### Changing Colors

**Step 1:** Open `tailwind.config.js`

**Step 2:** Modify the primary color values:

```js
colors: {
  primary: {
    300: '#d8b4fe',  // Lighter lavender
    400: '#c4b5fd',  // Lavender
    500: '#a78bfa',  // Purple (main accent)
    600: '#8b5cf6',  // Darker purple
  },
}
```

## 🚀 Deployment to GitHub Pages

### One-Time Setup

1. Create a new repository on GitHub named `portfolio`

2. Initialize git in your project (if not already):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/barelogic/portfolio.git
git push -u origin main
```

### Deploy

Run this command to build and deploy:

```bash
npm run deploy
```

Your site will be live at: **https://barelogic.github.io/portfolio**

### GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**

Wait a few minutes and your site will be live!

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run deploy    # Deploy to GitHub Pages
npm run lint      # Run ESLint
```

## 📦 Technologies Used

- **React 19.2** - UI library
- **Vite 7.3** - Build tool
- **Tailwind CSS 4.1** - Styling
- **Framer Motion 12** - Animations
- **React Icons 5** - Icon library
- **gh-pages** - GitHub Pages deployment

## 🎨 Design Features

- **Color Palette:**
  - Primary Background: `#0f172a` (slate-900)
  - Card Background: `#1e293b` (slate-800)
  - Primary Accent: `#a78bfa` (purple-500)
  - Text: `#f1f5f9` (slate-100)

- **Responsive Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

- **Animations:**
  - Fade-in on scroll
  - Smooth hover effects
  - Animated skill progress bars
  - Staggered card animations

## 📝 Contact Form Integration

The contact form is currently set up with client-side validation and a simulated submission. To make it functional:

### Option 1: FormSpree (Easiest)
1. Sign up at [FormSpree](https://formspree.io/)
2. Get your form endpoint
3. Update `src/components/Contact.jsx`:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  });
  // Handle response...
};
```

### Option 2: EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Follow their React integration guide

### Option 3: Build Your Own Backend
Create an API endpoint (Django, Node.js, etc.) to handle form submissions and send emails.

## 🔧 Troubleshooting

### Issue: Tailwind styles not working
**Solution:** Make sure you have `tailwindcss` installed and `postcss.config.js` is present.

### Issue: Deploy fails
**Solution:** Ensure you've committed all changes and the `gh-pages` package is installed.

### Issue: Images not loading after deployment
**Solution:** Use relative paths starting with `/` for all assets in the `public` folder.

### Issue: 404 error on GitHub Pages
**Solution:** Wait 5-10 minutes after deployment. Check GitHub Pages settings are correct.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

**Venkatesh R**
- Email: venkateshr.work@gmail.com
- GitHub: [@barelogic](https://github.com/barelogic)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
