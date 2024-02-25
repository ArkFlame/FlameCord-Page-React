export function splitArray<T>(array: T[], subArrays: number): T[][] {
  const result: T[][] = [];
  const length = Math.ceil(array.length / subArrays);

  for (let i = 0; i < array.length; i += length) {
    result.push(array.slice(i, i + length));
  }

  return result;
}
