// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/ankita-khot-portfolio",
//   // base: process.env.VITE_BASE_PATH || "/ankita-portfolio",
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"), // '@' maps to '/src'
//     },
//   },
//   server: {
//     port: 3000, // optional: set dev server port
//   },
//   css: {
//     preprocessorOptions: {
//       // optional: if using scss/sass
//       scss: {
//         additionalData: `@import "@/styles/global.scss";`,
//       },
//     },
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/shaban-shaikh-portfolio/", // ✅ repo name ONLY
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
});
