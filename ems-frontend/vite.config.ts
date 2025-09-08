import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import path from "path"; // Removed, not available in browser environments
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
}));