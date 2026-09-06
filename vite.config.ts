import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    // Native tsconfig paths resolution — replaces vite-tsconfig-paths plugin
    tsconfigPaths: true,
  },
  // Build-only: bundles client + server into .output/, so Render can run
  // node .output/server/index.mjs. Without this plugin, `vite build` only
  // emits dist/client and dist/server, and the start command has nothing to run.
  nitro: {
    preset: "node-server",
  },
  plugins: [
    // tanstackStart (and its internal router plugin) must come before react()
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
    }),
    nitro(),
    react(),
    tailwindcss(),
  ],
});
