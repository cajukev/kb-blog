<script>
  export let post;
  export let lang;
  import { en, fr } from "./header.json";
  import { en as en2, fr as fr2 } from "./pages/posts.json";
  import LangPicker from "./lang-picker.svelte";
  import PostNav from "./post-nav.svelte";
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
  <div class="langPicker">
    <LangPicker {lang} />
  </div>

  <div class="links">
    <a href={lang == "en" ? "/" : "/fr"}>
      {useLang.title}
    </a>
  </div>

  <PostNav {post} {lang} />
</div>

<style lang="scss">
  .post-header-container {
    max-width: 100vw;
    & .links {
      padding: 0.5rem 1.5rem 1rem 1.5rem;
      & a {
        font-weight: 700;
        text-decoration: none;
        margin-right: 2rem;
        font-size: $subheader-font-size;
      }
    }
    & .langPicker{
      display: block;
      margin-left: 1.5rem;
      padding-top: 0.5rem;
      
    }
  }
</style>
