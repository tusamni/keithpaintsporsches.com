// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Inter",
            weights: ["300 900"],
            cssVariable: "--font-heading"
        }]
    },
    vite: {
        plugins: [tailwindcss()],
    },
});
