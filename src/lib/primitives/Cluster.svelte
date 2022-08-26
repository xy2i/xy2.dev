<script lang="ts">
  /**
   * A css justify-content value
   */
  export let justify = "flex-start";
  /**
   * A css align-items value
   */
  export let align = "flex-start";
  /**
   * A css gap value. The
   * minimum space between
   * the clustered child
   * elements.
   */
  export let space = "var(--s1)";
</script>

<style>
    .cluster {
        display: flex;
        flex-wrap: wrap;
        justify-content: var(--justify);
        align-items: var(--align);
        gap: var(--space);
    }
</style>

<div class="cluster"
     style="--justify: {justify}; --align: {align}, --space: {space}">
  <slot />
</div>
