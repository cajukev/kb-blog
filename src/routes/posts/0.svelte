<script>
  import { en } from "/src/components/pages/posts.json";
  import {page} from '/src/stores';
  $page = 0;
  let text = en.posts[0]
</script>

<div class="post-container">
  <p class="part">{text.part}</p>
  <p class="title">{text.title}</p>
  <div style="padding-top:70%" class="img-container">
    <img  src="/KB.svg"/>
  </div>
</div>
# Hey

