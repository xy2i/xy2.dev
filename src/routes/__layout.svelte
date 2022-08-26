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
  import RouteIndicator from "$lib/components/RouteIndicator.svelte";
  import Stack from "$lib/primitives/Stack.svelte";

  export let currentRoute;
</script>

<Header />

<Stack>
  <div>from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
    Latin literature from 45 BC, making it over 2000 years
  </div>
  <div>lorem ipsum lol</div>
  <div>lorem ipsum lol</div>
</Stack>

<main>
  <RouteIndicator currentRoute={currentRoute} />
  <slot />
</main>

<footer class="max-inline-size:measure/2">Hello, I'm the footer.</footer>
