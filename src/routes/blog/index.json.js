import { getPosts } from './_posts';

export function get(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const posts = getPosts().map(post => ({
    title: post.metadata.title,
    metadata: post.metadata,
    slug: post.slug,
  }));
  res.end(JSON.stringify(posts));
}
