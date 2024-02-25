import { disconnect } from 'process';

import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowDown, FaCheck, FaClipboard } from 'react-icons/fa';

import ArticleCard from '@/components/cards/article-card';
import FeatureCard from '@/components/cards/feature-card';
import MiniFeature from '@/components/cards/mini-feature';
import ReviewCard from '@/components/cards/review-card';
import AutoScroll from '@/components/content/auto-scroll';
import { Benchmark } from '@/components/content/benchmark/Benchmark';
import Hero from '@/components/content/hero';
import Benchmarks from '@/config/benchmarks';
import { MiniFeaturesGroups } from '@/config/features';
import { DISCOUNT_CODE, PRODUCT_LINK } from '@/config/product';
import Reviews from '@/config/reviews';
import useScreen from '@/hooks/useScreen';
import useTypeWriter from '@/hooks/useTypeWriter';
import Article from '@/lib/article';
import { getURL } from '@/lib/utils';

interface HomeProps {
  articles: Article[];
}

export default function Home({ articles }: HomeProps) {
  const screen = useScreen();

  // Hero text type writer handler.
  const motd = useTypeWriter(
    ['Powerful', 'Efficient', 'Lightweight', 'Strong', 'Unbreakable'],
    { delay: 3000 },
  );

  // Discount code handler.
  const [copied, setCopied] = useState(false);
  const discountCode = DISCOUNT_CODE;
  const discountActive =
    discountCode !== undefined && disconnect !== null && discountCode !== '';

  const onCopyCode = () => {
    navigator.clipboard.writeText(discountCode || '');
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Flex flexDir={'column'} width={'100%'} gap={'100px'}>
      {/* Hero - Page header */}
      <Hero bgImage={"url('/bg.webp')"}>
        {/* Title and subtitle */}
        <Flex flexDir={'column'} gap={'10px'} textAlign={'center'}>
          {/* Title */}
          <Heading fontSize={screen == 'desktop' ? '8xl' : '6xl'}>
            FlameCord
          </Heading>

          {/* Subtitle */}
          <Flex
            fontSize={screen == 'desktop' ? '2xl' : 'xl'}
            letterSpacing={'5px'}
          >
            <Text>
              <span
                style={{
                  textDecoration: 'line-through',
                  color: '#f34',
                }}
              >
                Possibly
              </span>{' '}
              The most {motd} BungeeCord Fork
            </Text>
          </Flex>
        </Flex>

        {/* Download buttons */}
        <Flex gap={'20px'}>
          <Link href={PRODUCT_LINK}>
            <Button colorScheme={'red'}>Download now</Button>
          </Link>

          <Link href={'#more'}>
            <Button colorScheme={'red'} variant={'outline'}>
              Learn more
            </Button>
          </Link>
        </Flex>
      </Hero>

      {/* Discount code */}
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={'column'}
        gap={'50px'}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          flexDir={'column'}
          gap={'10px'}
        >
          <Text fontSize={'25px'}>Get 10% off with the code:</Text>
          <Flex gap={'5px'}>
            <Input
              value={discountCode}
              placeholder={'No discount available yet.'}
              colorScheme={'gray'}
              disabled={!discountActive}
              bg={'whiteAlpha.100'}
              readOnly
            />{' '}
            <IconButton
              aria-label="Copy"
              icon={copied ? <FaCheck /> : <FaClipboard />}
              colorScheme={copied ? 'green' : 'gray'}
              variant={'outline'}
              disabled={!discountActive}
              bg={'whiteAlpha.100'}
              onClick={onCopyCode}
            />
          </Flex>
        </Flex>

        <Link href={'#more'}>
          <IconButton
            aria-label="More info"
            icon={<FaArrowDown />}
            borderRadius={'50%'}
            size={'lg'}
            fontSize={'30px'}
            width={'65px'}
            height={'65px'}
          />
        </Link>
      </Flex>

      {/* Features */}
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        gap={'50px'}
        id="more"
        p={'50px 0'}
      >
        <Flex
          alignItems={'center'}
          flexDir={'column'}
          textAlign={'center'}
          gap={'10px'}
        >
          <Heading fontFamily={'Montserrat, Arial'} fontWeight={'light'}>
            Features
          </Heading>

          <Text maxWidth={'700px'} fontSize={'19px'} fontWeight={'hairline'}>
            Our features are focused on the security of your Minecraft server
            preventing hacking with crash exploits, bots and other kind of ddos
            attacks on the application layer.
          </Text>
        </Flex>

        {/* First group */}
        <Flex
          gap={'4vw'}
          flexDir={screen == 'mobile' || screen == 'tablet' ? 'column' : 'row'}
        >
          <FeatureCard
            icon={'/bot.png'}
            title={'Bots'}
            description={
              'We prevent bots using multiple security checks to minimize the damage.'
            }
          />

          <FeatureCard
            icon={'/firewall.png'}
            title={'Firewall'}
            description={
              'We use IPTables on detected exploit/bots to prevent further damage.'
            }
          />

          <FeatureCard
            icon={'/feather.png'}
            title={'Performance'}
            description={
              'We reduce the amount of processing done to improve the speed of our servers.'
            }
          />
        </Flex>

        {/* Second group */}
        <Flex
          gap={'4vw'}
          flexDir={screen == 'mobile' || screen == 'tablet' ? 'column' : 'row'}
        >
          <FeatureCard
            icon={'/geyser.png'}
            title={'Geyser'}
            description={
              'Our anti-bot have specific bypasses for Bedrock players.'
            }
          />

          <FeatureCard
            icon={'/version.png'}
            title={'ViaVersion'}
            description={
              "FlameCord supports ViaVersion as long as it's installed in all the backend servers running."
            }
          />

          <FeatureCard
            icon={'/community.png'}
            title={'Community'}
            description={
              'We have a large community of developers and server owners that help us to improve our software.'
            }
          />
        </Flex>
      </Flex>

      {/* Reviews */}
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        gap={'50px'}
        id="reviews"
        p={'50px 0'}
      >
        <Flex
          alignItems={'center'}
          flexDir={'column'}
          textAlign={'center'}
          gap={'10px'}
        >
          <Heading fontFamily={'Montserrat, Arial'} fontWeight={'light'}>
            More than 100 reviews
          </Heading>

          <Text maxWidth={'700px'} fontSize={'19px'} fontWeight={'hairline'}>
            Our product has more than 9,000 downloads, 2,000 purchases and more
            than 100 reviews from our customers.
          </Text>
        </Flex>

        <AutoScroll>
          {Reviews.map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </AutoScroll>
      </Flex>

      {/* Benchmark */}
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        gap={'50px'}
        id="more"
        p={'50px 0'}
      >
        <Flex
          alignItems={'center'}
          flexDir={'column'}
          textAlign={'center'}
          gap={'10px'}
        >
          <Heading fontFamily={'Montserrat, Arial'} fontWeight={'light'}>
            Benchmark
          </Heading>

          <Text maxWidth={'700px'} fontSize={'19px'} fontWeight={'hairline'}>
            Compared to other BungeeCord forks, FlameCord is the fastest and
            most efficient.
          </Text>
        </Flex>

        {Benchmarks.map((b, i) => (
          <Benchmark benchmark={b} key={i} />
        ))}
      </Flex>

      {/* Antibot Features */}
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        gap={'50px'}
        id="antibot"
        p={'50px 0'}
      >
        <Flex
          alignItems={'center'}
          flexDir={'column'}
          textAlign={'center'}
          gap={'10px'}
        >
          <Heading fontFamily={'Montserrat, Arial'} fontWeight={'light'}>
            AntiBot Features
          </Heading>

          <Text maxWidth={'700px'} fontSize={'19px'} fontWeight={'hairline'}>
            FlameCord has a powerful antibot system that prevents bots from
            joining your server.
          </Text>
        </Flex>

        <Flex
          alignItems={'center'}
          justifyContent={'space-around'}
          maxWidth={'900px'}
          width={screen == 'mobile' ? '90%' : '100%'}
          gap={'50px'}
          flexDir={screen == 'mobile' ? 'column' : 'row'}
        >
          {MiniFeaturesGroups.map((group, index) => (
            <Flex
              justifyContent={'center'}
              flexDir={'column'}
              gap={'20px'}
              width={'100%'}
              key={index}
            >
              {group.map((feature, i) => (
                <MiniFeature
                  title={feature.title}
                  description={feature.description}
                  key={i}
                />
              ))}
            </Flex>
          ))}
        </Flex>
      </Flex>

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
            Last blog posts
          </Heading>

          <Text maxWidth={'700px'} fontSize={'19px'} fontWeight={'hairline'}>
            We have a blog where we post updates, news and tutorials about
            FlameCord and Minecraft server management.
          </Text>
        </Flex>

        <SimpleGrid
          minChildWidth="300px"
          spacing="20px"
          width={'95%'}
          maxWidth={'1000px'}
          alignItems={'center'}
          justifyContent={'center'}
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
  const req = await fetch(`${getURL()}/api/last_articles`);
  const json = await req.json();
  return { props: { ...json } };
}
