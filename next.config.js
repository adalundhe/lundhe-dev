/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");
import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'

import langPython from 'highlight.js/lib/languages/python'

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default createMDX({
  options: {
    rehypePlugins: [
      [
        rehypeHighlight,
        { languages: { python: langPython } }
      ]
    ]
  }
})(config);
