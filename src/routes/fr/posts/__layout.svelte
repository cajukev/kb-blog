<script>
  import PostHeader from "/src/components/post-header.svelte";
  import PostNav from "/src/components/post-nav.svelte";
  import PageTransition from "/src/components/utils/PageTransition.svelte";
  import { lang, page } from "/src/stores";
  $lang = "fr";
</script>

<PostHeader post={$page} lang={"fr"} />
<div class="post-wrapper">
    <slot />
</div>
<PostNav post={$page} lang={"fr"} />
<style lang="scss">
  
</style>
