import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import ArticleCard from '@/components/cards/article-card';
import Article from '@/lib/article';
import { getURL } from '@/lib/utils';

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  return (
    <Flex flexDir={'column'} width={'100%'} gap={'100px'}>
      {/* Blog posts */}
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        gap={'50px'}
        id="blog"
        p={'50px 0'}
      >
        <Flex
          alignItems={'center'}
          flexDir={'column'}
          textAlign={'center'}
          gap={'10px'}
        >
          <Heading fontFamily={'Montserrat, Arial'} fontWeight={'light'}>
            Our blog posts
          </Heading>
        </Flex>

        <SimpleGrid
          minChildWidth="300px"
          spacingX="20px"
          spacingY="40px"
          width={'95%'}
          maxWidth={'1000px'}
          alignItems={'center'}
          justifyItems={'center'}
        >
          {articles.map((article, index) => (
            <ArticleCard article={article} key={index} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`${getURL()}/api/articles`);
  const json = await req.json();
  return { props: { ...json } };
}
