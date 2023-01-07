// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	target: 'static',
	css: ['@/assets/css/styles.css'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/_colors.scss" as *;',
				},
			},
		},
	},
});
