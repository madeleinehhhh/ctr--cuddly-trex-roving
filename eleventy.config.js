// eleventy.config.js
//
// SETUP: install the interlinker plugin first:
//   npm install @photogabble/eleventy-plugin-interlinker

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

  // --- Strip Obsidian %% comments %% before markdown parsing ---
  // Uses amendLibrary to wrap markdown-it's render method, stripping
  // %% ... %% blocks from the source before the parser sees them.
  // This prevents them from ever appearing in output HTML.
  eleventyConfig.amendLibrary('md', (mdLib) => {
    const originalRender = mdLib.render.bind(mdLib);
    mdLib.render = (src, env) => {
      const stripped = src.replace(/%%[^%]*%%/gs, '');
      return originalRender(stripped, env);
    };
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

  // Teachings collection — sorted newest-first
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
