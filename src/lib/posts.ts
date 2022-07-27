interface Metadata {
	title: string;
	date: string;
	categories: string[];
}

export interface Post {
	path: string;
	meta: Metadata;
}

const DEFAULT_META: Metadata = { title: 'Default title', date: '1970-01-01', categories: [] };

/**
 * Return posts and their path.
 */
export async function getPosts(): Promise<Post[]> {
	const allPostFiles = Object.entries(
		import.meta.glob<{ metadata?: Metadata }>('/src/routes/blog/*.md')
	);

	const allPosts = await Promise.all(
		allPostFiles.map(async ([path, resolve]) => {
			const meta = (await resolve()).metadata ?? DEFAULT_META;
			// Remove prefix to make an url
			path = path.replace('/src/routes', '');
			// Remove extension
			path = path.substring(0, path.lastIndexOf('.'));

			return {
				path,
				meta
			};
		})
	);

	const sortedPosts = allPosts.sort((a, b) => {
		return +new Date(b.meta.date) - +new Date(a.meta.date);
	});

	return sortedPosts;
}
