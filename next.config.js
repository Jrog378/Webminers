/** @type {import('next').NextConfig} */
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    reactStrictMode: true,
    // webpack: (config, {isServer}) => {
    //     // Add the BundleAnalyzerPlugin to the plugins array
    //     config.plugins.push(
    //         new BundleAnalyzerPlugin({
    //             analyzerMode: 'server',
    //             analyzerPort: isServer ? 8888 : 8889,
    //         })
    //     );
    //     return config;
    // },
};