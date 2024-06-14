import { TDocRef } from "./docref";
import { IValue } from "./value";
import * as ss from 'superstruct';
import { IAsset } from "./asset";
import { ISavedDocument } from "./savedDocument";
import { EProviderSessionStatus } from "./integrationProvider";
import { ICoInvestor } from "./coInvestor";
import { IProviderImport } from "./providerImport";
import { IUser } from "./user";
import { IAttachment } from "./attachment";
export declare const DateField: ss.Struct<Date, null>;
export declare enum EShareholderType {
    ANGEL_INVESTOR = "ANGEL_INVESTOR",
    EMPLOYEE = "EMPLOYEE",
    FOUNDER = "FOUNDER",
    INVESTMENT_COMPANY = "INVESTMENT_COMPANY",
    RETAIL_INVESTOR = "RETAIL_INVESTOR",
    VC = "VC",
    OTHER = "OTHER"
}
export type IInvestmentProvider = {
    status?: EProviderSessionStatus;
    name?: string;
    displayName?: string;
    externalId: number;
};
export interface IInvestment {
    asset: TDocRef<IAsset>;
    user?: TDocRef<IUser>;
    externalAccountId?: string;
    externalId?: string;
    providerImport?: TDocRef<IProviderImport>;
    symbol?: string;
    image?: TDocRef<IAttachment>;
    provider?: IInvestmentProvider;
    invested: IValue;
    returnValue?: IValue;
    currentValue?: IValue;
    price?: IValue;
    quantity: number;
    automatic?: boolean;
    time?: Date;
    ROI?: IValue;
    acquiredPrice?: IValue;
    lastPrice?: IValue;
    morningPriceTC?: IValue;
    marketValueTC?: IValue;
    marketValueAC?: IValue;
    pctReturn?: number;
    pctToday?: number;
    shareholderType?: EShareholderType;
    ownedBy?: {
        name?: string;
        organizationNbr?: string;
    };
    coInvestors?: ICoInvestor[];
}
export declare const InvestmentSchema: ss.Struct<{
    asset: string;
    invested: IValue;
    quantity: number;
    symbol?: string | undefined;
    providerImport?: any;
    externalAccountId?: string | undefined;
    externalId?: string | undefined;
    image?: string | undefined;
    provider?: {
        name?: string | undefined;
        externalId?: number | undefined;
        status?: EProviderSessionStatus | undefined;
        displayName?: string | undefined;
    } | undefined;
    time?: any;
    returnValue?: IValue | undefined;
    currentValue?: IValue | undefined;
    price?: IValue | undefined;
    automatic?: boolean | undefined;
    ROI?: IValue | undefined;
    acquiredPrice?: IValue | undefined;
    lastPrice?: IValue | undefined;
    morningPriceTC?: IValue | undefined;
    marketValueTC?: IValue | undefined;
    marketValueAC?: IValue | undefined;
    pctReturn?: number | undefined;
    pctToday?: number | undefined;
    shareholderType?: EShareholderType | undefined;
    ownedBy?: {
        name?: string | undefined;
        organizationNbr?: string | undefined;
    } | undefined;
    coInvestors?: {
        fraction: number;
        role: string;
        user?: any;
        investment?: any;
        userData?: {
            firstname: string;
            lastname: string;
            email: string;
            color?: string | undefined;
        } | undefined;
    }[] | undefined;
}, {
    asset: ss.Struct<string, null>;
    providerImport: ss.Struct<any, null>;
    externalAccountId: ss.Struct<string | undefined, null>;
    externalId: ss.Struct<string | undefined, null>;
    symbol: ss.Struct<string | undefined, null>;
    image: ss.Struct<string | undefined, null>;
    provider: ss.Struct<{
        name?: string | undefined;
        externalId?: number | undefined;
        status?: EProviderSessionStatus | undefined;
        displayName?: string | undefined;
    } | undefined, {
        status: ss.Struct<EProviderSessionStatus | undefined, {
            CONNECTED: EProviderSessionStatus.CONNECTED;
            DISCONNECTED: EProviderSessionStatus.DISCONNECTED;
        }>;
        name: ss.Struct<string | undefined, null>;
        displayName: ss.Struct<string | undefined, null>;
        externalId: ss.Struct<number | undefined, null>;
    }>;
    invested: ss.Describe<IValue>;
    returnValue: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    currentValue: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    price: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    quantity: ss.Struct<number, null>;
    automatic: ss.Struct<boolean | undefined, null>;
    time: ss.Struct<any, null>;
    ROI: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    acquiredPrice: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    lastPrice: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    morningPriceTC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    marketValueTC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    marketValueAC: ss.Struct<IValue | undefined, {
        value: ss.Describe<number>;
        percentage?: ss.Describe<number | undefined> | undefined;
        type?: ss.Describe<string | undefined> | undefined;
        time?: ss.Describe<Date | undefined> | undefined;
    }>;
    pctReturn: ss.Struct<number | undefined, null>;
    pctToday: ss.Struct<number | undefined, null>;
    shareholderType: ss.Struct<EShareholderType | undefined, {
        ANGEL_INVESTOR: EShareholderType.ANGEL_INVESTOR;
        EMPLOYEE: EShareholderType.EMPLOYEE;
        FOUNDER: EShareholderType.FOUNDER;
        INVESTMENT_COMPANY: EShareholderType.INVESTMENT_COMPANY;
        RETAIL_INVESTOR: EShareholderType.RETAIL_INVESTOR;
        VC: EShareholderType.VC;
        OTHER: EShareholderType.OTHER;
    }>;
    ownedBy: ss.Struct<{
        name?: string | undefined;
        organizationNbr?: string | undefined;
    } | undefined, {
        name: ss.Struct<string | undefined, null>;
        organizationNbr: ss.Struct<string | undefined, null>;
    }>;
    coInvestors: ss.Struct<{
        fraction: number;
        role: string;
        user?: any;
        investment?: any;
        userData?: {
            firstname: string;
            lastname: string;
            email: string;
            color?: string | undefined;
        } | undefined;
    }[] | undefined, ss.Struct<{
        fraction: number;
        role: string;
        user?: any;
        investment?: any;
        userData?: {
            firstname: string;
            lastname: string;
            email: string;
            color?: string | undefined;
        } | undefined;
    }, {
        user: ss.Struct<any, null>;
        investment: ss.Struct<any, null>;
        fraction: ss.Struct<number, null>;
        role: ss.Struct<string, {
            [x: string]: string;
        }>;
        userData: ss.Struct<{
            firstname: string;
            lastname: string;
            email: string;
            color?: string | undefined;
        } | undefined, {
            firstname: ss.Struct<string, null>;
            lastname: ss.Struct<string, null>;
            email: ss.Struct<string, null>;
            color: ss.Struct<string | undefined, null>;
        }>;
    }>>;
}>;
export type FindexInvestment = ISavedDocument<IInvestment, string> & {
    asset: ISavedDocument<IAsset>;
};
export type PotentialInvestment = Omit<FindexInvestment, '_id' | 'asset' | 'externalId'> & {
    externalId: string;
} & {
    asset: Omit<ISavedDocument<IAsset>, '_id' | 'externalId'> & {
        externalId: string;
    };
};
