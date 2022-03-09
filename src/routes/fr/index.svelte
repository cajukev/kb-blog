<script>
  import Index from '/src/components/pages/index.svelte';
  import {lang, page} from '/src/stores'
  $lang = "fr"
  $page = ""

  import { fr } from "/src/components/header.json";
</script>
  
<svelte:head>
  <title>{fr.title}</title>
  <meta name="description" content={fr.title + ". "+fr.desc} />
</svelte:head>

<Index lang={"fr"}></Index>

