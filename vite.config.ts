import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  base: "/",
  plugins: [tailwindcss()],
  build: {
    target: "es2020",
    outDir: "dist",
  },
});
