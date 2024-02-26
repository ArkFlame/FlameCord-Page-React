import { Card, CardBody, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

import useScreen from '@/hooks/useScreen';
import Article from '@/lib/article';

import styles from './ArticleCard.module.css';

import { useRouter } from 'next/router'; // Import useRouter
import { useEffect } from 'react'; // Import useEffect

export interface ArticleProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleProps) {
  const screen = useScreen();
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0); // Scroll to top on route change
    };

    router.events.on('routeChangeComplete', handleRouteChange); // Listen to route changes

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange); // Cleanup event listener
    };
  }, [router.events]); // Depend on router.events

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
        />

        <CardBody className={styles.body}>
          <Text className={styles.title}>{article.title}</Text>
          <Text className={styles.description}>{article.description}</Text>
        </CardBody>
      </Card>
    </Link>
  );
}
