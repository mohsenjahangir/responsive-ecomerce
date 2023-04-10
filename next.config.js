const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
    include: path.resolve(__dirname, 'public/svg'),
    webpack(config, options) {
        return config;
    },
    env: {
        API_BASE_URL: 'www.google.com',
    },
});


// const path = require('path');

// /**
//  * @type {import('next-react-svg').NextReactSvgConfig}
//  */
// const nextReactSvgConfig = {
//   include: path.resolve(__dirname, 'src/assets/svg'),
// };

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   // ...
// };

// const withReactSvg = require('next-react-svg')(nextReactSvgConfig);

// module.exports = withReactSvg(nextConfig);


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
