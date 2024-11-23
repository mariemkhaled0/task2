import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/task2/", // Adjust to your GitHub repository name
  build: {
    outDir: "dist", // Directory for build output
    assetsDir: "assets", // Directory for static assets inside dist
  },
});
