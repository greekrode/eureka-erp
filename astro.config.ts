import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercelServerless from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { shield } from '@kindspells/astro-shield'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercelServerless({
		webAnalytics: {
			enabled: true
		}
	}),
	site: 'https://eureka-erp.com',
	integrations: [tailwind(), react(), sitemap(), shield({})]
})
