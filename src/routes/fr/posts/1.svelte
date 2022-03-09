<script>
  import { fr } from "/src/components/pages/posts.json";
  import { page } from "/src/stores";
  $page = 1;
  let text = fr.posts[1];
</script>

<svelte:head>
  <title>{text.title}</title>
  <meta name="description" content={text.intro}/>
</svelte:head>

<div class="post-container">
  <p class="part">{text.part}</p>
  <h2>{text.title}</h2>
  <!-- I present myself as an modern web developer. This means that 
    I use the technologies and techniques required to create websites 
    easily and quickly, with better performance than 99.9% of today's 
    websites. -->
  <p>{text.intro}</p>
  <div style="padding-top:33%" class="img-container content-spacing">
    <img src="/1/scores-800.jpg" alt="Les scores Lighthouse de ce site"/>
  </div>
  <p class="media-info">Les scores Lighthouse de ce site</p>
</div>

<p class="content-spacing">
  Le développement web n'a jamais été aussi facile. Ce qui nécessitait autrefois un investissement massif en temps et en
  argent peut désormais être reproduit par quiconque qui est prêt à apprendre ce processus moderne...
</p>
<h3 class="content-spacing">Le processus moderne:</h3>
<p class="content-spacing">
  Le principal obstacle du développement Web que le processus moderne permet de contourner est l'infrastructure des
  serveurs. En fait, l'un des noms qui a été donné à ce processus moderne est "sans serveur", bien que ce nom ne soit
  pas exact pour des raisons évidentes. Le nom vient du fait que le développeur moderne ne se préoccupe pas de mettre en
  place le serveur HTTP ou le serveur de base de données. Au lieu de cela, le processus moderne permet au développeur de
  se décharger de ces responsabilités sur des services d'hébergement tels que Vercel et Netlify pour servir le site web
  (ainsi que pour exécuter des fonctions sans serveur), et des services de base de données tels que Firebase ou FaunaDB
  pour stocker et récupérer les données.
</p>
<p class="content-spacing">
  En déchargeant l'infrastructure des serveurs à ces entreprises de confiance, le développeur moderne peut développer
  son site Web sans avoir à se soucier de l'évolutivité ou des attaques de sécurité. En plus, un bon nombre de ces
  services offrent un plan gratuit généreux qui suffit pour couvrir les projets de loisirs et les portfolios. En fait,
  le seul coût associé à ce blog que vous lisez en ce moment est le nom de domaine que j'ai acheté chez GoDaddy.com.
</p>
<h3 class="content-spacing">Une architecture ultra-rapide:</h3>
<p class="content-spacing">
  Les frameworks d'application Web modernes tels que Next.js ou SvelteKit ont évolué de manière à créer des sites Web
  composés à la fois de pages créées par le serveur et de pages générées de manière statique. Cela signifie que chaque
  fois qu'un utilisateur souhaite accéder à un site créé par l'un de ces frameworks, le réseau de diffusion de contenu
  (CDN) peut immédiatement servir une page préconstruite. Ce paradigme offre le délai d'accès au premier octet (TTFB -
  une mesure de performance de Lighthouse) le plus rapide. Cela signifie que tant que la page est optimisée pour les
  performances, elle se chargera rapidement.
</p>
<p class="content-spacing">
  Mon framework de prédilection est SvelteKit (Svelte) pour sa compilation au moment de la construction, qui permet un
  démarrage plus rapide, mais j'ai de l'expérience avec la plupart des frameworks frontaux populaires, notamment Next
  (React) et Nuxt (Vue).
</p>
<h3 class="content-spacing">L'importance de la vitesse des pages:</h3>
<p class="content-spacing">
  Les témoignages ne manquent pas pour vanter l'effet de l'amélioration de la vitesse des pages sur la rétention des
  utilisateurs et les conversions. Les gens aiment quand les sites Web se chargent rapidement, et les moteurs de
  recherche le savent. En juin 2021, Google a commencé à déployer une mise à jour de son algorithme de recherche qui
  prend en compte un ensemble de mesures de vitesse connues sous le nom de Core Web Vitals (CWV). En principe, les sites
  dont les CWV sont faibles sont pénalisés en termes de score de classement, ce qui peut entraîner une position plus
  basse sur la page de résultats du moteur de recherche (SERP). Il va sans dire que tout ce qui peut abaisser la
  position de votre site sur une SERP doit être évité.
</p>
<p class="content-spacing">
  Heureusement pour nous, il est assez facile de tester ces CWV. Pour ce faire, il suffit de se rendre sur le site
  <a href="https://pagespeed.web.dev/"> https://pagespeed.web.dev/</a> , d'entrer l'URL de la page que vous souhaitez tester
  et de cliquer sur "Analyze". Un test de performance Lighthouse sera alors effectué et les résultats seront affichés une
  fois le test terminé. La section des résultats vous montrera les résultats du test et la section des diagnostics vous indiquera
  les mesures à prendre pour améliorer votre score.
</p>
<p class="content-spacing">
  Une autre façon de tester CWV est de passer par Chrome Dev Tools. Ouvrez votre site Web dans Google Chrome -> Cliquez
  avec le bouton droit -> Inspecter -> Sélectionnez Lighthouse -> Sélectionnez les catégories et le dispositif ->
  Générer un rapport. Ici, Lighthouse peut tester plus que la performance. L'optimisation des meilleures pratiques, de
  l'accessibilité et du référencement aura également un effet positif sur le classement dans les SERP et l'indexation.
</p>
<p class="content-spacing">
  Mon objectif est de toujours viser un score Lighthouse de 4x100 afin d'offrir la meilleure expérience possible à
  l'utilisateur. C'est pourquoi j'ai investi du temps dans l'apprentissage de l'approche moderne du développement web.
</p>
<h3 class="content-spacing">Plus que du simple développement:</h3>
<p class="content-spacing">
  Avec suffisamment de temps et d'efforts, n'importe qui peut créer un site web complet aux performances étonnantes en
  utilisant les technologies modernes, mais le processus de création d'un site web est bien plus que du développement.
  Après tout, à quoi sert un développeur s'il n'y a rien à développer?
</p>
<p class="content-spacing">
  Je vois le développement web comme l'union de 5 concepts : La conception de l'expérience utilisateur, la conception de
  l'interface utilisateur, la création de contenu, le développement et le référencement. Bien que mon domaine
  d'expertise soit le développement, je me considère comme un expert dans les quatre autres concepts, puisque j'ai créé
  de nombreux sites Web à partir de rien.
</p>
<p class="content-spacing">
  J'ai l'intention de partager mes connaissances et des exemples concrets sur tous ces concepts tout au long de ce blog,
  en commençant par le prochain article dans lequel je présenterai mon processus d'optimisation des images.
</p>

<!-- General Post Styles is app.scss -->
