import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react-test-contacts",
  server: {
    proxy: {
      "/api": {
        target:
          "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
      },
    },
  },
});
