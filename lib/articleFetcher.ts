import fs from 'fs';
import path from 'path';

import Article from './article';

let cached: Article[] | null = null;
let cachedContent: { [key: string]: string } = {};

function resolveArticles() {
  const dirRelativeToPublicFolder = 'articles';
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const children = fs.readdirSync(dir);

  const articles = children.map((child) => {
    const jsonPath = path.join(child, 'article.json');
    const rawJson = fs.readFileSync(path.join(dir, jsonPath), 'utf-8');
    const json = JSON.parse(rawJson);
    return {
      ...json,
      slug: child,
      thumbnail: `/articles/${child}/thumbnail.jpg`,
    };
  });

  return articles;
}

export function getArticles() {
  if (cached) {
    return cached;
  }

  const articles = resolveArticles();
  cached = articles;
  return articles;
}

export function getArticle(slug: string): Article | null {
  const articles = getArticles();
  const article = articles.find(
    (article) => article.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (article) {
    if (cachedContent[article.slug]) {
      article.content = cachedContent[article.slug];
    } else {
      const contentPath = path.resolve(
        './public',
        'articles',
        article.slug,
        'content.md',
      );
      const content = fs.readFileSync(contentPath, 'utf-8');
      cachedContent[article.slug] = content;
      article.content = content;
    }
  }

  return article || null;
}

export function getLastArticles(limit: number) {
  const articles = getArticles();
  const sorted = articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return sorted.slice(0, limit);
}

let cachedConfigContent: String | null = null;

export function getConfig() {
  if (cachedConfigContent != null) {
    return cachedConfigContent;
  }
  const contentPath = path.resolve(
    './public',
    'config.md',
  );
  const content = fs.readFileSync(contentPath, 'utf-8') || "Contact the server administrator.";
  cachedConfigContent = content;
  return content;
}