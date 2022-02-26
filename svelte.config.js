import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import { mdsvex } from 'mdsvex'

const config = {
  kit: {
    adapter: adapter(),
  },
	extensions: ['.svelte', '.md'],
  preprocess: [
    preprocess({
      scss: {
        prependData: `@import './src/style/app.scss';`,
      },
    }),
		mdsvex({
      extensions: ['.md']
    })
  ],
};

export default config;
