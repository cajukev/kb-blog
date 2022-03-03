<script>
  import { en } from "/src/components/pages/posts.json";
  import { page } from "/src/stores";
  $page = 1;
  let text = en.posts[1];
</script>

<div class="post-container">
  <p class="part">{text.part}</p>
  <h2>{text.title}</h2>
  <!-- I present myself as an modern web developer. This means that 
    I use the technologies and techniques required to create websites 
    easily and quickly, with better performance than 99.9% of today's 
    websites. -->
  <p>{text.intro}</p>
  <div style="padding-top:30%" class="img-container content-spacing">
    <img src="/KB.svg" />
  </div>
  <p class="media-info">The mobile lighthouse scores of this site</p>
</div>

<p class="content-spacing">
  Web development has never been easier. What once required a massive investment of time and money can now be replicated
  by anyone willing to learn this modern process...
</p>
<h3 class="content-spacing">The modern process:</h3>
<p class="content-spacing">
  The main web dev hurdle that the modern process skips over is server infrastructure. In fact, one of the names that
  was given to this modern process is 'serverless', though that name isn't acuurate for obvious reasons. The name stems
  from the fact that the modern developer doesn't concern themself with setting up the HTTP server or the database
  server. Instead, the modern process allows the devolper to offload these responsibilities to hosting services such as
  Vercel and Netlify for serving the website (as well as running serverless functions), and database services such as
  Firebase or FaunaDB for storing and retrieving data.
</p>
<p class="content-spacing">
  By offloading server infrastructure to these trusted companies, the modern developer can develop their website without
  needing to worry about scalability or security attacks. What's more: many of these services offer a generous free plan
  that are enough to cover hobby projects and portfolios. In fact, the only cost associated to this blog you're reading
  right now is the domain name that I bought from GoDaddy.com.
</p>
<h3 class="content-spacing">A blazing fast architecture:</h3>
<p class="content-spacing">
  
</p>

<!-- General Post Styles is app.scss -->
