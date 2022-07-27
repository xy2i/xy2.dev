<script>
  export let posts;
  export let category;
</script>

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
