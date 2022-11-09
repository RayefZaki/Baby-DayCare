import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  interface StatsCardProps {
    title: string;
    stat: string;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box maxW="7xl"  marginBottom={'100'}  mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}
          color= "blue.400">
          What is our DayCare doing?
        </chakra.h1>
        <SimpleGrid  display={'flex'} justifyContent = {'space-around'} columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={' support and increase the stability of working families '} stat={'Solve problems,'} />
          <StatsCard title={'  All age groups '} stat={'Contain all children'} />
          <StatsCard title={'educational and developmental activities'} stat={'More than just fun'} />
        </SimpleGrid>
      </Box>
      
    );
  }