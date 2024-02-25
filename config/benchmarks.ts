// Data type declaration.
export interface Benchmark {
  name: string;
  value: number;
}

export interface BenchmarkData {
  title: string;
  data: Benchmark[];
}

// Colors
export const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

// RAM Benchmark.
const RAM_BENCHMARK: BenchmarkData = {
  title: 'RAM Usage (MB)',
  data: [
    {
      name: 'FlameCord',
      value: 170,
    },
    {
      name: 'Velocity',
      value: 304,
    },
    {
      name: 'Waterfall',
      value: 180,
    },
  ],
};

// CPU Benchmark.
const CPU_BENCHMARK: BenchmarkData = {
  title: 'CPU Usage (%)',
  data: [
    {
      name: 'FlameCord',
      value: 1.2,
    },
    {
      name: 'Velocity',
      value: 1.4,
    },
    {
      name: 'Waterfall',
      value: 2.4,
    },
  ],
};

const Benchmarks: BenchmarkData[] = [RAM_BENCHMARK, CPU_BENCHMARK];

export default Benchmarks;
