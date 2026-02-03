import { TDocRef } from './docref';
import { IUser } from './user';

export interface IBlockchainExchangeCredentials {
  apiKey: string;
  secretKey: string;
}

export interface IBlockchainAccountTransaction {
  info_amount: {
    amount: number;
    currency: string;
  };
  info_buy_fee: {
    amount: number;
    currency: string;
  };
  info_buy_id: string;
  info_buy_payment_method_name: string;
  info_buy_subtotal: {
    amount: number;
    currency: string;
  };
  info_buy_total: {
    amount: number;
    currency: string;
  };
  info_created_at: string;
  info_id: string;
  info_native_amount: {
    amount: number;
    currency: string;
  };
  info_resource: string;
  info_resource_path: string;
  info_status: string;
  info_type: string;
  id: string;
  txid: string;
  timestamp: number;
  datetime: string;
  type: string;
  amount: number;
  currency: string;
  status: string;
  fee?: unknown;
}


export interface IBlockchainAccount {
  user: TDocRef<IUser>;
  accountId: string;
  type?: string;
  code: string;
  valueType: 'fiat' | 'crypto';
  uuid?: string;
  name: string;
  currency: string;
  available_balance: {
    value: number;
    currency: string;
  };
  default?: boolean;
  active?: boolean;
  ready?: boolean;
  hold: {
    value: number;
    currency: string;
  };
  retail_portfolio_id?: string;
  platform?: string;
  transactions?: IBlockchainAccountTransaction[];
}

export interface IBlockchainImport {
  user: TDocRef<IUser>;
  exchangeName: string;
  apiKey?: string;
  secretKey?: string;
  accounts: IBlockchainAccount[];
}

export interface IBlockchainExchange {
  name: string;
  iconPath: string | null;
}
