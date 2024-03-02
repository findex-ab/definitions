export interface IPaginated<T = any> {
  data: T[];
  totalCount: number;
  pages: number;
}
