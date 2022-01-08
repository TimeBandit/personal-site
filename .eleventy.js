const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const copyrightNoticeShortcode = require("./src/shortcodes/copyrightNoticeShortcode");
const imageShortcode = require('./src/shortcodes/imageShortcode');
const navListItemShortcode = require('./src/shortcodes/navListItemShortcode');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  /* plugins */
  // navigation helper
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);
  
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/satoshi.css");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/prismjs/themes/prism.css":
      "./prism.css",
  });

  // shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode(
    "navListItemShortcode",
    navListItemShortcode
  );
  eleventyConfig.addNunjucksShortcode(
    "copyrightNotice",
    copyrightNoticeShortcode
  );
  
  
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};