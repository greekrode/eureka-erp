import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercelServerless from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import partytown from '@astrojs/partytown'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercelServerless({
		webAnalytics: {
			enabled: true
		}
	}),
	site: 'https://eureka-erp.com',
	integrations: [
		tailwind(),
		react(),
		sitemap(),
		partytown({
			config: {
				forward: ['dataLayer.push']
			}
		})
	]
})
