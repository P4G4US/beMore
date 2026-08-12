import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/beMore/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});
