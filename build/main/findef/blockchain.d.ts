import { TDocRef } from "./docref";
import { IUser } from "./user";
export interface IBlockchainAccount {
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
