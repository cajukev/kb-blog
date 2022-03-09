<script>
  export let lang;
  const langs = ["en", "fr"];
  import { en, fr } from "../header.json";
  import { en as en2, fr as fr2 } from "./posts.json";
  import Header from "../header.svelte";
  let useLang;
  let useLang2;
  switch (lang) {
    case "fr":
      useLang = fr;
      useLang2 = fr2;
      break;
    case "en":
      useLang = en;
      useLang2 = en2;
      break;
  }
  
</script>

<Header {lang} page={""} />
<main>
  {#each useLang2.posts as post, i}
    <div class="post">
      <div class="showcase">
        <p class="part">{post.part}</p>
        <h2 class="title">{post.title}</h2>
        <p class="tags">{post.tags}</p>
      </div>
      <div class="preview">
        <p class="intro">{post.intro}</p>
        <a href={(lang != langs[0]  ? lang+"/posts/"+i : "/posts/"+i) }>{useLang2.a}</a>
      </div>
    </div>
  {/each}
  <div class="post">
    <div class="showcase">
      <p class="part">{useLang2.part + " " + useLang2.posts.length}</p>
      <p class="title">{useLang2.soon}</p>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    & .post {
      border-bottom: 1px solid white;
      padding: 1rem;

      & .showcase {
        & .part {
          font-weight: 300;
        }
        & .title {
          margin-top: 0.25rem;
          font-size: $subheader-font-size;
          font-weight: 400;
        }
        & .tags {
          margin-top: 0.5rem;
          opacity: 0.7;
          font-weight: 300;
          font-style: italic;
        }
      }
      & .preview {
        margin-top: 1rem;
        max-width: 35rem;
        & .intro{
          margin-bottom: 0.5rem;
        }
      }
    }
    @media (min-width: $breakpoint-3) {
      & .post {
        padding: 0;
        display: grid;
        grid-template-columns: 25rem 1fr;
        & .showcase {
          padding: $page-ml;
          border-right: 1px solid white;
          & .tags {
            margin-top: 1rem;
          }
        }
        & .preview {
          padding: $page-ml;
          margin-top: 0;
          
        }
      }
    }
  }
</style>
