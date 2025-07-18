'use client';

import {
  Heading,
  Link,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorMode,
} from '@chakra-ui/react';
import Markdown, { ReactRenderer } from 'marked-react';
import Image from 'next/image';

type CustomReactRenderer = Partial<ReactRenderer>;

const renderer: CustomReactRenderer = {
  heading(text: string, level: number) {
    const sizes = ['4xl', '2xl', 'xl', 'lg', 'md'];
    return <Heading fontSize={sizes[level - 1]}>{text}</Heading>;
  },
  image(src: string, alt: string) {
    const fixedSrc = `/api/image?url=${encodeURIComponent(src)}`;
    return <Image src={fixedSrc} alt={alt} width="1280" height="720"/>;
  },
  link(href: string, text: string) {
    return (
      <Link href={href} color={'purple.400'} isExternal>
        {text}
      </Link>
    );
  },
  table: (children) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { colorMode } = useColorMode();
    const bg = colorMode === 'dark' ? 'gray.800' : 'gray.100';

    return (
      <TableContainer>
        <Table variant="striped" bg={bg} borderRadius={'7px'}>
          {children}
        </Table>
      </TableContainer>
    );
  },
  tableHeader: (children) => {
    return <Thead>{children}</Thead>;
  },
  tableBody: (children) => {
    return <Tbody>{children}</Tbody>;
  },
  tableRow: (children) => {
    return <Tr>{children}</Tr>;
  },
  tableCell: (children, flags) => {
    return (
      <Th
        textAlign={flags.align || 'left'}
        fontWeight={flags.header ? 'bold' : 'normal'}
        color={flags.header ? 'purple.300' : 'inherit'}
      >
        {children}
      </Th>
    );
  },
};

export interface MarkdownRendererProps {
  children: string;
}

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return <Markdown value={children} renderer={renderer} />;
}
