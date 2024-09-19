export type ITicCompany = {
  id: string;
  companyId: number;
  iso3166CountryCode: string;
  registrationNumber: string;
  legalEntityType: string;
  registrationDate: number;
  mostRecentPurpose?: string;
  names: Array<{
    nameOrIdentifier: string;
    companyNamingType: 'legalName' | string;
    firstSeenAt: number;
  }>;
  phoneNumbers?: Array<{
    e164PhoneNumber: string;
    phoneNumberType: 'fixedLine' | string;
    numberPlanServiceType?: string;
    orginalOperator?: string;
    priorOperator?: string;
    currentOperator?: string;
    lastPortingDate?: number;
  }>;
  hasPhoneNumbers: boolean;
  emailAddresses?: Array<{
    emailAddress: string;
    emailAddressType: 'general' | string;
  }>;
  hasEmailAddresses: boolean;
  hyperlinks?: Array<{
    hyperlink: string;
    hyperlinkType: 'homepage' | string;
  }>;
  hasHyperlinks: boolean;
  sniCodes?: Array<{
    sni_2007Code: string;
    sni_2007Name: string;
  }>;
  intelligence?: Array<{
    companyIntelligenceType: 'createdAsShelfCompany' | string;
    companyIntelligenceSubType?: string;
    notes?: string;
    score: number;
    firstSeenAt: number;
    externalId: number;
  }>;
  hasIntelligence: boolean;
  status?: Array<{
    companyStatusType: 'reorganizationOfBusinessCommenced' | string;
    statusDate: number;
    statusDescription?: string;
  }>;
  hasStatus: boolean;
  mostRecentFinancialSummary?: {
    periodStart: number;
    periodEnd: number;
    rs_NetSalesK?: number;
    rs_OtherOperatingIncomeK?: number;
    rs_OperatingProfitOrLossK?: number;
    rs_SumFinancialItemsK?: number;
    rs_ProfitAfterFinancialItemsK?: number;
    bs_TotalAssetsK?: number;
    fn_NumberOfEmployees?: number;
    km_OperatingMargin?: number;
    km_NetProfitMargin?: number;
    km_EquityAssetsRatio?: number;
    km_GrossMargin?: number;
    isAudited: boolean;
  };
  hasMostRecentFinancialSummary: boolean;
  isRegisteredForVAT?: boolean;
  isRegisteredForFTax?: boolean;
  isRegisteredForPayroll?: boolean;
  ftaxTerminationReason?: string;
  bankAccounts?: Array<{
    bankAccountType: 'bankgiro' | string;
    accountNumber: string;
    swift_BIC?: string;
  }>;
  hasBankAccounts: boolean;
  addresses?: Array<{
    addressType: 'mailAddress' | string;
    co?: string;
    street?: string;
    houseNumber?: string;
    postalCode?: string;
    city?: string;
    countryCodeAlpha3?: string;
    location?: number[];
  }>;
  hasAddresses: boolean;
  documents?: Array<{
    companyDocumentId: number;
    companyDocumentType: 'annualReport' | string;
    documentDate: number;
    documentTitle?: string;
    documentVersion?: string;
    documentValue1?: string;
    documentValue2?: string;
    documentValue3?: string;
    data?: any;
  }>;
  hasDocuments: boolean;
  stock?: {
    isin?: string;
    ticker?: string;
    yahooSymbol?: string;
    marketName?: string;
    marketExchangeName?: string;
    marketCountryCodeAlpha3?: string;
    sectorName?: string;
    branchName?: string;
    listingDate?: number;
    enterpriseValue?: number;
    enterpriseValueUpdated?: number;
    stockQuote?: number;
    stockQuoteUpdated?: number;
    nextReportDate?: number;
    nextReportType?: string;
    dividendExDate?: number;
    dividendsPerYear?: number;
    dividendAmount?: number;
    dividendCurrency?: string;
  };
  hasStock: boolean;
  lei?: {
    leiCode: string;
    registrationStatus?: string;
    initialRegistrationDate?: number;
    nextRenewalDate?: number;
    managingLOU?: string;
    managingLOULegalName?: string;
  };
  hasLEI: boolean;
  salesToPublicActors?: Array<{
    actorName: string;
    actorType?: string;
    actorCode?: string;
    invoicedApprox2022K?: number;
    invoicedApprox2023K?: number;
  }>;
  hasSalesToPublicActors: boolean;
  ecParticipant?: {
    pic: string;
    validationStatus?: string;
    numberOfProjects?: number;
    workProgrammesData?: any;
    lastUpdated?: number;
  };
  hasECParticipant: boolean;
  franchisesOrLicences?: Array<{
    linkedToName?: string;
    linkedToCompanyId?: number;
    actingUnderName?: string;
    data?: any[];
  }>;
  hasFranchisesOrLicences: boolean;
};
