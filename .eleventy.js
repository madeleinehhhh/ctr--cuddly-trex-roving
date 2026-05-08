export default function (eleventyConfig) {
  // Passthrough — files copied as-is to _site/
  eleventyConfig.addPassthroughCopy({ "src/css/tokens/": "/css/tokens/" });
eleventyConfig.addPassthroughCopy({ "src/css/base/": "/css/base/" });
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");

  // Collections — add per-project collections here
  // Example:
  // eleventyConfig.addCollection("posts", (collectionApi) =>
  //   collectionApi.getFilteredByGlob("src/posts/*.njk").reverse()
  // );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}