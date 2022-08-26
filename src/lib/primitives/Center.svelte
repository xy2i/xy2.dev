<script lang="ts">
  /**
   * A css max-width value
   */
  export let max = "var(--measure)";
  /**
   * text-align: center
   */
  export let andText = false;
  /**
   * Minimum space on either side of the content
   */
  export let gutters = 0;
  /**
   * Center child elements based on their content width
   */
  export let intrinsic = false;
</script>

<style>
    .center {
        box-sizing: content-box;
        display: block;
        margin-inline: auto;
        max-inline-size: var(--max);
    }

    .center.gutters {
        padding-inline-start: var(--gutters);
        padding-inline-end: var(--gutters);
    }
    .center.andText {
        text-align: center;
    }
    .center.intrinsic {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div class="center"
     class:gutters={gutters !== 0}
     class:andText={andText}
     class:intrinsic={intrinsic}
     style="--gutters: {gutters}; --max: {max}">
  <slot />
</div>
