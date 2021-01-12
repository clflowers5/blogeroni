<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then(response => response.json())
      .then(posts => ({ posts }));
  }
</script>

<script>
  export let posts;
</script>

<style type="text/scss">
  @import "../../styles/variables.scss";

  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }

  .post {
    border-top: 1px solid $color-tertiary;
    padding: 0.5rem 0;
  }

  .categories {
    margin-top: 0.5rem;
  }

  .category {
    margin-right: 0.5rem;
  }

  .pill {
    // todo: colors and shiz.
    background-color: $color-tertiary;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li>
      <div class="post">
        <a rel="prefetch" href="blog/{post.slug}">{post.metadata.pubdate} - {post.title}</a>
        <div class="categories">
          {#each post.metadata.categories as category}
            <span class="category pill">{category}</span>
          {/each}
        </div>
      </div>
    </li>
  {/each}
</ul>
