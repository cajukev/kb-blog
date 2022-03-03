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
    <a href={lang == "en" ? "/" : "/fr"}>
      <svg viewBox="0 0 24 24" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    </a>
    {#each useLang2.posts as entry, i}
      <a href={lang != langs[0] ? "/" + lang + "/posts/" + i : "/posts/" + i} class={i == post ? "active" : ""}>
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
