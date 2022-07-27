<script>
  export let categories;
</script>

<h1>All categories</h1>

{#if categories.length}
  <ul>
    {#each categories as [category, posts]}
      <li>
        <h2><a href={`category/${category}`}>{category}</a></h2>
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
      </li>
    {/each}
  </ul>
{:else}
  No categories found.
{/if}
