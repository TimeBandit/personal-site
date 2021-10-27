const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, cls, alt, sizes) {
  let metadata = await Image(src, {
    widths: [600],
    formats: ["jpeg"],
    outputDir: "./_site/assets/images",
    urlPath: "/assets/images/"
  });

  let imageAttributes = {
    class: cls,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/satoshi.css");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");

  // shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};