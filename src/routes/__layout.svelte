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
  import Box from "$lib/primitives/Box.svelte";
  import Center from "../lib/primitives/Center.svelte";
  import Cluster from "../lib/primitives/Cluster.svelte";

  export let currentRoute;
</script>

<Header />

<Cluster align-items="center" justify="space-between">
  <div>my site :) wodsqodsq odqsp dosqp odsqp odsqp odsqp sdqop oqsdp osqdpo pdsqopd</div>
  <Cluster>
    <span>About</span>
    <span>Blog</span>
  </Cluster>
</Cluster>

<Center gutters="4px" intrinsic>
  <Stack>
    <div>from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
      Latin literature from 45 BC, making it over 2000 years
    </div>
    <div>lorem ipsum lol</div>
    <div>lorem ipsum lol</div>
  </Stack>
</Center>

<Box>
  <div>box moment</div>
</Box>

<main>
  <RouteIndicator currentRoute={currentRoute} />
  <slot />
</main>

<footer class="max-inline-size:measure/2">Hello, I'm the footer.</footer>
