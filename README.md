# 🎨 Dynamic React Portfolio

A modern, fully responsive portfolio website built with React, Vite, and Tailwind CSS. Change your entire site's theme by editing just ONE color in the configuration file, and update all content through a single JSON file.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio! 🎉

### 3. Build for Production
```bash
npm run build
```

---

## 🎨 Customization

### Change the Primary Color (#093A3E)

**The primary color `#093A3E` (teal) appears in:**
- All buttons and CTAs
- Navigation hover effects
- Section highlights
- Skill card gradients
- Form elements
- Link colors
- And more!

**To change it:**

1. Open `src/config/theme.js`
2. Line 6: Change `primary: '#093A3E'` to your color
3. Save - the entire site updates automatically!

**Example:**
```javascript
export const theme = {
  colors: {
    primary: '#FF6B6B',  // Now it's red!
    // ... rest stays the same
  }
};
```

### Update Content

**All content is in ONE file:** `src/data/portfolio.json`

Update your:
- ✅ Name, title, email, bio
- ✅ Projects (add/remove/edit)
- ✅ Skills (by category)
- ✅ Testimonials
- ✅ Social media links
- ✅ Contact information

**Example - Update your name:**
```json
{
  "personal": {
    "name": "Your Name Here",
    "title": "Your Title Here",
    "email": "your.email@example.com"
  }
}
```

Save the file and see changes instantly in your browser!

---

## 📁 Project Structure

```
react-portfolio/
├── src/
│   ├── components/           # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Testimonials.jsx # Testimonials
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   │
│   ├── config/
│   │   └── theme.js         # ⭐ CHANGE COLORS HERE
│   │
│   ├── data/
│   │   └── portfolio.json   # ⭐ CHANGE CONTENT HERE
│   │
│   ├── App.jsx              # Main app
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
│
├── public/                   # Static assets (put images here)
├── tailwind.config.js        # Tailwind configuration
├── package.json
└── README.md
```

---

## 🌟 Features

- ✅ **One-Line Color Change** - Change primary color `#093A3E` once, applies everywhere
- ✅ **JSON-Based Content** - All content in one easy-to-edit file
- ✅ **Fully Responsive** - Mobile-first design, works on all devices
- ✅ **Fast Development** - Vite provides instant hot reload
- ✅ **Modern Design** - Smooth animations, gradient backgrounds, molten effects
- ✅ **Easy Deployment** - Works with Vercel, Netlify, GitHub Pages
- ✅ **Production Ready** - Optimized build, SEO-friendly

---

## 📝 Editing Content Examples

### Add a New Project

Open `src/data/portfolio.json` and add to `projects.items`:

```json
{
  "id": 7,
  "title": "My New Project",
  "description": "What this project does...",
  "technologies": ["React", "Node.js", "MongoDB"],
  "image": "https://your-image-url.com/image.jpg",
  "link": "https://your-project-link.com"
}
```

### Add a New Skill

In `portfolio.json`, find `skills.categories` and add:

```json
{
  "name": "Python",
  "icon": "code"
}
```

**Find icons at:** [Google Material Symbols](https://fonts.google.com/icons)

### Update Social Media Links

In `portfolio.json`, update the `social` array:

```json
{
  "name": "GitHub",
  "icon": "code",
  "url": "https://github.com/yourusername"
}
```

---

## 🎨 Available Color Examples

Try these colors by changing `primary` in `theme.js`:

```javascript
// Red
primary: '#FF6B6B'

// Blue
primary: '#4A90E2'

// Green
primary: '#00B894'

// Purple
primary: '#6C5CE7'

// Orange
primary: '#FD7E14'

// Keep original teal
primary: '#093A3E'
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy - Done!

### Netlify

```bash
npm run build
# Drag the 'dist' folder to netlify.com
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

---

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Material Symbols** - Beautiful icons
- **Google Fonts (Inter)** - Professional typography

---

## 📊 Sections Included

1. **Header** - Sticky navigation with mobile menu
2. **Hero** - Eye-catching landing with animated backgrounds
3. **About** - Bio with profile image and experience badges
4. **Skills** - Categorized tech stack with gradient cards
5. **Projects** - Portfolio showcase with hover effects
6. **Testimonials** - Client/colleague reviews
7. **Contact** - Working contact form with animations
8. **Footer** - Simple copyright footer

---

## 💡 Pro Tips

1. **Backup** - Keep a copy of `portfolio.json` before major edits
2. **Colors** - Test your color choice for accessibility (contrast ratios)
3. **Images** - Optimize images before uploading (use [tinypng.com](https://tinypng.com))
4. **JSON** - Validate JSON syntax at [jsonlint.com](https://jsonlint.com)
5. **Testing** - Always test on mobile devices
6. **Icons** - Browse Material Symbols for the perfect icon

---

## 🐛 Troubleshooting

### Changes Not Showing?
- Save your file
- Refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

### JSON Syntax Error?
- Check for missing commas
- Use double quotes `"` not single quotes `'`
- Validate at jsonlint.com

### Port Already in Use?
```bash
npm run dev -- --port 3000
```

### Build Errors?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## ✅ Pre-Launch Checklist

Before deploying:

- [ ] Updated personal information in `portfolio.json`
- [ ] Changed primary color in `theme.js` (if desired)
- [ ] Added real projects
- [ ] Updated skills section
- [ ] Added testimonials
- [ ] Updated social media links
- [ ] Replaced placeholder images
- [ ] Tested on mobile
- [ ] Ran `npm run build` successfully
- [ ] No console errors

---

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy!

**Two files to edit:**
1. 🎨 `src/config/theme.js` - Change the primary color
2. 📝 `src/data/portfolio.json` - Update all content

**That's it!** No need to touch React components unless you want to change the layout.

---

## 📞 Need Help?

- **Material Icons:** [fonts.google.com/icons](https://fonts.google.com/icons)
- **Color Palettes:** [coolors.co](https://coolors.co)
- **JSON Validator:** [jsonlint.com](https://jsonlint.com)
- **Image Optimizer:** [tinypng.com](https://tinypng.com)

---

**Built with ❤️ for developers who want a stunning portfolio without the complexity!**

🎨 Change color: 1 line in `theme.js`  
📝 Update content: Edit `portfolio.json`  
🚀 Deploy: Push and go!