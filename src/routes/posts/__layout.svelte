<script>
  import PostHeader from "/src/components/post-header.svelte";
  import PostNav from "/src/components/post-nav.svelte";
  import { lang, page } from "/src/stores";
  $lang = "en";
</script>

<PostHeader post={$page} lang={"en"} />
<div class="post-wrapper">
    <slot />
</div>
<PostNav post={$page} lang={"en"} />
<style lang="scss">
  
</style>
