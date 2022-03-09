<script>
  import { fr } from "/src/components/pages/posts.json";
  import { page } from "/src/stores";
  $page = 0;
  let text = fr.posts[0];
</script>

<svelte:head>
  <title>{text.title}</title>
  <meta name="description" content={text.intro}/>
</svelte:head>

<div class="post-container">
  <p class="part">{text.part}</p>
  <h2>{text.title}</h2>
  <!-- Greetings! My name is Kevin Brousseau and I am a web developer. Four years ago, I started learning modern web development and now I'm ready to start my career. In this blog, I will write about the things I've learned throughout these formative years. Read on and hopefully I can teach you a thing or two...-->
  <p>{text.intro}</p>
  <svg class="logo content-spacing" viewBox="0 0 128 89" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      class=""
      d="M1.06051 86.3107L7.21525 86.3281V19.2297H1.45532V2.4552H22.5128V86.328H99.0799C131.498 85.5591 136.524 
      40.8083 99.0799 40.7861C120.553 40.044 119.668 2.60677 99.0799 2.4552H76.4364V78.3582H53.4901L30.1616 40.7861L53.4901 
      2.4552H68.4052L45.459 40.7861L60.8011 65.7708"
      stroke="#090966"
      stroke-width="4"
      stroke-dasharray="688.246 20"
    />
  </svg>
  <p class="media-info">Mon logo animé</p>
</div>
<h3 class="content-spacing">Comment ça a commencé:</h3>
<p class="content-spacing">
  In 2015 I started my collegiate studies at Collège de Maisonneuve, in a Computer Science meets Natural Science
  pre-university program. This is where I learned to code, and I immediately knew that I wanted to work as a programmer.
  In 2017, I started my undergraduate degree at Concordia University (Montreal) in Computer Science, with the Computer
  Games option since I had always wanted to be a video game developer. Little did I know that I would soon fall in love
  with a different branch of development...
</p>
<p class="content-spacing">
  En 2015, j'ai commencé mes études collégiales au Collège de Maisonneuve, dans un programme pré-universitaire en
  Sciences informatiques et Mathématiques. C'est là que j'ai appris à coder, et j'ai immédiatement su que je voulais
  travailler comme programmeur. En 2017, j'ai commencé mon diplôme de premier cycle à l'Université Concordia (Montréal)
  en Sciences informatiques, avec l'option Jeux Vidéos puisque j'avais toujours voulu être un développeur de jeux vidéo.
  J'étais loin de me douter que j'allais bientôt tomber amoureux d'une autre branche du développement...
</p>
<p class="content-spacing">
  Pendant mon premier semestre à l'université, j'ai réalisé que mon DEC m'avait donné un avantage par rapport aux autres
  étudiants qui apprenaient eux-mêmes à coder pour la première fois. Compte tenu de cette avance, j'ai décidé de
  d'approfondir mes connaissances en matière de codage. Plus précisément, je voulais créer des expériences visuellement
  plaisantes, et comme je ne codais rien de tel pour mes cours d'introduction, j'ai décidé de découvrir une technologie
  différente - une technologie qui fusionne le codage et le visuel.
</p>
<p class="content-spacing">
  Quelques recherches sur Google plus tard, je suis tombé sur une chaîne Youtube appelée The Coding Train. Cette chaîne
  publie des tutoriels vidéo de codage créatif et j'ai commencé à regarder une série sur l'art algorithmique utilisant
  l'élément HTML canvas et Javascript. Plus précisément, Dan le chef d'orchestre utilise une bibliothèque appelée P5.js
  qui comprend de nombreuses fonctions pour le dessin et l'interactivité. En suivant ses tutoriels, j'ai pu créer des
  effets visuels simples en utilisant Javascript, mais je voulais voir l'art algorithmique que d'autres programmeurs
  plus expérimentés étaient capables de créer. Une recherche Google plus tard, j'ai atterri sur Codepen - un site Web
  qui allait m'apprendre que le Javascript ne se limite pas à l'art algorithmique...
</p>
<h3 class="content-spacing">Un paradis du front-end:</h3>
<p class="content-spacing">
  Selon Wikipedia : <br />"CodePen est une communauté en ligne pour tester et présenter des extraits de code HTML, CSS
  et JavaScript créés par les utilisateurs. Il fonctionne comme un éditeur de code en ligne et un environnement
  d'apprentissage open-source, où les développeurs peuvent créer des bouts de code, appelés 'stylos', et les tester."<br
  />
  J'ai passé des heures à parcourir les "stylos", absolument émerveillé par ce que cette communauté était capable de créer,
  en étudier le code et en essayant de comprendre comment le tout fonctionnait. Malheureusement, je ne connaissais rien au
  HTML ou au CSS et je ne comprenais vraiment que les "stylos" axés sur le Javascript.
