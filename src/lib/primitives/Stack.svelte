<script context="module">
  import EveryLayout from "./every-layout";

  const layouts = new EveryLayout();
</script>

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { Instance } from "./every-layout";

  export let recursive = false;
  export let space = "var(--s1)";
  export let splitAfter: number | null = null;

  let ref: HTMLElement = void 0;
  let instance: Instance = void 0;

  onMount(() => {
    instance = layouts.mount({
      el: ref,
      props: { recursive, space, splitAfter },
      name: "Stack",
      styleFn: ({ id, props }: Instance) => `
				div[data-id=${id}] {
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
				}

				div[data-id=${id}]${props.recursive ? "" : " >"} * + * { margin-top: ${props.space}; }

				${props.splitAfter && `
					div[data-id=${id}]:only-child { height: 100%; }
					div[data-id=${id}] > :nth-child(${props.splitAfter}) { margin-bottom: auto; }
				`}
			`.replace(/\s\s+/g, " ").trim()
    });
  });

  onDestroy(() => {
    layouts.destroy(instance);
  });

  $: recursive, space, splitAfter, instance && (() => {
    layouts.onPropsUpdate(instance, { recursive, space, splitAfter });
  })();
</script>

<div bind:this={ref} class="stack">
  <slot />
</div>
