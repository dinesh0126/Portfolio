/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0b0f1a",
          800: "#101628",
          700: "#161f35"
        },
        frost: "rgba(255,255,255,0.08)",
        glow: {
          pink: "#ff6aa2",
          blue: "#6ae4ff",
          mint: "#63f5d6"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glass: "0 20px 60px rgba(0,0,0,0.35)",
        soft: "0 12px 30px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(106,228,255,0.25), transparent 45%), radial-gradient(circle at 30% 20%, rgba(255,106,162,0.2), transparent 45%), radial-gradient(circle at 80% 30%, rgba(99,245,214,0.18), transparent 45%)"
      }
    }
  },
  plugins: []
};
