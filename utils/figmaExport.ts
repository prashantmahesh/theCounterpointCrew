import { AcapellaData } from "../types";

export const downloadFigmaTokens = (data: AcapellaData) => {
  const tokens = {
    version: "1.0",
    name: "Pastel Harmony Design System",
    metadata: {
      generatedBy: "Pastel Harmony App",
      date: new Date().toISOString(),
      instructions: "Import this file into Figma using plugins like 'Tokens Studio' or 'JSON to Design' to recreate the color palette and typography styles.",
      note: "For a visual import, use the Print button in the app and 'Save as PDF', then drag the PDF into Figma to get editable vector layers."
    },
    color: {
      pastel: {
        blue: { value: "#E0F2FE", type: "color", description: "sky-100" },
        pink: { value: "#FCE7F3", type: "color", description: "pink-100" },
        mint: { value: "#D1FAE5", type: "color", description: "emerald-100" },
        lavender: { value: "#EDE9FE", type: "color", description: "violet-100" },
        yellow: { value: "#FEF9C3", type: "color", description: "yellow-100" },
        coral: { value: "#FFE4E6", type: "color", description: "rose-100" },
        cream: { value: "#FFFBEB", type: "color", description: "amber-50" },
      },
      neutral: {
        50: { value: "#f8fafc", type: "color" },
        800: { value: "#1e293b", type: "color" },
        900: { value: "#0f172a", type: "color" }
      }
    },
    typography: {
      fontFamilies: {
        sans: { value: "Inter", type: "fontFamilies" },
        serif: { value: "Playfair Display", type: "fontFamilies" },
        display: { value: "Poppins", type: "fontFamilies" }
      }
    },
    content: {
      ...data
    }
  };

  const blob = new Blob([JSON.stringify(tokens, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `acapella-design-tokens-${new Date().getTime()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};