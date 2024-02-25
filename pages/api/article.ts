import type { NextApiRequest, NextApiResponse } from 'next';

import Article from '@/lib/article';
import { getArticle } from '@/lib/articleFetcher';

type ResponseData = {
  article?: Article;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const articleSlug = req.query.slug;

  if (!articleSlug) {
    res.status(400).json({ error: 'Missing article slug (?slug=...)' });
    return;
  }

  const article = getArticle(articleSlug as string);
  if (!article) {
    res.status(404).json({ error: 'Article not found' });
    return;
  }

  res.status(200).json({ article });
}
