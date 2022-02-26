<script>
  import PostHeader from "/src/components/post-header.svelte";
  import PageTransition from "/src/components/utils/PageTransition.svelte";
  import { lang, page } from "/src/stores";
  $lang = "en";
</script>

<PostHeader post={$page} lang={"en"} />
<div class="post-wrapper">
    <slot />
</div>

<style lang="scss">
  
</style>
