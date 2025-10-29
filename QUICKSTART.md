# 🚀 Quick Start Guide

Get your portfolio up and running in **5 minutes**!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Your site will open at `http://localhost:5173`

## Step 3: Update Your Info

### Change Your Details
Open `src/data/portfolio.json` and update:

```json
{
  "personal": {
    "name": "Your Name Here",
    "title": "Your Title Here",
    "email": "your.email@example.com",
    "location": "Your City",
    "bio": "Your bio text..."
  }
}
```

Save the file and see changes instantly! ✨

### Change the Primary Color

Open `src/config/theme.js` and change line 6:

```javascript
primary: '#093A3E',  // Change to your color!
```

Try these colors:
- `'#FF6B6B'` - Red
- `'#4ECDC4'` - Turquoise
- `'#556270'` - Dark Gray
- `'#6C5CE7'` - Purple
- `'#00B894'` - Green

## Step 4: Add Your Projects

In `src/data/portfolio.json`, find the `projects` section and add:

```json
{
  "id": 7,
  "title": "My Awesome Project",
  "description": "What this project does...",
  "technologies": ["React", "Node.js"],
  "image": "https://your-image-url.com/image.jpg",
  "link": "https://your-project-link.com"
}
```

## Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

Upload the `dist` folder to any hosting service!

---

## 📁 What to Edit

**Only edit these 2 files:**

1. **`src/data/portfolio.json`** → All your content (name, projects, skills, etc.)
2. **`src/config/theme.js`** → Colors and styling

**Don't edit components** unless you want to change the layout!

---

## 🎨 Quick Customizations

### Add a New Skill

In `portfolio.json`, find `skills.categories` and add:

```json
{
  "name": "Python",
  "icon": "code"
}
```

### Add Social Media

In `portfolio.json`, find `social` and add:

```json
{
  "name": "GitHub",
  "icon": "code",
  "url": "https://github.com/yourusername"
}
```

### Change Section Titles

In `portfolio.json`, change any title or subtitle:

```json
"skills": {
  "title": "My Superpowers",
  "subtitle": "Technologies I love working with"
}
```

---

## 🆘 Having Issues?

### Port Already in Use?
```bash
npm run dev -- --port 3000
```

### Changes Not Showing?
- Save the file
- Refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### JSON Error?
- Check for missing commas
- Make sure all strings use double quotes `"`
- Validate at [jsonlint.com](https://jsonlint.com)

### Build Error?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🚀 Deploy in 2 Minutes

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository → Deploy!

### Option 2: Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag `dist` folder → Done!

---

## 📚 Need More Help?

- **Full Guide:** See `CONFIGURATION.md`
- **Details:** See `README.md`
- **Find Icons:** [Material Symbols](https://fonts.google.com/icons)
- **Color Ideas:** [Coolors](https://coolors.co)

---

## ✨ That's It!

You now have a fully functional, customizable portfolio website!

**Happy Building! 🎉**