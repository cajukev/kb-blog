<script>
  export let post;
  export let lang;
  import { en, fr } from "./header.json";
  import { en as en2, fr as fr2 } from "./pages/posts.json";
  import LangPicker from "./lang-picker.svelte";
  const langs = ["en", "fr"];
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

<div class="post-footer-container">
  <nav>
    <a href={lang == "en" ? "/" : "/fr"} title={useLang.return}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    </a>
    {#each useLang2.posts as entry, i}
      <a href={lang != langs[0] ? "/" + lang + "/posts/" + i : "/posts/" + i} class={i == post ? "active" : ""} title={entry.title}>
        {i}
      </a>
    {/each}
    <p href={""} class="ghost" title={useLang.soon}>
      {useLang2.posts.length}
    </p>
  </nav>
</div>

<style lang="scss">
  .post-footer-container {
    max-width: 100vw;
    & nav {
      padding: 0.5rem 1.5rem;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      display: flex;
      flex-direction: row;
      & svg {
        width: 70%;
      }
      & a,
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        width: 2.5rem;
        height: 2.5rem;
        font-size: $subheader-font-size;
        text-decoration: none;
        border-radius: 50%;
        margin-right: 1rem;
        filter: drop-shadow(0px 0.2rem 0.2rem rgba($color: #000000, $alpha: 0.1));
        transition: 0.25s ease transform, 1s ease background-color;
        &:not(.ghost, .active):hover {
          transform: scale(1.1);
        }
      }
      & a.active {
        background-color: $accent-color;
        pointer-events: none;
      }
      & p.ghost {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
</style>
