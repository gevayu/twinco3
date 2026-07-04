import localFont from "next/font/local";

/**
 * Local brand fonts (files under /fonts).
 * Both are variable fonts, so a single file covers the full weight range.
 * Exposed as CSS variables on <html>; consumed via Tailwind @theme in globals.css.
 */

// Afacad — weight axis 400–700 (Regular · Medium · SemiBold · Bold), normal + italic
export const afacad = localFont({
  src: [
    {
      path: "../fonts/Afacad/Afacad-VariableFont_wght.ttf",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/Afacad/Afacad-Italic-VariableFont_wght.ttf",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--nf-afacad",
  display: "swap",
});

// Inter — weight axis 100–900 (Thin → Black)
export const inter = localFont({
  src: "../fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--nf-inter",
  weight: "100 900",
  display: "swap",
});
