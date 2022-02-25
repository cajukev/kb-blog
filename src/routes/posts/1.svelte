<script>
  import Post from '/src/components/pages/post.svelte';
  import {lang, page} from '/src/stores'
  $lang = "en"
  $page = ""
</script>
  
<Post lang={'en'} post={1}></Post>