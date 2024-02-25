import { Flex, Heading } from '@chakra-ui/react';

import FaqCard from '@/components/cards/faq-card';
import { FAQs } from '@/config/faq';

export default function Faq() {
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
        <Heading>Frequently asked questions</Heading>

        <Flex flexDir={'column'} gap={'20px'}>
          {FAQs.map((faq, i) => (
            <FaqCard key={i} faq={faq} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
