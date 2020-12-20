import fs from 'fs';
import path from 'path';
import marked from 'marked';
import hljs from 'highlight.js';

function getPosts() {
  return fs.readdirSync('posts')
    .filter(file => path.extname(file) === '.md')
    .map(file => file.slice(0, -3))
    .map(getPost).sort((a, b) => {
      return a.metadata.pubdate < b.metadata.pubdate ? 1 : -1;
    });
}

function getPost(slug) {
  const file = `posts/${slug}.md`;
  if (!fs.existsSync(file)) {
    return null;
  }

  const markdown = fs.readFileSync(file, 'utf-8');
  const { content, metadata } = processMarkdown(markdown);

  const date = new Date(`${metadata.pubdate} EDT`); // ???
  metadata.dateString = date.toDateString();

  const renderer = new marked.Renderer();
  renderer.code = (source, lang) => {
    const { value: highlighted } = hljs.highlight(lang, source);
    return `<pre class=${lang}><code>${highlighted}</code></pre>`;
  }

  const html = marked(content, { renderer });

  return {
    slug,
    metadata,
    html,
  };
}

// I think gray-matter does a bit of this
function processMarkdown(markdown) {
  const regex = /---\n([\s\S]+?)\n---/;
  const match = regex.exec(markdown);
  const frontMatter = match[1];
  const content = markdown.slice(match[0].length);

  const metadata = {};
  frontMatter.split('\n').forEach(pair => {
    const colonIndex = pair.indexOf(':');
    metadata[pair.slice(0, colonIndex).trim()] = pair
      .slice(colonIndex + 1)
      .trim();
  });

  return { metadata, content };
}

export {
  getPost,
  getPosts,
};
