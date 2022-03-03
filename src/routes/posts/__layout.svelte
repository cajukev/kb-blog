<script>
  import PostHeader from "/src/components/post-header.svelte";
  import PostFooter from "/src/components/post-footer.svelte";
  import { lang, page } from "/src/stores";
  $lang = "en";
</script>

<PostHeader post={$page} lang={"en"} />
<div class="post-wrapper">
    <slot />
</div>
<PostFooter post={$page} lang={"en"} />
<style lang="scss">
  
</style>
