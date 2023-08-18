module.exports = {
  stories: ['../stories/**/*.stories.@(js|mdx)'],

  addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-styling',
	],

  features: {
      emotionAlias: false,
      storyStoreV7: true,
    },

  docs: {
		autodocs: true,
		defaultName: 'Documentation'
  },

  framework: {
    name: '@storybook/react-webpack5',
		options: {}
  }
}
