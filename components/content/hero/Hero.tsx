import { Flex, FlexProps } from '@chakra-ui/react';

import PageSeparator from '../page-separator';
import styles from './Hero.module.css';

export function Hero({ children, bgImage, ...extraProps }: FlexProps) {
  return (
    <Flex {...extraProps} bgImage={bgImage} className={styles.hero}>
      <Flex className={styles.content}>{children}</Flex>
      <PageSeparator />
    </Flex>
  );
}
