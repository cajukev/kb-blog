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
  Modern web application frameworks such as Next.js or SvelteKit have evolved to create websites consisting of both
  server-rendered pages and statically generated pages. This means that every time a user wants to access a site created
  by one of these frameworks the Content Delivery Network (CDN) can immediately serve a pre-built page. This paradigm
  offers the fastest Time To First Byte (TTFB - a Lighthouse performance metric). This means that as long as the page is
  optimized for performance it will load quickly.
</p>
<p class="content-spacing">
  My framework of choice is SvelteKit (Svelte) for its build-time compilation which leads to a faster startup, but I
  have experience with most popular front-end frameworks including Next (React) and Nuxt (Vue).
</p>
<h3 class="content-spacing">The importance of page speed:</h3>
<p class="content-spacing">
  There is no lack of testimonies praising the effect of improving page speed on user retention and conversions. People
  like it when websites load quickly, and search engines know this. In June 2021 Google started rolling out an update to
  their search algorithm which considers a set of speed metrics known as Core Web Vitals (CWV). Basically, sites with
  poor CWV get punished in terms of ranking score, thus possibly resulting in a lower position on the Search Engine
  Result Page (SERP). Needless to say, anything that lowers your site's position on a SERP should be avoided.
</p>
<p class="content-spacing">
  Luckily for us, testing these CWV is quite easy. One way to do this is to visit
  <a href="https://pagespeed.web.dev/"> https://pagespeed.web.dev/</a> , enter the URL of the page you wish to test and press
  'Analyze'. This will preform a Lighthouse Performance test and show the results once it's completed. The results section
  will show you the results of the test and the diagnostics section will show you steps you can take to improve your score.
</p>
<p class="content-spacing">
  Another way to test CWV is through Chrome Dev Tools. Have your website open in Google Chrome -> Right Click -> Inspect
  -> Select Lighthouse -> Select Categories & Device -> Generate report. Here, Lighthouse can test more than just
  Performance. Maximizing Best Practices, Accessibility and SEO will also have a positive effect on SERP ranking as well
  as indexing.
</p>
<p class="content-spacing">
  My goal is to always strive for a 4x100 Lighthouse score in order to offer the best possible experience to the user.
  That's why I've invested time into learning the modern approach to web development.
</p>
<h3 class="content-spacing">More than just development:</h3>
<p class="content-spacing">
  With enough time and effort anyone can create a fully-featured website with amazing performance using modern
  technologies, but the website creation process is much more than development. After all what good is a developer if
  there is nothing to develop?
</p>
<p class="content-spacing">
  I see web development as the union of 5 concepts: User Experience Design, User Interface Design, Content Creation,
  Development and SEO. While my area of expertise is development, I would still consider myself quite adept at the other
  4 concepts given the fact that I've created many websites from scratch.
</p>
<p class="content-spacing">
  I plan on sharing knowledge and concrete examples on all of these concepts throughout this blog starting with the next
  post which will cover my
</p>

<!-- General Post Styles is app.scss -->
