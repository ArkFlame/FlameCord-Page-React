import { Flex, Text } from '@chakra-ui/react';

import styles from './MiniFeature.module.css';

export interface MiniFeatureProps {
  title: string;
  description: string;
}

export function MiniFeature({ title, description }: MiniFeatureProps) {
  return (
    <Flex className={styles.card}>
      <Text className={styles.title}>{title}</Text>
      <Text className={styles.description}>{description}</Text>
    </Flex>
  );
}
