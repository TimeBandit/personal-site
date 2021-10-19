const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/satoshi.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};