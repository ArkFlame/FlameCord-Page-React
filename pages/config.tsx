import { Flex, Heading } from '@chakra-ui/react';

import Error from '@/components/content/error/Error';
import MarkdownRenderer from '@/components/utils/MarkdownRenderer';
import { getURL } from '@/lib/utils';

interface ConfigPageProps {
  config?: string | null;
  error?: string | null;
}

export default function Config(props: ConfigPageProps) {
  const { config, error } = props;

  if (error) {
    return (
      <Error title="Configuration Error">
        {error}
      </Error>
    );
  }

  return (
    <Flex width={'100%'} justifyContent={'center'}>
      <Flex
        flexDir={'column'}
        gap={'40px'}
        width={'100%'}
        maxWidth={'600px'}
        alignItems={'center'}
        padding={'30px 0'}
      >
        <Heading>Configuration guide for FlameCord</Heading>
        <section id="configuration-guide" className="guide-section">
          <p>
            The official complete configuration guide for your Minecraft server using FlameCord.
          </p>
        </section>
        <Flex height={'100%'} flexDir={'column'} gap={'20px'} margin={'20px'}>
          <MarkdownRenderer>
            {config || 'Error fetching configuration.'}
          </MarkdownRenderer>
        </Flex>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps() {
  try {
    const req = await fetch(`${getURL()}/api/config`);
    
    if (!req.ok) {
      return {
        props: {
          error: `Failed to fetch configuration. Status: ${req.status}`,
        },
      };
    }

    const json = await req.json();
    return { props: { ...json } };
  } catch (e) {
    return {
      props: {
        error: "An unexpected error occurred while fetching the configuration.",
      },
    };
  }
}
