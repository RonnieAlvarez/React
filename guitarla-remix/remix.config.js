/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ['**/.*'],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "build/index.js",
	// publicPath: "/build/",
	serverModuleFormat: 'cjs',
	future: {
		v2_dev: false,
		v2_errorBoundary: true,
		v2_headers: false,
		v2_meta: false,
		v2_normalizeFormMethod: false,
		v2_routeConvention: false,
	},
	devServer: {
		host: "localhost"
	}
};
