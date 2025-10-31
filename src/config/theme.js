// ============================================
// 🎨 CENTRALIZED THEME CONFIGURATION
// ============================================
// Change the PRIMARY_COLOR below and the entire website updates!
// This is the ONLY place you need to change the color!

export const PRIMARY_COLOR = "#a13041"; // ⭐ CHANGE THIS COLOR!

// ============================================
// Theme Object - Uses PRIMARY_COLOR everywhere
// ============================================
export const theme = {
  colors: {
    // Primary color - used everywhere in the site
    primary: PRIMARY_COLOR,

    // Derived colors (automatically generated from primary)
    primaryLight: "#106066",
    primaryDark: "#062B2E",

    // Accent colors
    accentCyan: "#12B8D3",
    accentGreen: "#23C552",
    accentViolet: "#7c4dff",

    // Background colors
    backgroundLight: "#F9F9F9",
    backgroundDark: "#0f1823",

    // Text colors
    textPrimary: "#2D2D2D",
    textSecondary: "#5f728c",
    textLight: "#FFFFFF",

    // Neutral colors
    charcoal: "#2D2D2D",
    neutralLight: "#E9E9E9",
    neutralDark: "#3a3a3a",

    // Card colors
    cardLight: "#FFFFFF",
    cardDark: "#1a2633",

    // Border colors
    borderLight: "#E9E9E9",
    borderDark: "#374151",
  },

  fonts: {
    display: '"Inter", sans-serif',
  },

  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },

  shadows: {
    subtle: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
    lifted:
      "0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    molten: `0 10px 15px -3px ${hexToRgba(PRIMARY_COLOR, 0.2)}, 0 4px 6px -4px ${hexToRgba(PRIMARY_COLOR, 0.1)}`,
  },

  transitions: {
    default: "all 0.3s ease-in-out",
    fast: "all 0.15s ease-in-out",
    slow: "all 0.5s ease-in-out",
  },
};

// ============================================
// Helper Functions
// ============================================

// Convert hex color to rgba
function hexToRgba(hex, alpha = 1) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Get CSS custom properties string
export const getCSSVariables = () => {
  return `
    :root {
      --color-primary: ${PRIMARY_COLOR};
      --color-primary-light: ${theme.colors.primaryLight};
      --color-primary-dark: ${theme.colors.primaryDark};
      --color-accent-cyan: ${theme.colors.accentCyan};
      --color-accent-green: ${theme.colors.accentGreen};
      --color-accent-violet: ${theme.colors.accentViolet};
      --color-bg-light: ${theme.colors.backgroundLight};
      --color-bg-dark: ${theme.colors.backgroundDark};
      --color-text-primary: ${theme.colors.textPrimary};
      --color-text-secondary: ${theme.colors.textSecondary};
      --font-display: ${theme.fonts.display};
    }
  `;
};

export default theme;
