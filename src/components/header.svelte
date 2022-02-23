<script>
  export let lang;
  export let page;
  import { en, fr } from "./header.json";
  import LangPicker from './lang-picker.svelte'
  let useLang;
  switch (lang) {
    case "fr":
      useLang = fr;
      break;
    case "en":
      useLang = en;
      break;
  }
</script>

<div class="header-container">
  <svg viewBox="0 0 1800 107" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 106H1800" stroke="white" />
    <path d="M0 86H1800" stroke="white" stroke-width="3" />
    <path d="M0 66H1800" stroke="white" stroke-width="5" />
    <path d="M0 46H1800" stroke="white" stroke-width="7" />
    <path d="M0 26H1800" stroke="white" stroke-width="9" />
    <path d="M0 6H1800" stroke="white" stroke-width="11" />
  </svg>
  <div class="text">
    <LangPicker {lang}></LangPicker>
    <h1>{useLang.title}</h1>
    <p>{useLang.desc}</p>
  </div>
</div>

<style lang="scss">
  .header-container {
    border-bottom: 1px solid white;
    padding-bottom: 1rem;
    & .text {
      margin-top: 1rem;
      padding: 0 1rem;
      & h1 {
        margin-top: 1.5rem;
      }
      & p {
        margin-top: 1.5rem;
        font-size: $mini-font-size;
      }
      & svg {
        margin-top: 0.3rem;
        height: 4rem;
        width: 100%;
      }
    }
    @media (min-width: $breakpoint-3) {
      & .text {
        margin-top: 1rem;
        padding: 0 $page-ml;
        & h1 {
          margin-top: 0.5rem;
        }
        & p {
          margin-top: 1rem;
        }
      }
    }
  }
</style>
