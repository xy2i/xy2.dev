<script>
  export let padding = "var(--s1)";
  export let border = "var(--border-thin)";
</script>

<style>
    .box {
        padding: var(--padding);
        border: var(--border) solid;
    }
</style>

<div class="box" style="--padding: {padding}; --border: {border}">
  <slot />
</div>
