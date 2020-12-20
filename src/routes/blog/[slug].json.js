import { getPost } from './_posts';

const postLookup = new Map();

export function get(req, res, next) {
  const { slug } = req.params;

  if (!postLookup.has(slug)) {
    const post = getPost(slug);
    postLookup.set(slug, JSON.stringify(post));
  }

  const json = postLookup.get(slug);

  if (json) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(json);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: `Not found` }));
  }
}