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

<div class="post-header-container">
  <svg viewBox="0 0 1800 107" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 106H1800" stroke="white" />
    <path d="M0 86H1800" stroke="white" stroke-width="3" />
    <path d="M0 66H1800" stroke="white" stroke-width="5" />
    <path d="M0 46H1800" stroke="white" stroke-width="7" />
    <path d="M0 26H1800" stroke="white" stroke-width="9" />
    <path d="M0 6H1800" stroke="white" stroke-width="11" />
  </svg>
  <div class="links">
    <a href={lang == "en" ? "/" : "/fr"}>
      {useLang.title}
    </a>
    <LangPicker {lang} />
  </div>

  <nav>
    {#each useLang2.posts as entry, i}
      <a href={lang != langs[0] ? "/" + lang + "/posts/" + i : "/posts/" + i} class={i == post ? "active" : ""}>
        {i}
      </a>
    {/each}
  </nav>
</div>

<style lang="scss">
  .post-header-container {
    & .links {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid white;
      & a {
        font-weight: 700;
        text-decoration: none;
        margin-right: 2rem;
        font-size: $subheader-font-size;
      }
    }
    & nav {
      padding: 0.5rem 1.5rem;
      border-bottom: 1px solid white;
      display: flex;
      flex-direction: row;
      & a {
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
        &.active {
          background-color: $accent-color;
        }
      }
    }
  }
</style>
