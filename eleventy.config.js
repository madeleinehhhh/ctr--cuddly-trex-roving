export default function (eleventyConfig) {
  // Passthrough — files copied as-is to _site/
  eleventyConfig.addPassthroughCopy({ "src/css/": "/css/" });
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/images");

  // Collections — add per-project collections here
  // Example:
  // eleventyConfig.addCollection("posts", (collectionApi) =>
  //   collectionApi.getFilteredByGlob("src/posts/*.njk").reverse()
  // );
  eleventyConfig.addCollection("practices", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/practices/*.njk").filter(p => !p.filePathStem.endsWith("/index"))
  );

// menu
eleventyConfig.addCollection("pageTree", (collectionApi) => {
  const pages = collectionApi.getFilteredByGlob(["src/**/*.njk", "src/**/*.md"])
    .filter(p => !p.inputPath.includes("_includes"))
    .sort((a, b) => a.url.localeCompare(b.url));

  const root = { children: [] };

  for (const page of pages) {
    const parts = page.url.split("/").filter(Boolean);
    let node = root;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      let child = node.children.find(c => c.slug === part);
      if (!child) {
        child = { slug: part, children: [] };
        node.children.push(child);
      }
      if (i === parts.length - 1) {
        child.url = page.url;
        child.title = page.data.title;
      }
      node = child;
    }
  }

  return root.children;
});

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