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
    title: alt
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = imageShortcode