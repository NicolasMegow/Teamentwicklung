// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");

  eleventyConfig.addCollection("kapitel", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/kapitel-*.md").sort((a, b) => {
      return a.inputPath.localeCompare(b.inputPath);
    });
  });

  return {
    dir: {
      input: "src",
      includes: "includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
};
