import { Card, CardBody, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

import useScreen from '@/hooks/useScreen';
import Article from '@/lib/article';

import styles from './ArticleCard.module.css';

export interface ArticleProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleProps) {
  const screen = useScreen();

  return (
    <Link href={`/a/${article.slug}`}>
      <Card
        className={styles.card}
        width={screen == 'mobile' ? '100%' : undefined}
      >
        <Image
          alt="Article thumbnail"
          className={styles.thumbnail}
          src={article.thumbnail}
          width="800"
          height="600"
        />

        <CardBody className={styles.body}>
          <Text className={styles.title}>{article.title}</Text>
          <Text className={styles.description}>{article.description}</Text>
        </CardBody>
      </Card>
    </Link>
  );
}
