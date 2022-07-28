<script>
  import { fly } from "svelte/transition";
  import { backIn } from "svelte/easing";

  export let currentRoute;
  let height;

  // Remove first whitespace
  $: routeParts = currentRoute.split("/").slice(1).map((el, i) => [el, i]);
  const DURATION = 150;


</script>

<div class="container">
  {#each routeParts as [routePart, i] (routeParts.slice(0, i + 1).map(([el, i]) => el).toString())}
    <div class="route-indicator"
         in:fly={{ duration: DURATION, delay: DURATION, y:20, }}
         out:fly={{ duration: DURATION, x:-20, easing: backIn }}>{routePart}</div>
  {/each}
</div>

<style>
    .container {
    }

    .route-indicator {
        display: inline-block;
        border: 1px solid red;
        margin-right: 1rem;
    }
</style>
 
