module.exports = {
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'storybook-addon-material-ui5',
	],
	features: {
		emotionAlias: false,
		storyStoreV7: true,
	  },
}