// eleventy.config.js
//
// SETUP: install the interlinker plugin first:
//   npm install @photogabble/eleventy-plugin-interlinker
//
// The interlinker plugin is CommonJS. In an ESM project (type: "module"),
// load it with a dynamic import() as shown below.

export default async function (eleventyConfig) {

  // --- Wiki Links (Obsidian interop) ---
  // Resolves [[filename|display text]] wiki links in markdown files.
  // The plugin matches by filename stem, so [[ctr-about-index|text]]
  // resolves to whichever page has the file ctr-about-index.md.
  const { default: interlinker } = await import('@photogabble/eleventy-plugin-interlinker');
  eleventyConfig.addPlugin(interlinker, {
    // Report dead links to console during build (change to 'none' to silence)
    deadLinkReport: 'console',
  });

  // --- Strip Obsidian section markers from output ---
  // Removes %%SECTION: ...%% comments used for editorial structure in Obsidian.
  // These are visible in Obsidian edit mode but should not appear in the built site.
  eleventyConfig.addTransform('strip-section-markers', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      return content.replace(/%%SECTION:[^%]*%%/g, '');
    }
    return content;
  });

  // Strip any remaining %% ... %% Obsidian comments (e.g. the file title comment)
  eleventyConfig.addTransform('strip-obsidian-comments', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      return content.replace(/%%[^%]*%%/g, '');
    }
    return content;
  });

  // --- Passthrough — files copied as-is to _site/ ---
  eleventyConfig.addPassthroughCopy({ 'src/css/': '/css/' });
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/images');

  // --- Collections ---

  // Practices collection (for use in practice listing templates)
  eleventyConfig.addCollection('practices', (collectionApi) =>
    collectionApi
      .getFilteredByGlob('src/practices/*.njk')
      .filter((p) => !p.filePathStem.endsWith('/index'))
  );

  // Teachings collection — all posts with a 'teacher' or 'series' front matter key
  // Used to generate teacher and series index pages via pagination
  eleventyConfig.addCollection('teachings', (collectionApi) =>
    collectionApi
      .getFilteredByGlob(['src/teachings/**/*.md', 'src/teachings/**/*.njk'])
      .filter((p) => !p.filePathStem.endsWith('/index'))
      .sort((a, b) => b.date - a.date)
  );

  // Nav / page tree — drives the main navigation
  // Builds a nested tree from URL structure; uses page.data.title as display name
  eleventyConfig.addCollection('pageTree', (collectionApi) => {
    const pages = collectionApi
      .getFilteredByGlob(['src/**/*.njk', 'src/**/*.md'])
      .filter((p) => !p.inputPath.includes('_includes'))
      .filter((p) => !p.data.eleventyExcludeFromCollections)
      .sort((a, b) => a.url.localeCompare(b.url));

    const root = { children: [] };

    for (const page of pages) {
      const parts = page.url.split('/').filter(Boolean);
      let node = root;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        let child = node.children.find((c) => c.slug === part);
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
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk', 'html', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
}
