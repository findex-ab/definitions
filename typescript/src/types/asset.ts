export interface IAsset {
  id: string;
  image: string;
  name: string;
  type: string;
  addMethod: string;
  origin: string;
  investment: number;
  value: number;
  totalInvestment: number;
  totalValue: number;
  roi: number;
  lastUpdated: string;
  epochTime: number | string;
  quantity: number;
}
