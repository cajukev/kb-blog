<script>
  import { en } from "/src/components/pages/posts.json";
  import { page } from "/src/stores";
  $page = 0;
  let text = en.posts[0];
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
  <p class="media-info">My Animated Logo</p>
</div>
<h3 class="content-spacing">How it all began:</h3>
<p class="content-spacing">
  In 2015 I started my collegiate studies at Collège de Maisonneuve, in a Computer Science meets Natural Science
  pre-university program. This is where I learned to code, and I immediately knew that I wanted to work as a programmer.
  In 2017, I started my undergraduate degree at Concordia University (Montreal) in Computer Science, with the Computer
  Games option since I had always wanted to be a video game developer. Little did I know that I would soon fall in love
  with a different branch of development...
</p>
<p class="content-spacing">
  During my first semester in University, I realized that my college degree had given me an advantage compared to the
  other students who were themselves learning to code for the first time. Given this head start, I decided that I would
  take it upon myself to deepen my coding knowledge. Specifically I wanted to create visually pleasing experiences, and
  since I wasn't coding anything of the sort for my introductory classes, I took it upon myself to discover a different
  technology - one that merged coding and visuals.
</p>
<p class="content-spacing">
  A few Google searches later I landed on a Youtube channel called The Coding Train. This channel posts creative coding
  video tutorials and I started watching a series about algorithmic art using the HTML canvas element and Javascript.
  Specifically, Dan the conductor uses a library called P5.js which includes notbaly functions for drawing and
  interactivity. As I followed his tutorials, I was able to create simple visual effects using Javascript but I wanted
  to see the algorithmic art other more experienced programmers were able to create. One Google search later I landed on
  Codepen - a website that would teach me there is more to Javascript than algorithmic art...
</p>
<h3 class="content-spacing">A front-end haven:</h3>
<p class="content-spacing">
  According to Wikipedia: <br />"CodePen is an online community for testing and showcasing user-created HTML, CSS and
  JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers
  can create code snippets, called 'pens', and test them."<br /> I spent hours browsing 'pens' in absolute awe of what this
  community was able to create, studying the code and trying to understand how everything worked. Unfortunately, I knew nothing
  about HTML or CSS so I only really understood Javascript focused 'pens'.
</p>
<p class="content-spacing">
  HTML and CSS didn't seem too complicated but they were quite different from what I had learned in school. Luckily for
  me, there was this free online resource called CodeAcademy (which is now a paid service) that taught me the basics of
  these front-end languages. Soon enough I started writing my own 'pens', expressing my creativity through code, and I
  knew that I found my calling - front-end development.
</p>
<p class="content-spacing">
  After a while of participating in weekly challenges and sharpening my skills, I eventually wanted to be able to
  showcase my creations without linking to Codepen. Luckily, there is an option to export a 'pen' as static files. All I
  needed from there was a way to host this website. There were multiple options, but the one I gravitated towards at the
  beginning was Netlify...
</p>
<h3 class="content-spacing">The JAMstack revolution:</h3>
<p class="content-spacing">
  Netlify is originally a website hosting service for static websites. Their Content Delivery Network provides high
  availability and performance for distributing web content. Netlify felt like an adequate option for hosting my code
  since I was building static sites. However, Netlify was in the process of expanding their services to include this
  thing called serverless functions, coining the term JAMstack and spending resources popularizing the term.
</p>
<p class="content-spacing">
  According to Wikipedia:<br />
  "JAMstack is a cloud-native web development architecture based on client-side JavaScript code, reusable APIs, and markup
  content. In its purest form, the idea of JAMstack is that a web application is pre-built into static pages, using content
  and code to generate the output."<br />
  Basically, JAMstack provides a shift in focus from the back-end to the front-end. Reading more about the capabilities of
  the JAMstack architecture showed me that websites can be intricate and data-centric without having to acquire and set up
  backend infrastructure. Instead JAMstack demands a different skill set...
</p>
<p class="content-spacing">
  For a service like Netlify to be able to serve your website, you must provide it with a static site. This means that
  dynamic data such as documents in a database must be queried and added to the code at build time. Static Site
  Generators (SSGs) do just that. SSGs are web application frameworks and generally built on top of a front-end
  language. Examples include Next for React and Nuxt for Vue. I knew that if I were to find a job in web development I
  would need to learn how to work with these frameworks - so I did...
</p>
<h3 class="content-spacing">Where I'm at today:</h3>
<p class="content-spacing">
  These days I'm still learning new SSGs as they become popular in order to understand their use cases and the problems
  they solve. Not only that, I'm also learning about new Database APIs for storing and retrieving data for my sites. At
  this point I consider myself very proficient at developing websites not only with the JAMstack architecture, but also
  with any technology stack that uses HTML and CSS.
</p>
<p class="content-spacing">
  I would in fact call myself quite the generalist web developer. I've spent quite a lot of time absorbing information
  about many different facets of web development, from User Experience design to Search Engine Optimization. It's all of
  this information in conjuncture with the powers of the JAMstack that makes me confident in my ability to design and
  develop feature-complete and highly performant web project from start to finish.
</p>
<p class="content-spacing">
  If you want to learn some web development tips and tricks that I've learned and discovered over the years then keep on
  reading...
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
