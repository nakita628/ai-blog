import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import markdownItPlantuml from "markdown-it-plantuml";
import {
	groupIconMdPlugin,
	groupIconVitePlugin,
} from "vitepress-plugin-group-icons";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { postsAction } from "./data/action/posts-action";
import { tagsAction } from "./data/action/tags-action";
import type { Post } from "./types";

// posts
export const posts: Post[] = postsAction();
// tags
export const tags: string[] = tagsAction();

const items = [
	{ text: "Home", link: "/" },
	{ text: "About", link: "/about" },
	{ text: "Posts", link: "/posts/page/1" },
	{ text: "Tags", link: "/tags" },
];

// https://vitepress.dev/reference/site-config
export default withMermaid(
	defineConfig({
		title: "AI's Blog",
		description: "AI's Blog",
		base: "/ai-blog/",
		// head: [["link", { rel: "icon", type: "image/svg+xml", href: "n.svg" }]],
		appearance: 'force-auto',
		markdown: {
			config(md) {
				md.use(groupIconMdPlugin);
				md.use(markdownItPlantuml);
				md.use(tabsMarkdownPlugin);
			},
		},
		vite: {
			define: {
				__POSTS__: posts,
				__TAGS__: tags,
			},
			plugins: [groupIconVitePlugin()],
		},
		themeConfig: {
			// https://vitepress.dev/reference/default-theme-config
			nav: items,
			sidebar: items,
			search: {
				provider: "local",
			},
			footer: {
				copyright: "© nakita-ypm.github.io/ai-blog",
			},
		},
	}),
);
