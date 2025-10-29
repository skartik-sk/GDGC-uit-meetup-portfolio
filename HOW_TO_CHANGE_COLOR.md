# 🎨 How to Change the Primary Color

## The Easiest Way to Customize Your Portfolio!

The entire website uses the primary color `#093A3E` (teal). Change it in **ONE place** and watch your whole site transform!

---

## Step-by-Step Guide

### 1. Open the Theme File

Navigate to and open this file:
```
react-portfolio/src/config/theme.js
```

### 2. Find Line 6

Look for this line:
```javascript
primary: '#093A3E',
```

### 3. Change the Color

Replace `#093A3E` with your hex color:
```javascript
primary: '#FF6B6B',  // Now it's red!
```

### 4. Save the File

Save it and your browser will automatically reload with the new color! ✨

---

## Where This Color Appears

When you change the primary color, it automatically updates:

✅ Header navigation hover effects  
✅ All buttons (View My Work, Resume, etc.)  
✅ Section title accents  
✅ Skill card gradients  
✅ About section badges  
✅ Project technology tags  
✅ Contact form elements  
✅ Social media icon hovers  
✅ Link colors throughout  
✅ Footer background  

**ONE line change = Entire site recolored!**

---

## Try These Colors

Just copy and paste one of these into `theme.js`:

### 🔴 Bold Red
```javascript
primary: '#FF6B6B',
```

### 🔵 Professional Blue
```javascript
primary: '#4A90E2',
```

### 🟢 Fresh Green
```javascript
primary: '#00B894',
```

### 🟣 Creative Purple
```javascript
primary: '#6C5CE7',
```

### 🟠 Energetic Orange
```javascript
primary: '#FD7E14',
```

### ⚫ Modern Dark
```javascript
primary: '#2D3436',
```

### 🟡 Bright Yellow
```javascript
primary: '#FDCB6E',
```

### 💗 Vibrant Pink
```javascript
primary: '#FF6B9D',
```

### 🌊 Original Teal
```javascript
primary: '#093A3E',
```

---

## Finding Your Perfect Color

### Option 1: Use Coolors
1. Go to [coolors.co/generate](https://coolors.co/generate)
2. Generate palettes or pick a color
3. Click the color to copy its hex code
4. Paste it into `theme.js`

### Option 2: Use Adobe Color
1. Go to [color.adobe.com](https://color.adobe.com/create/color-wheel)
2. Choose a color from the wheel
3. Copy the hex code (e.g., `#FF6B6B`)
4. Paste it into `theme.js`

### Option 3: Use Your Brand Color
Already have a brand color? Just use that hex code!

### Option 4: Google Color Picker
1. Google "color picker"
2. Pick your color
3. Copy the HEX value
4. Paste into `theme.js`

---

## What the File Looks Like

Here's what you'll see in `src/config/theme.js`:

```javascript
// Centralized Theme Configuration
// Change colors here to apply across the entire application

export const theme = {
  colors: {
    // Primary color - Change this to update the entire site's primary color
    primary: '#093A3E',  // ← CHANGE THIS LINE!
    
    // Secondary colors derived from primary
    primaryLight: '#106066',
    primaryDark: '#062B2E',
    
    // ... rest of the file
  }
};
```

Just change line 6 where it says `primary: '#093A3E',` and you're done!

---

## Made a Mistake? No Problem!

### Original Color
The original color is:
```javascript
primary: '#093A3E',
```

Just change it back to this if you want to undo your changes.

### Undo Shortcut
- Press `Ctrl+Z` (Windows/Linux) or `Cmd+Z` (Mac) to undo
- Or close the file without saving

---

## Tips for Choosing Colors

### ✅ Good Color Choices
- High contrast with white backgrounds
- Professional and easy on the eyes
- Represents your personal brand
- Works well with text overlay
- Looks good in both light and dark modes

### ❌ Avoid
- Very light colors (hard to see)
- Too bright/neon (harsh on eyes)
- Low contrast colors (accessibility issues)
- Colors that clash with existing design

### Test Your Color
After changing the color, check:
- ✓ Can you read white text on buttons?
- ✓ Does it look professional?
- ✓ Is the contrast good enough?
- ✓ Does it match your brand/personality?

---

## Advanced: Change Other Colors Too

While you're in `theme.js`, you can also customize:

```javascript
colors: {
  primary: '#093A3E',           // ⭐ Main color - CHANGE THIS!
  primaryLight: '#106066',      // Lighter shade (optional)
  primaryDark: '#062B2E',       // Darker shade (optional)
  
  accentCyan: '#12B8D3',        // Accent color 1
  accentGreen: '#23C552',       // Accent color 2
  accentViolet: '#7c4dff',      // Accent color 3
  
  backgroundLight: '#F9F9F9',   // Page background
  textPrimary: '#2D2D2D',       // Main text
  textSecondary: '#5f728c',     // Secondary text
}
```

But **just changing `primary` is usually all you need!**

---

## Troubleshooting

### Color Not Changing?
1. Make sure you saved the file (Ctrl+S or Cmd+S)
2. Refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check the hex code starts with `#`
4. Make sure it's 6 characters after the `#`
5. Restart dev server if needed: `npm run dev`

### Wrong Format?
Hex codes should look like:
- ✅ `#FF6B6B` (correct)
- ✅ `#093A3E` (correct)
- ❌ `FF6B6B` (missing #)
- ❌ `rgb(255, 107, 107)` (wrong format)
- ❌ `red` (color names don't work)

### How to Get Hex Codes?
- Use online color pickers
- Google "color picker"
- Use Photoshop/Figma eyedropper
- Use browser DevTools color picker
- Ask ChatGPT for color suggestions!

---

## Quick Reference Card

**File:** `src/config/theme.js`  
**Line:** 6  
**Format:** `primary: '#HEXCODE',`  
**Example:** `primary: '#FF6B6B',`  
**Restart needed:** No (hot reload works!)  

---

## Real Examples

### For a Tech Portfolio
```javascript
primary: '#4A90E2',  // Professional blue
```

### For a Creative Portfolio
```javascript
primary: '#6C5CE7',  // Creative purple
```

### For a Design Portfolio
```javascript
primary: '#FF6B9D',  // Vibrant pink
```

### For a Developer Portfolio
```javascript
primary: '#00B894',  // Fresh green
```

### For a Minimal Portfolio
```javascript
primary: '#2D3436',  // Modern dark
```

---

## That's It! 🎉

Literally **one line** = entire website recolored!

This is the magic of centralized configuration! 💪

The primary color `#093A3E` appears in your code only ONCE - right there on line 6 of `theme.js`. Change it and watch your whole portfolio transform instantly!

---

## Before & After Examples

**Before:**
```javascript
primary: '#093A3E',  // Teal theme
```
Result: Teal buttons, teal accents, teal everything

**After:**
```javascript
primary: '#FF6B6B',  // Red theme
```
Result: Red buttons, red accents, red everything

**It's that simple!** ✨

---

**Remember:** Change ONE line, transform ENTIRE site!

Happy customizing! 🎨