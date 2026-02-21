# 🐛 Blank Page Troubleshooting Guide

## If you're seeing a blank white page, follow these steps:

### Step 1: Check Browser Console

1. Open your browser (Chrome, Firefox, Edge)
2. Press **F12** to open Developer Tools
3. Click on the **Console** tab
4. Look for any **red error messages**

Common errors and solutions:

#### Error: "Failed to resolve module specifier"
**Solution:** Run `npm install` again

#### Error: "Cannot find module './components/...'"
**Solution:** Check that all component files exist in `src/components/`

#### Error: Related to Tailwind CSS
**Solution:** Clear cache and rebuild:
```bash
rm -rf node_modules dist .vite
npm install
npm run build
npm run dev
```

---

### Step 2: Verify Dev Server is Running

```bash
npm run dev
```

You should see:
```
VITE v7.3.1  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

If you see errors, copy them and we'll fix them.

---

### Step 3: Check Network Tab

1. Open Dev Tools (F12)
2. Go to **Network** tab
3. Refresh the page (Ctrl+R or Cmd+R)
4. Look for any **red/failed requests**

**Common issues:**
- 404 errors on CSS or JS files
- CORS errors
- Failed to load modules

---

### Step 4: Test with Simple Component

Let's verify React is working. Create a test:

**Option A: Test in App.jsx**

Temporarily replace `src/App.jsx` with:

```jsx
function App() {
  return (
    <div style={{ padding: '20px', color: 'black' }}>
      <h1>Test - If you see this, React is working!</h1>
      <p>Background should be white, text should be black</p>
    </div>
  );
}

export default App;
```

If you see the text:
- ✅ React is working
- ❌ Problem is in components or Tailwind

If you still see blank:
- ❌ React isn't rendering
- Check console for errors

---

### Step 5: Check Tailwind CSS

The issue might be with Tailwind CSS 4 configuration.

**Quick Fix - Revert to Tailwind v3:**

```bash
npm uninstall tailwindcss @tailwindcss/postcss
npm install -D tailwindcss@3 postcss autoprefixer
```

Then update `postcss.config.js`:
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

And update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add custom styles here */
```

---

### Step 6: Clear Browser Cache

1. Press **Ctrl+Shift+Delete** (Windows) or **Cmd+Shift+Delete** (Mac)
2. Select "Cached images and files"
3. Click "Clear data"
4. Or use **Hard Refresh**: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)

---

### Step 7: Check File Paths

Verify all these files exist:

```bash
ls src/components/
```

Should show:
- Header.jsx
- Hero.jsx
- About.jsx
- Skills.jsx
- Projects.jsx
- ProjectCard.jsx
- BlogPosts.jsx
- BlogCard.jsx
- Contact.jsx
- Footer.jsx

```bash
ls src/data/
```

Should show:
- projects.json
- skills.json
- blogPosts.json

---

### Step 8: Run This Debug Script

Save as `debug.js` and run: `node debug.js`

```javascript
const fs = require('fs');
const path = require('path');

console.log('🔍 Debugging Portfolio Setup...\n');

// Check components
const components = [
  'Header', 'Hero', 'About', 'Skills', 
  'Projects', 'ProjectCard', 'BlogPosts', 'BlogCard', 
  'Contact', 'Footer'
];

console.log('✅ Checking Components:');
components.forEach(comp => {
  const exists = fs.existsSync(`src/components/${comp}.jsx`);
  console.log(`  ${exists ? '✓' : '✗'} ${comp}.jsx`);
});

// Check data files
console.log('\n✅ Checking Data Files:');
const dataFiles = ['projects.json', 'skills.json', 'blogPosts.json'];
dataFiles.forEach(file => {
  const exists = fs.existsSync(`src/data/${file}`);
  console.log(`  ${exists ? '✓' : '✗'} ${file}`);
});

// Check config files
console.log('\n✅ Checking Config Files:');
const configs = [
  'vite.config.js',
  'tailwind.config.js',
  'postcss.config.js',
  'package.json'
];
configs.forEach(file => {
  const exists = fs.existsSync(file);
  console.log(`  ${exists ? '✓' : '✗'} ${file}`);
});

console.log('\n✅ Check complete!');
```

---

### Step 9: Common Fixes

**Fix 1: Reinstall Dependencies**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Fix 2: Check Port**
Maybe port 5173 is in use:
```bash
npm run dev -- --port 3000
```
Then visit: http://localhost:3000

**Fix 3: Disable Browser Extensions**
Some extensions block scripts. Try:
- Incognito/Private mode
- Disable ad blockers
- Disable React DevTools temporarily

---

### Step 10: Last Resort - Fresh Start

If nothing works, let's start fresh:

```bash
# Backup your data files
cp src/data/projects.json ~/projects-backup.json
cp src/data/skills.json ~/skills-backup.json
cp src/data/blogPosts.json ~/blog-backup.json

# Clean everything
rm -rf node_modules dist .vite package-lock.json

# Reinstall
npm install

# Rebuild
npm run build

# Start dev server
npm run dev
```

---

## 📧 What to Send Me If Still Broken

If it's still blank, send me:

1. **Console errors** (F12 → Console tab)
2. **Network errors** (F12 → Network tab)
3. **Output of:** `npm run dev`
4. **Node version:** `node --version`
5. **NPM version:** `npm --version`
6. **OS:** Windows/Mac/Linux

---

## ✅ Expected Behavior

When working correctly, you should see:

1. **Dark background** (not white)
2. **Purple/lavender accents**
3. **Your name** in the hero section
4. **Navigation bar** at top
5. **Smooth animations** when scrolling

---

## 🎯 Quick Test Commands

Run these one by one:

```bash
# Test 1: Node/NPM working?
node --version && npm --version

# Test 2: Dependencies installed?
npm list react react-dom vite

# Test 3: Build succeeds?
npm run build

# Test 4: Dev server starts?
npm run dev

# Test 5: Can access locally?
curl http://localhost:5173
```

---

**If you're still seeing a blank page after all these steps, share the console errors and I'll help debug further!**
