import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    // Native tsconfig paths resolution — replaces vite-tsconfig-paths plugin
    tsconfigPaths: true,
  },
  plugins: [
    // tanstackStart (and its internal router plugin) must come before react()
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      nitro: {
        preset: "node-server",
      },
    }),
    react(),
    tailwindcss(),
  ],
});
