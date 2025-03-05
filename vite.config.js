import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mui/material": path.resolve("node_modules/@mui/material"),
      "@mui/system": path.resolve("node_modules/@mui/system"),
      "@mui/utils": path.resolve("node_modules/@mui/utils"),
      "@mui/styled-engine": path.resolve("node_modules/@mui/styled-engine"),
      "@mui/private-theming": path.resolve("node_modules/@mui/private-theming"),
    },
  },
});
