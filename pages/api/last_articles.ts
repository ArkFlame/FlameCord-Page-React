import type { NextApiRequest, NextApiResponse } from 'next';

import Article from '@/lib/article';
import { getLastArticles } from '@/lib/articleFetcher';

type ResponseData = {
  articles: Article[];
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  res.status(200).json({ articles: getLastArticles(6) });
}
