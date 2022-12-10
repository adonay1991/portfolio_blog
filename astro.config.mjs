import solid from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
	integrations: [solid()],
	output: 'server',
	adapter: vercel(),
});
