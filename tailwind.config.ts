import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "var(--font-trirong)"
        ],
        sans: [
          "var(--font-marck-script)"
        ],
        mono: [
          "var(--font-cookie)"
        ]
      },
    },
  },
  plugins: [],
} satisfies Config;
