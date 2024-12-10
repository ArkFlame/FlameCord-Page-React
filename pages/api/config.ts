import type { NextApiRequest, NextApiResponse } from 'next';

import { getConfig } from '@/lib/articleFetcher';

type ResponseData = {
  config?: String;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  const config: String = getConfig();
  if (!config) {
    res.status(404).json({ error: 'Config not found' });
    return;
  }

  res.status(200).json({ config: config });
}
