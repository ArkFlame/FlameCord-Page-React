import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import useScreen from '@/hooks/useScreen';

import styles from './Layout.module.css';
import Navbar from './navbar';
import { NavSocialLinks } from './navbar/Navbar';

export function Layout({ children }: PropsWithChildren) {
  const screen = useScreen();
  const ref = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useRouter();

  const isHome = pathname === '/';
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const page = ref.current;
    if (!page) return;

    page.addEventListener('scroll', () => {
      const newScrolled = page.scrollTop >= 200;
      setScrolled(newScrolled);
    });
  }, [ref]);

  useEffect(() => {
    const page = ref.current;
    if (!page) return;

    page.scrollTop = 0;
  }, [pathname]);

  return (
    <Flex className={styles.layout}>
      <Navbar scrolled={scrolled} />
      <Box className={isHome ? styles['page-home'] : styles.page} ref={ref}>
        {children}

        <Flex className={styles.footer}>
          {screen == 'mobile' && (
            <Flex>
              <NavSocialLinks />
            </Flex>
          )}

          <Text className={styles['footer-text']}>
            © {currentYear} FlameCord by LinsaFTW, Website designed with ❤️ by{' '}
            <Link isExternal href="https://sammwy.com/" color={'pink.400'}>
              Sammwy
            </Link>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
