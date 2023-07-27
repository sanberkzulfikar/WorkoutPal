import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://workoutpal-vnq3.onrender.com/api/workouts",
    },
  },
  plugins: [react()],
});
