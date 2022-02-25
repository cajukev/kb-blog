<script>
  export let lang;
  const langs = ["en", "fr"];
  import { en, fr } from "./posts.json";
  let useLang;
  switch (lang) {
    case "fr":
      useLang = fr;
      break;
    case "en":
      useLang = en;
      break;
  }
  import Header from "../header.svelte";
</script>

<Header {lang} page={""} />
<main>
  {#each useLang.posts as post, i}
    <div class="post">
      <div class="showcase">
        <p class="part">{post.part}</p>
        <p class="title">{post.title}</p>
        <p class="tags">{post.tags}</p>
      </div>
      <div class="preview">
        <p class="intro">{post.intro}</p>
        <a href={(lang != langs[0]  ? lang+"/posts/"+i : "/posts/"+i) }>{useLang.a}</a>
      </div>
    </div>
  {/each}

  <br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br
  />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c<br />c
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
      }
    }
    @media (min-width: $breakpoint-3) {
      & .post {
        padding: 0;
        display: grid;
        grid-template-columns: auto 1fr;
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
