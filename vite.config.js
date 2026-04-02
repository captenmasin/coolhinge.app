import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Make built asset URLs work correctly when the site is hosted
  // from a subdirectory (or behind a reverse proxy).
  base: "./",
  plugins: [tailwindcss()],
});
