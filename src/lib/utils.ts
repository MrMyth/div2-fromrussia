// src/lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitArray<T>(array: T[], chunkSize: number): T[][] {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}