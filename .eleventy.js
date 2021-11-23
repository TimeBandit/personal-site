const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const imageShortcode = require('./src/shortcodes/imageShortCode');
const navListItemShortcode = require('./src/shortcodes/navListItemShortcode');

module.exports = function(eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/satoshi.css");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");

  // shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode(
    "navListItemShortcode",
    navListItemShortcode
  );
  
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};