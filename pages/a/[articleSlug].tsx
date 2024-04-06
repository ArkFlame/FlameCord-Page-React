import { Flex, Heading } from '@chakra-ui/react';
import { NextPageContext } from 'next';
import Head from 'next/head';

import Error from '@/components/content/error/Error';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer';
import Article from '@/lib/article';
import { getURL } from '@/lib/utils';

interface ArticlePageProps {
  article?: Article | null;
  error?: string | null;
}

export default function ArticlePage(props: ArticlePageProps) {
  const { article, error } = props;

  if (error) {
    return <Error title={error}>Check the URL and try again.</Error>;
  }

  return (
    <>
      <Head>
        <title>FlameCord - {article?.title}</title>
        <meta name="description" content={article?.description} />

        {/* SEO: Open Graph */}
        <meta property="og:image" content={article?.thumbnail}></meta>
        <meta property="og:title" content={article?.title}></meta>
        <meta property="og:description" content={article?.description}></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:url"
          content={getURL() + '/a/' + article?.slug}
        ></meta>

        {/* SEO: Twitter */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={article?.thumbnail}></meta>
        <meta name="twitter:title" content={article?.title}></meta>
        <meta name="twitter:description" content={article?.description}></meta>
        <meta name="twitter:site" content="@FlameCordMC"></meta>
        <meta name="twitter:creator" content="@FlameCordMC"></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/flame.png" />
      </Head>

      <Flex width={'100%'} justifyContent={'center'}>
        <Flex
          width={'95%'}
          maxW={'800px'}
          height={'100%'}
          flexDir={'column'}
          gap={'20px'}
        >
          <Flex
            width={'100%'}
            height={'100%'}
            minHeight={'300px'}
            bg={`url(${article?.thumbnail})`}
            bgSize={'cover'}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            borderRadius={'10px'}
          >
            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              width={'100%'}
              backdropFilter={'brightness(0.5) blur(5px)'}
              borderRadius={'10px'}
            >
              <Heading>{article?.title}</Heading>
            </Flex>
          </Flex>

          <Flex height={'100%'} flexDir={'column'} gap={'20px'} margin={'20px'}>
            <MarkdownRenderer>
              {article?.content || 'Error fetching content.'}
            </MarkdownRenderer>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export async function getServerSideProps({ query }: NextPageContext) {
  const articleSlug = query.articleSlug;
  const req = await fetch(`${getURL()}/api/article?slug=${articleSlug}`);
  const json = await req.json();
  return { props: { ...json } };
}
