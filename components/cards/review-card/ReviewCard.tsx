import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

import Image from 'next/image';

import { Review } from '@/config/reviews';

import styles from './ReviewCard.module.css';

export interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Flex className={styles.card}>
      <Image
        className={styles.avatar}
        src={review.avatar}
        alt={review.username + "'s Avatar"}
        width="96"
        height="96"
      />
      <Flex className={styles.data}>
        <Flex className={styles.header}>
          <Text className={styles.username}>{review.username}</Text>

          <Flex className={styles.stars}>
            {Array.from({ length: review.rating }).map((_, i) => (
              <Icon key={i} className={styles.star}>
                <FaStar color={'yellow'} />
              </Icon>
            ))}
          </Flex>
        </Flex>
        <Text className={styles.comment}>{review.comment}</Text>
      </Flex>
    </Flex>
  );
}
