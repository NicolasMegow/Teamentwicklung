// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addCollection("kapitel", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/kapitel-*.md").sort((a, b) => {
      return a.inputPath.localeCompare(b.inputPath);
    });
  });

  return {
    pathPrefix: "/Teamentwicklung/",
    dir: {
      input: "src",
      includes: "includes",
      output: "docs",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
};
