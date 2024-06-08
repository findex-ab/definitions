const cantor = (k1: number, k2: number) => {
  return ((k1 + k2) * (k1 + k2 + 1)) / 2 + k2;
};

const decant = (c: number): [number, number] => {
  const w = Math.floor((Math.sqrt(c * 8 + 1) - 1) / 2);
  const y = c - (w * (w + 1)) / 2;
  const x = w - y;
  return [x, y];
};

const range = (n: number): number[] => Array.from(Array(n).keys());

const chunkify = <T>(
  arr: T[],
  padding: T,
  chunkSize: number = 2,
): Array<T[]> => {
  const remain = arr.length % chunkSize;
  return range(Math.floor(arr.length / chunkSize) + Number(remain > 0)).map(
    (i) => range(chunkSize).map((ci) => arr[i * chunkSize + ci] ?? padding),
  ) as Array<T[]>;
};

export const compressString = (v: string): Uint16Array => {
  const charCodes = Array.from(v).map((c) => c.codePointAt(0) || 0);
  const chunks = chunkify(charCodes, 0, 2);
  const compressedCodes = chunks.map((chunk) => cantor(chunk[0], chunk[1]));
  return new Uint16Array(compressedCodes);
};

export const unCompressString = (v: Uint16Array): string => {
  const chunks = Array.from(v).map((x) => decant(x));
  const toChar = (x: number) => String.fromCodePoint(x);
  const chars = chunks.map((chunk) =>
    chunk
      .filter((c) => c !== 0)
      .map((c) => toChar(c))
      .join(''),
  );
  return chars.join('');
};
