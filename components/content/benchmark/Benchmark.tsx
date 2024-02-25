import { Box } from '@chakra-ui/react';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { BenchmarkData, COLORS } from '@/config/benchmarks';

// Register ChartJS.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export interface BenchmarkProps {
  benchmark: BenchmarkData;
}

export function Benchmark({ benchmark }: BenchmarkProps) {
  const labels = benchmark.data.map((d) => d.name);
  const datasets = [
    {
      label: benchmark.title,
      data: benchmark.data.map((d) => d.value),
      backgroundColor: COLORS,
    },
  ];

  return (
    <Box width={'100%'} maxWidth={'700px'}>
      <Bar
        width={'100%'}
        options={{
          responsive: true,
          aspectRatio: 16 / 9,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            title: {
              display: true,
              text: 'Benchmark',
            },
          },
        }}
        data={{
          labels,
          datasets,
        }}
      />
    </Box>
  );
}