</p>
<p class="content-spacing">
  HTML et CSS ne semblaient pas trop compliqués, mais ils étaient très différents de ce que j'avais appris à l'école.
  Heureusement pour moi, il y avait cette ressource en ligne gratuite appelée CodeAcademy (qui est maintenant un service
  payant) qui m'a appris les bases de ces langages frontaux. Très vite, j'ai commencé à écrire mes propres "stylos", à
  exprimer ma créativité à travers le code, et j'ai su que j'avais trouvé ma vocation : le développement frontal.
</p>
<p class="content-spacing">
  Après un certain temps de participation aux défis hebdomadaires et d'affinement de mes compétences, j'ai finalement
  voulu présenter mes créations sans avoir à me connecter à Codepen. Heureusement, il existe une option permettant
  d'exporter un "stylo" sous forme de fichiers statiques. Tout ce dont j'avais besoin à partir de là était un moyen
  d'héberger ce site Web. Il y avait de multiples options, mais celle vers laquelle j'ai gravité au début était
  Netlify...
</p>
<h3 class="content-spacing">La révolution JAMstack:</h3>
<p class="content-spacing">
  Netlify est à l'origine un service d'hébergement de sites web pour les sites statiques. Leur réseau de diffusion de
  contenu (Content Delivery Network) offre une haute disponibilité et des performances élevées pour la distribution de
  contenu Web. Netlify semblait être une option adéquate pour héberger mon code puisque je construisais des sites
  statiques. Cependant, Netlify était en train d'étendre ses services pour inclure cette chose appelée fonctions sans
  serveur, inventant le terme JAMstack et dépensant des ressources pour populariser le terme.
</p>
<p class="content-spacing">
  Selon Wikipedia :<br />
  "JAMstack est une architecture de développement web cloud-native basée sur du code JavaScript côté client, des API réutilisables
  et du contenu balisé. Dans sa forme la plus pure, l'idée de JAMstack est qu'une application web est préconstruite en pages
  statiques, utilisant le contenu et le code pour générer la sortie." <br /> En gros, JAMstack permet de passer du back-end
  au front-end. En lisant davantage sur les capacités de l'architecture JAMstack, j'ai compris que les sites Web peuvent
  être complexes et centrés sur les données sans avoir à acquérir et à mettre en place une infrastructure de back-end. Au
  contraire, JAMstack exige des compétences différentes...
</p>
<p class="content-spacing">
  Pour qu'un service comme Netlify puisse servir votre site web, vous devez lui fournir un site statique. Cela signifie
  que les données dynamiques, comme les documents dans une base de données, doivent être cherchées et ajoutées au code
  au moment de la construction. C'est ce que font les générateurs de sites statiques (GSS). Les GSS sont des cadres
  d'applications web et sont généralement construits au-dessus d'un langage front-end. Parmi les exemples, citons Next
  pour React et Nuxt pour Vue. Je savais que si je devais trouver un emploi dans le développement web, je devrais
  apprendre à travailler avec ces frameworks - alors c'est ce que j'ai fait...
</p>
<h3 class="content-spacing">Où j'en suis aujourd'hui :</h3>
<p class="content-spacing">
  Ces jours-ci, je continue à apprendre de nouveaux GSS au fur et à mesure qu'ils deviennent populaires afin de
  comprendre leurs cas d'utilisation et les problèmes qu'ils résolvent. En outre, j'apprends également les nouvelles API
  de base de données pour stocker et récupérer les données de mes sites. À ce stade, je me considère comme très
  compétent pour développer des sites Web non seulement avec l'architecture JAMstack, mais aussi avec toute pile
  technologique utilisant HTML et CSS.
</p>
<p class="content-spacing">
  En fait, je me qualifierais de développeur web généraliste. J'ai passé beaucoup de temps à absorber des informations
  sur les différentes facettes du développement web, de la conception de l'expérience utilisateur à l'optimisation des
  moteurs de recherche. C'est l'ensemble de ces informations, conjugué aux pouvoirs de la pile JAM, qui me donne
  confiance dans ma capacité à concevoir et à développer des projets Web complets et très performants, du début à la
  fin.
</p>
<p class="content-spacing">
  Si vous voulez connaître quelques trucs et astuces de développement web que j'ai appris et découvert au fil des ans,
  continuez à lire...
</p>

<!-- General Post Styles is app.scss -->
<style lang="scss">
  .post-container {
    display: flex;
    flex-direction: column;
    & svg.logo {
      height: 8rem;
      animation: lineIn 20s linear infinite;
    }
  }
</style>
