<script>
  import PostHeader from "../../components/post-header.svelte"
  import {onMount} from "svelte"
  export let lang;
  export let post;
  const langs = ["en", "fr"];
  import { en, fr } from "./posts.json";
  let useLang;
  switch (lang) {
    case "fr":
      useLang = fr.posts[post];
      break;
    case "en":
      useLang = en.posts[post];
      break;
  }
  onMount(()=>{
    let elements = document.getElementsByClassName("post"+lang+post+"Img");

    console.log(elements)
    for(let i=0; i<useLang.medias.length; i++){
      elements[i].src = "/"+useLang.medias[i].media
    }
  })
</script>

<PostHeader post={post} lang={lang}></PostHeader>

<div class="post-container">
  <div class="content">
    {@html useLang.content}
  </div>

</div>

<style lang="scss">
  .post-container{
    padding: 1rem 1.5rem;
    border-right: 1px solid white;
    max-width: 40rem;
    & .content{
      
      
    }
  }
</style>