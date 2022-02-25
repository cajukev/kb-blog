<script>
  import Post from '/src/components/pages/post.svelte';
  import {lang, page} from '/src/stores'
  $lang = "fr"
  $page = ""
</script>
  
<Post lang={'fr'} post={0}></Post>