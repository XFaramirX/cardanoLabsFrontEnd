const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const webpack = require("webpack");
const path = require("path");
const tailwindCss = require("tailwindcss");
module.exports = withPlugins([[withSass], [withImages]], {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [tailwindCss("./tailwind.config.js")],
          },
        },
        { loader: "sass-loader" },
      ],
    });
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});
