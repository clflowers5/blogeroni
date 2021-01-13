<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  .heading-container {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1.75rem;
  }

  .heading-container .publish-date {
    font-style: italic;
  }

  .heading-container h1 {
    margin-bottom: 0;
  }
</style>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>

<div class="heading-container">
  <h1>{post.metadata.title}</h1>
  <div class="publish-date">{post.metadata.dateString}</div>
</div>

<div class="prose lg:prose-xl">
  {@html post.html}
</div>
