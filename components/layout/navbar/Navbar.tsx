import { Button, Flex, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { JSXElementConstructor, PropsWithChildren, ReactElement } from 'react';
import {
  FaDiscord,
  FaInstagram,
  FaReddit,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';

import Image from 'next/image';

import { PRODUCT_LINK } from '@/config/product';
import { DISCORD, INSTAGRAM, REDDIT, TIKTOK, TWITTER } from '@/config/social';
import useScreen from '@/hooks/useScreen';

import styles from './Navbar.module.css';

// Link.
interface NavLink extends PropsWithChildren {
  href: string;
}

export function NavLink({ children, href }: NavLink) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  const btn = (
    <Button variant={isActive ? 'outline' : 'ghost'}>{children}</Button>
  );

  return (
    <Link href={href}>{btn}</Link>
  );
}

// Social network button.
interface NavSocialProps {
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  url: string;
}

function NavSocial({ icon, url }: NavSocialProps) {
  return (
    <Link href={url}>
      <IconButton aria-label="Social link" icon={icon} variant={'ghost'} />
    </Link>
  );
}

export function NavSocialLinks() {
  return (
    <>
      <NavSocial icon={<FaDiscord />} url={DISCORD} />
      <NavSocial icon={<FaTwitter />} url={TWITTER} />
      <NavSocial icon={<FaReddit />} url={REDDIT} />
      <NavSocial icon={<FaInstagram />} url={INSTAGRAM} />
      <NavSocial icon={<FaTiktok />} url={TIKTOK} />
    </>
  );
}

// Navbar
export interface NavbarProps {
  scrolled: boolean;
}

export function Navbar({ scrolled }: NavbarProps) {
  const screen = useScreen();
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <Flex
      className={isHome ? styles['navbar-home'] : styles.navbar}
      bg={scrolled ? '#0005' : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      transition={'all 140ms ease-in-out'}
    >
      <Flex
        className={styles.content}
        flexDir={screen == 'mobile' ? 'column' : 'row'}
        width={screen == 'mobile' ? undefined : '90%'}
      >
        <Flex className={styles.section}>
          <Image className={styles.logo} src="/flame.png" alt="logo" height="100" width="100" />
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/faq">Faq</NavLink>
          <NavLink href="/config">Config</NavLink>
          {screen != 'mobile' && (
            <NavLink href={PRODUCT_LINK}>Download</NavLink>
          )}
        </Flex>

        {screen != 'mobile' && (
          <Flex className={styles.section}>
            <NavSocialLinks />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
