import { Flex, Text } from '@chakra-ui/react';

import MarkdownRenderer from '@/components/utils/MarkdownRenderer';
import { FAQ } from '@/config/faq';

import styles from './FaqCard.module.css';

export interface FaqCardProps {
  faq: FAQ;
}

export function FaqCard({ faq }: FaqCardProps) {
  return (
    <Flex className={styles.card}>
      <Text className={styles.question}>
        <span style={{ color: 'gray' }}>Q:</span> {faq.question}
      </Text>
      <MarkdownRenderer>{faq.answer}</MarkdownRenderer>
    </Flex>
  );
}
