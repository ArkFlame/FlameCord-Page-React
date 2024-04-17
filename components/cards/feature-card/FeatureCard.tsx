import { Card, CardBody, Heading, Text } from '@chakra-ui/react';

import Image from 'next/image';

import styles from './FeatureCard.module.css';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className={styles.card} bg={'#1d1d1d'}>
      <Image className={styles.icon} src={icon} alt={title} height="200" width="200" />

      <CardBody className={styles.body}>
        <Heading className={styles.title}>{title}</Heading>
        <Text className={styles.description}>{description}</Text>
      </CardBody>
    </Card>
  );
}
