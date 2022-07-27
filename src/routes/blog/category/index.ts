import { getPosts } from '$lib/posts';

function groupBy(list, keyGetter) {
	const map = new Map();
	list.forEach((item) => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});
	return map;
}

export async function GET() {
	let posts = await getPosts();

	console.log(posts);
	// Posts may have multiple categories, flatten
	posts = posts.flatMap((x) => x.meta.categories.map((category) => ({ ...x, category })));

	const map = groupBy(posts, (x) => x.category);
	const categories = [...map];

	return {
		body: {
			categories
		}
	};
}
