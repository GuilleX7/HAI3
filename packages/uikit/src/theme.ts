/**
 * HAI3 Theme System
 * Applies theme colors as CSS custom properties
 */

/**
 * Color value - can be hex, rgb, hsl, oklch, etc.
 */
type ColorValue = string;

/**
 * Nested color object for complex color schemes
 */
interface NestedColors {
  DEFAULT?: ColorValue;
  foreground?: ColorValue;
  hover?: ColorValue;
  selected?: ColorValue;
  border?: ColorValue;
  background?: ColorValue;
  [key: string]: ColorValue | NestedColors | undefined;
}

/**
 * Theme color configuration
 */
interface ThemeColors {
  primary?: ColorValue;
  secondary?: ColorValue;
  accent?: ColorValue;
  background?: ColorValue;
  foreground?: ColorValue;
  muted?: ColorValue;
  border?: ColorValue;
  error?: ColorValue;
  warning?: ColorValue;
  success?: ColorValue;
  info?: ColorValue;
  mainMenu?: NestedColors;
  chat?: NestedColors;
  inScreenMenu?: NestedColors;
  chart?: Record<string | number, ColorValue>;
  [key: string]: ColorValue | NestedColors | Record<string | number, ColorValue> | undefined;
}

/**
 * Theme spacing configuration
 */
interface ThemeSpacing {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
  '3xl'?: string;
  [key: string]: string | undefined;
}

/**
 * Theme typography configuration
 */
interface ThemeTypography {
  fontFamily?: {
    sans?: string[];
    mono?: string[];
    [key: string]: string[] | undefined;
  };
  fontSize?: Record<string, string>;
  fontWeight?: Record<string, string>;
  lineHeight?: Record<string, string>;
}

/**
 * HAI3 Theme definition
 */
export interface Theme {
  name: string;
  colors?: ThemeColors;
  spacing?: ThemeSpacing;
  typography?: ThemeTypography;
  borderRadius?: Record<string, string>;
  shadows?: Record<string, string>;
  transitions?: Record<string, string>;
}

/**
 * Convert hex color to HSL values for CSS custom properties
 */
function hexToHsl(hex: string): string {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse hex values
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  // Return HSL values without the hsl() wrapper for CSS custom properties
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

/**
 * Check if a color value is a hex color
 */
function isHexColor(color: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(color);
}

/**
 * Convert color to HSL format if it's hex, otherwise return as-is
 */
function toHslValue(color: string): string {
  if (isHexColor(color)) {
    return hexToHsl(color);
  }
  // For oklch, rgb, hsl, etc. - return as-is
  return color;
}

/**
 * Apply a theme to the document by setting CSS custom properties
 */
export function applyTheme(theme: Theme): void {
  const root = document.documentElement;

  if (!theme.colors) return;

  const colors = theme.colors;

  // Map HAI3 theme colors to shadcn CSS variables
  const colorMappings: Record<string, string | undefined> = {
    '--background': colors.background,
    '--foreground': colors.foreground,
    '--primary': colors.primary,
    '--primary-foreground': colors.background, // Usually white/light on primary
    '--secondary': colors.secondary,
    '--secondary-foreground': colors.foreground,
    '--accent': colors.accent,
    '--accent-foreground': colors.foreground,
    '--muted': colors.muted,
    '--muted-foreground': colors.foreground ? adjustLightness(colors.foreground, 0.4) : undefined,
    '--border': colors.border,
    '--input': colors.border,
    '--ring': colors.primary,
    '--destructive': colors.error,
    '--destructive-foreground': colors.background,
  };

  // Apply color mappings
  for (const [cssVar, color] of Object.entries(colorMappings)) {
    if (color) {
      root.style.setProperty(cssVar, toHslValue(color));
    }
  }

  // Apply chart colors
  if (colors.chart) {
    for (const [key, value] of Object.entries(colors.chart)) {
      if (value) {
        root.style.setProperty(`--chart-${key}`, value);
      }
    }
  }

  // Apply sidebar colors from mainMenu
  if (colors.mainMenu) {
    const menu = colors.mainMenu;
    if (menu.DEFAULT) root.style.setProperty('--sidebar-background', toHslValue(menu.DEFAULT));
    if (menu.foreground) root.style.setProperty('--sidebar-foreground', toHslValue(menu.foreground));
    if (menu.border) root.style.setProperty('--sidebar-border', toHslValue(menu.border));
    if (menu.selected) root.style.setProperty('--sidebar-primary', toHslValue(menu.selected));
    if (menu.foreground) root.style.setProperty('--sidebar-primary-foreground', toHslValue(menu.foreground));
    if (menu.hover) root.style.setProperty('--sidebar-accent', toHslValue(menu.hover));
    if (menu.foreground) root.style.setProperty('--sidebar-accent-foreground', toHslValue(menu.foreground));
  }

  // Apply typography
  if (theme.typography?.fontFamily?.sans) {
    root.style.setProperty('--font-sans', theme.typography.fontFamily.sans.join(', '));
  }
  if (theme.typography?.fontFamily?.mono) {
    root.style.setProperty('--font-mono', theme.typography.fontFamily.mono.join(', '));
  }

  // Apply border radius
  if (theme.borderRadius?.lg) {
    root.style.setProperty('--radius', theme.borderRadius.lg);
  }
}

/**
 * Adjust the lightness of a hex color
 */
function adjustLightness(hex: string, factor: number): string {
  if (!isHexColor(hex)) return hex;

  hex = hex.replace(/^#/, '');
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  // Adjust lightness
  l = Math.min(1, Math.max(0, l + (1 - l) * factor));

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}
