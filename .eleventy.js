module.exports = function(eleventyConfig) {

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