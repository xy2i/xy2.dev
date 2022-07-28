<script>
  export let posts;
  export let category;

  import { title } from "$lib/meta.json";
</script>

<svelte:head>
  <title>Categories - {title}</title>
</svelte:head>

<h1>Category: {category}</h1>
{#if posts.length}
  <ul>
    {#each posts as post}
      <li>
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
        Published {post.meta.date}
      </li>
    {/each}
  </ul>
{:else}
  No posts found with this category.
{/if}
