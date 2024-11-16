// @ts-check
import { defineConfig } from "astro/config";
import contentCollection from "@content-collections/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [contentCollection()],
  },
});
