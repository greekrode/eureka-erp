import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { shield } from '@kindspells/astro-shield'

// https://astro.build/config
export default defineConfig({
	output: 'static',
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp'
		},
		remotePatterns: [{ protocol: 'https' }]
	},
	site: 'https://www.eureka-erp.com',
	integrations: [tailwind(), react(), sitemap(), shield({})]
})
