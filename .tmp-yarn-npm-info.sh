#!/bin/bash
set -e
pkgs=(
  @tsparticles/engine @tsparticles/nextjs @tsparticles/react @tsparticles/slim
  @types/rss @vercel/analytics @vercel/speed-insights cheerio highlight.js
  microcms-js-sdk microcms-richedit-processer next next-seo react react-dom
  react-icons react-scroll rss @babel/core @biomejs/biome @chromatic-com/storybook
  @storybook/nextjs @testing-library/dom @testing-library/jest-dom @testing-library/react
  @types/gtag.js @types/node @types/react @types/react-dom @types/react-scroll
  babel-loader chromatic husky hygen jest jest-environment-jsdom lint-staged
  sass storybook storybook-dark-mode tsconfig-paths-webpack-plugin typescript vercel vite
)
for pkg in "${pkgs[@]}"; do
  ver=$(yarn npm info "$pkg" --fields name,version --json 2>/dev/null | tail -1)
  echo "$pkg|$ver"
done
