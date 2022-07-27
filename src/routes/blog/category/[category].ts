import type { RequestHandler, RequestHandlerOutput, ResponseBody } from '@sveltejs/kit';
import type { Post } from '$lib/posts';
import { getPosts } from '$lib/posts';

export const GET: RequestHandler<{ category: string }> = async ({ params }) => {
	const currentCategory = params.category;
	const allPosts = await getPosts();

	const posts: Post[] = allPosts.filter((post) => post.meta?.categories.includes(currentCategory));
	return {
		body: {
			posts,
			category: params.category
		}
	};
};
