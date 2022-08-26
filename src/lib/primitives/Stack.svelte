<script>
  // A CSS margin value
  // For default s1, https://absolutely.every-layout.dev/rudiments/modular-scale/
  export let space = 'var(--s0)';
  // Whether the spaces apply recursively (i.e. regardless of nesting level)
  export let recursive = false;
  // Note: splitAfter is not implemented
</script>

<style>
    .stack {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .stack > :global(*) {
        margin-block: 0;
    }
    
    .stack.recursive :global(*) {
        margin-block: 0;
    }

    .stack :global(:not(:first-child)) {
        margin-block-start: var(--space);
    }
</style>

<div class="stack" class:recursive={recursive} style="--space: {space}">
  <slot/>
</div>
