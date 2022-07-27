<script context="module">
  export async function load({ url }) {
    const currentRoute = url.pathname;

    return {
      props: {
        currentRoute
      }
    };
  };
</script>

<script>
  import Header from "$lib/components/Header.svelte";
  import "$lib/styles/styles.scss";
  import RouteIndicator from "../lib/components/RouteIndicator.svelte";

  export let currentRoute;
</script>

<Header />

<main>
  <RouteIndicator currentRoute={currentRoute} />
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>
