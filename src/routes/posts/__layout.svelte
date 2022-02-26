<script>
  import PostHeader from "/src/components/post-header.svelte";
  import PageTransition from "/src/components/utils/PageTransition.svelte";
  import { lang, page } from "/src/stores";
  $lang = "fr";
</script>

<PostHeader post={$page} lang={"en"} />
<div class="post-container">
  <PageTransition {$page}>
    <slot />
  </PageTransition>
</div>

<style lang="scss">
  .post-container {
    padding: 1rem 1.5rem;
    border-right: 1px solid white;
    width: 35rem;
    max-width: 100%;
    & .content {
      & :global(img) {
        width: 100%;
      }
    }
  }
</style>
