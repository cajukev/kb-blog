<script>
  import Index from '/src/components/pages/index.svelte';
  import {lang, page} from '/src/stores'
  $lang = "en"
  $page = ""

  import { en } from "/src/components/header.json";
</script>

<svelte:head>
  <title>{en.title}</title>
  <meta name="description" content={en.title + ". "+en.desc}>
</svelte:head>

<Index lang={'en'}></Index>