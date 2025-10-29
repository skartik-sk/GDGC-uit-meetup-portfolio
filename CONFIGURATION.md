# 🎨 Portfolio Configuration Guide

This guide will help you quickly customize your portfolio website. All changes can be made by editing just **2 files**!

---

## 🚀 Quick Start - 3 Steps to Your Portfolio

### Step 1: Update Your Information
Open `src/data/portfolio.json` and update:
- Your name
- Your title
- Your email
- Your bio
- Your projects
- Your skills

### Step 2: Change Colors (Optional)
Open `src/config/theme.js` and change the `primary` color on line 6:
```javascript
primary: '#093A3E', // Change this!
```

### Step 3: Run the Project
```bash
npm install
npm run dev
```

---

## 📋 Detailed Configuration

### 🎨 Changing the Primary Color

**File:** `src/config/theme.js`

The primary color `#093A3E` (teal) is used throughout the entire website. To change it:

1. Open `src/config/theme.js`
2. Find line 6: `primary: '#093A3E',`
3. Replace with your color (e.g., `primary: '#FF6B6B',` for red)
4. Save the file - changes apply automatically!

**This color is used in:**
- Header logo background
- Buttons and CTAs
- Hover effects
- Section highlights
- Skill card gradients
- Contact form styling
- Links and accents

**Pro Tip:** Use a color picker tool to find your hex color code!

---

### 📝 Editing Content

**File:** `src/data/portfolio.json`

This single JSON file controls ALL content on your website.

#### Personal Information

```json
"personal": {
  "name": "John Doe",                    // Your full name
  "title": "Software Engineer...",       // Your job title
  "tagline": "Crafting Digital...",      // Short tagline
  "email": "john.doe@email.com",         // Your email
  "location": "San Francisco",           // Your city
  "yearsOfExperience": "5+",            // Years of experience
  "bio": "I build elegant...",          // About section bio
  "image": "https://...",               // About section image
  "heroImage": "https://..."            // Hero section image
}
```

#### Navigation Menu

```json
"navigation": [
  { "label": "Home", "href": "#home" },
  { "label": "About", "href": "#about" }
  // Add more menu items here
]
```

To add a new section:
1. Add it to navigation
2. Create corresponding section with matching `id`

#### Skills Section

```json
"skills": {
  "title": "My Toolbox",                // Section title
  "subtitle": "A collection of...",     // Section subtitle
  "categories": [
    {
      "name": "Frontend",               // Category name
      "items": [
        {
          "name": "React",              // Skill name
          "icon": "code"                // Material icon name
        }
      ]
    }
  ]
}
```

