import type { Post } from '$lib/posts';
import { getPosts } from '$lib/posts';

const siteURL = 'https://xy2.dev';
const siteTitle = 'xy2.dev';
const siteDescription = 'xy2.dev';

export async function GET() {
	const posts = await getPosts();

	const body = render(posts);
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return {
		body,
		headers
	};
}

const render = (posts: Post[]) =>
	`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">${siteURL}${post.path}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}${post.path}</link>
<description>${post.meta.title}</description>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`;
