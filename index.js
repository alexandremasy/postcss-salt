// tooling
const postcss = require('postcss');

// plugins
const plugins = {
	layout:  require('postcss-salt-layout')
};

// plugin
module.exports = postcss.plugin('postcss-salt', (rawopts) => {

	// options
	const opts = Object.assign({}, rawopts);

	// cached processor
	const processor = postcss();

	// for each plugin
	Object.keys(plugins).forEach(
		(name) => {
			// plugin options by name
			const pluginOpts = Object.assign({
				disable: opts[name] === false
			}, opts[name]);

			// if the plugin is not disabled
			if (!pluginOpts.disable) {
				// use the plugin
				processor.use(
					plugins[name](pluginOpts)
				);
			}
		}
	);

	return processor;
});