**Finding Icons:**
Visit [Google Material Symbols](https://fonts.google.com/icons) and copy the icon name.

**Example Icons:**
- `code` - Code symbol
- `design_services` - Design
- `cloud` - Cloud
- `database` - Database
- `terminal` - Terminal/CLI
- `api` - API
- `shield` - Security

#### Projects Section

```json
"projects": {
  "title": "Selected Work",
  "subtitle": "A collection of...",
  "items": [
    {
      "id": 1,                          // Unique ID
      "title": "Project Name",          // Project title
      "description": "Brief...",        // Project description
      "technologies": [                 // Tech stack (array)
        "React",
        "Node.js"
      ],
      "image": "https://...",          // Project screenshot
      "link": "#"                       // Project URL
    }
  ]
}
```

**Tips for Projects:**
- Use 3-6 projects for best display
- Keep descriptions under 150 characters
- Use high-quality screenshots (1200x800px recommended)
- List 2-4 key technologies per project

#### Testimonials Section

```json
"testimonials": {
  "title": "Words from colleagues",
  "subtitle": "Hear what others...",
  "items": [
    {
      "id": 1,
      "name": "Jane Doe",               // Person's name
      "position": "Product Manager...", // Their job title
      "image": "https://...",          // Their photo
      "quote": "An exceptional..."      // Their testimonial
    }
  ]
}
```

**Tips for Testimonials:**
- Use 3-6 testimonials
- Keep quotes under 200 characters
- Use professional headshots
- Include full name and position

#### Contact Section

```json
"contact": {
  "title": "Let's build together",
  "subtitle": "Have a project..."
}
```

#### Social Links

```json
"social": [
  {
    "name": "GitHub",                   // Platform name
    "icon": "code",                     // Material icon
    "url": "#"                          // Your profile URL
  }
]
```

**Common Social Icons:**
- GitHub: `code`
- LinkedIn: `business_center`
- Twitter/X: `close` or `chat`
- Instagram: `photo_camera`
- Email: `mail`
- Website: `language`

#### Footer

```json
"footer": {
  "copyright": "© 2024 John Doe..."    // Copyright text
}
```

---

### 🎨 Advanced Theme Customization

**File:** `src/config/theme.js`

Beyond the primary color, you can customize:

#### All Colors

```javascript
colors: {
  primary: '#093A3E',           // Main brand color ⭐ CHANGE THIS!
  primaryLight: '#106066',      // Lighter version (optional)
  primaryDark: '#062B2E',       // Darker version (optional)
  
  accentCyan: '#12B8D3',        // Accent color 1
  accentGreen: '#23C552',       // Accent color 2
  accentViolet: '#7c4dff',      // Accent color 3
  
  backgroundLight: '#F9F9F9',   // Page background
  textPrimary: '#2D2D2D',       // Main text color
  textSecondary: '#5f728c',     // Secondary text
  
  // ... more colors
}
```

#### Typography

```javascript
fonts: {
  display: '"Inter", sans-serif',  // Change font family
}
```

**To use a different font:**
1. Add font link to `index.html`
2. Update `fonts.display` in theme.js

#### Border Radius

```javascript
borderRadius: {
  sm: '0.25rem',    // Small (buttons, inputs)
  md: '0.5rem',     // Medium (cards)
  lg: '0.75rem',    // Large (sections)
  xl: '1rem',       // Extra large
  full: '9999px',   // Fully rounded (pills)
}
```

#### Shadows

```javascript
shadows: {
  subtle: '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
  lifted: '0 10px 20px -5px rgba(0, 0, 0, 0.1)...',
  molten: '0 10px 15px -3px rgba(9, 58, 62, 0.2)...',
}
```

---

## 🖼️ Image Guidelines

### Recommended Image Sizes

- **Hero Image:** 800x800px (square)
- **About Image:** 600x600px (square)
- **Project Images:** 1200x800px (3:2 ratio)
- **Testimonial Photos:** 200x200px (square)

### Where to Get Images

1. **Your Photos:** Use your own professional photos
2. **Unsplash:** Free high-quality images (unsplash.com)
3. **Generated:** AI-generated abstract images for projects
4. **Icons:** Material Symbols (fonts.google.com/icons)

### Using Local Images

Instead of URLs, you can use local images:

1. Put images in `public/images/` folder
2. Reference as: `"/images/your-image.jpg"`

Example:
```json
"image": "/images/profile.jpg"
```

---

## 🎯 Common Customizations

### Change Site Title

**File:** `index.html` (line 39)
```html
<title>Your Name - Portfolio | Your Title</title>
```

### Change Meta Description

**File:** `index.html` (lines 7-9)
```html
<meta name="description" content="Your custom description..." />
```

### Add Google Analytics

**File:** `index.html` (before `</head>`)
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Change Favicon

Replace `public/vite.svg` with your own favicon.

---

## ✅ Checklist Before Publishing

- [ ] Updated personal information in `portfolio.json`
- [ ] Changed primary color in `theme.js` (optional)
- [ ] Added all your projects
- [ ] Updated skills section
- [ ] Added testimonials (if available)
- [ ] Updated social media links
- [ ] Changed site title and meta description
- [ ] Replaced all placeholder images
- [ ] Tested contact form
- [ ] Checked responsive design on mobile
- [ ] Tested all navigation links
- [ ] Ran `npm run build` successfully

---

## 🐛 Troubleshooting

### Images Not Loading
- Check if image URLs are correct
- Try using direct image URLs (not redirects)
- Use local images in `public/images/` folder

### Icons Not Showing
- Verify icon name at fonts.google.com/icons
- Icons are case-sensitive
- Use underscores (e.g., `design_services`)

### Colors Not Changing
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if you saved the file
- Restart dev server (`npm run dev`)

### JSON Syntax Errors
- Check for missing commas
- Ensure all strings use double quotes `"`
- Use a JSON validator (jsonlint.com)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to vercel.com
3. Import your repository
4. Deploy!

### Deploy to Netlify

1. Run `npm run build`
2. Drag `dist` folder to netlify.com
3. Done!

### Deploy to GitHub Pages

1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

## 💡 Pro Tips

1. **Color Harmony:** Use Adobe Color (color.adobe.com) to create color schemes
2. **Accessibility:** Ensure text has good contrast with backgrounds
3. **Performance:** Optimize images before uploading (use tinypng.com)
4. **Testing:** Test on multiple devices and browsers
5. **SEO:** Update meta tags for better search visibility
6. **Backup:** Keep a copy of your `portfolio.json` file

---

## 📞 Need Help?

- Check the main README.md
- Review code comments in components
- Validate JSON at jsonlint.com
- Test colors at coolors.co

---

**Remember:** Only edit these 2 files for most changes:
1. ✨ `src/config/theme.js` - for colors and styling
2. 📝 `src/data/portfolio.json` - for all content

Everything else is handled automatically! 🎉