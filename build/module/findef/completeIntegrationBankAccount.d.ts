export type ICompleteIntegrationBankAccount = {
    providerAccountId?: string;
    providerAccountNumber?: string;
    name?: string;
    providerAccountType?: string;
    type?: string;
    subType?: string;
    providerId?: number;
    provider?: string;
    cashBalance?: {
        amt: number;
        cy: string;
    };
    totalValue?: {
        amt: number;
        cy: string;
    };
    raw?: {
        id?: string;
        namn?: string;
        status?: string;
        errorStatus?: string;
        categoryId?: string;
        cashBalance?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
        };
        profit?: {
            absolute: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            relative: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
        };
        totalAcquiredValue?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
        };
        type?: string;
        totalValue?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
        };
        buyingPower?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
        };
        buyingPowerWithoutCredit?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
        };
        interestRate?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
        };
        depositInterestRate?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
        };
        loanInterestRate?: {
            value: number;
            unit: string;
            unitType: string;
            decimalPrecision: number;
        };
        credit: any;
        name: any;
        performance?: {
            ONE_WEEK: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
            ONE_MONTH: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
            THIS_YEAR: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
            THREE_YEARS: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
            THREE_MONTHS: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
            ONE_YEAR: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
            ALL_TIME: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
        };
        settings?: {
            IS_HIDDEN: boolean;
        };
        clearingNumber?: string;
        accountNumber?: string;
        urlParameterId?: string;
        isOvermortgaged?: boolean;
        isOverdrawn?: boolean;
        isOwner?: boolean;
        createdDate?: string;
        account_id?: string;
        display_account_number?: string;
        source_account_number?: string;
        iban?: string;
        bic?: string;
        registration_number?: string;
        country_code?: string;
        product_code?: string;
        product_name?: string;
        nickname?: string;
        product_type?: string;
        category?: string;
        account_status?: string;
        booked_balance?: number;
        credit_limit?: number;
        available_balance?: number;
        currency?: string;
        roles?: Array<{
            name: string;
            role: string;
            current_user: boolean;
        }>;
        permissions?: {
            can_view: boolean;
            can_view_transactions: boolean;
            can_pay_from_account: boolean;
            can_transfer_from_account: boolean;
            can_transfer_to_account: boolean;
            can_deposit_to_account: boolean;
            can_pay_international_from_account: boolean;
            can_pay_eligible: boolean;
            can_use_for_loan_repayment: boolean;
            can_use_for_mortgage_loan_repayment: boolean;
            can_close: boolean;
            can_pay_pgbg_from_account: boolean;
        };
        transaction_list_search_criteria?: {
            can_use_start_date: boolean;
            min_start_date: string;
            can_use_end_date: boolean;
            can_use_lowest_amount: boolean;
            can_use_highest_amount: boolean;
            can_use_free_text: boolean;
            sort_by_list: Array<string>;
        };
        source_system?: string;
        data_retrieved_from?: string;
        can_be_public_sector_account?: boolean;
        default_payment_account?: boolean;
        original_amount?: number;
        account_key?: string;
        account_key_encrypted?: string;
        account_number?: string;
        classification?: string;
        profit_loss?: number;
        profit_loss_percentage?: number;
        profit_loss_valid?: boolean;
        todays_change?: number;
        todays_change_percentage?: number;
        market_value_development?: number;
        market_value_development_percentage?: number;
        profit_loss_applicable?: boolean;
        market_value_in_base_currency?: number;
        invested_market_value?: number;
        has_additional_info?: boolean;
        has_reports?: boolean;
        has_fund_allocation_plan?: boolean;
        owner_id?: string;
        owner_name?: string;
        details_available?: boolean;
        holdings?: Array<{
            display_country_code: string;
            country_name: string;
            sustainable_selection: boolean;
            position_key: string;
            name: string;
            instrument_key: string;
            instrument_type: string;
            detailed_type: string;
            currency: string;
            custody_key: string;
            custody_name: string;
            avg_purchase_price: number;
            unrealized_profit_loss: number;
            unrealized_profit_loss_pct: number;
            profit_loss_applicable: boolean;
            quantity: number;
            price: number;
            price_timestamp: string;
            todays_change: number;
            todays_change_pct: number;
            market_value_in_base_currency: number;
            market_value: number;
            purchase_value: number;
            nominal: boolean;
            buy_allowed: boolean;
            sell_allowed: boolean;
            switch_allowed: boolean;
            details_available: boolean;
            tags: Array<string>;
            owned_by_customer: boolean;
            owner_name: string;
            owner_id: string;
            account_number: string;
            account_key_encrypted: string;
            has_incomplete_data: boolean;
            notes: Array<any>;
            isin: string;
            market: string;
            price_factor: number;
            fx_rate: number;
            base_currency: string;
            logo_available: boolean;
            price_precision: number;
            units_precision: number;
            classification: string;
        }>;
        tags?: Array<string>;
        reinvest_fund_dividend?: boolean;
        reinvest_fund_dividend_applicable?: boolean;
        edit_reinvest_fund_dividend_applicable?: boolean;
        contract_is_being_paid_out?: boolean;
        default_cash_accounts?: Array<any>;
        poa?: boolean;
        portfolio_accounts?: Array<{
            account_key: string;
            account_key_encrypted: string;
            name: string;
            account_number: string;
            classification: string;
            market_value_in_base_currency: number;
            invested_market_value: number;
            currency: string;
            type: string;
            owner_id: string;
            owner_name: string;
            balance?: number;
            balance_in_base_currency?: number;
            expected_balance?: number;
            expected_balance_in_base_currency?: number;
            unsettled_amount?: number;
            unsettled_amount_in_base_currency?: number;
            buying_power?: number;
            tags: Array<string>;
            reinvest_fund_dividend: boolean;
            reinvest_fund_dividend_applicable: boolean;
            edit_reinvest_fund_dividend_applicable: boolean;
            contract_is_being_paid_out: boolean;
            poa: boolean;
            profit_loss?: number;
            profit_loss_percentage?: number;
            profit_loss_valid?: boolean;
            todays_change?: number;
            todays_change_percentage?: number;
            market_value_development?: number;
            market_value_development_percentage?: number;
            profit_loss_applicable?: boolean;
            has_additional_info?: boolean;
            has_reports?: boolean;
            has_fund_allocation_plan?: boolean;
            details_available?: boolean;
            holdings?: Array<any>;
            default_cash_accounts?: Array<{
                account_key: string;
                account_key_encrypted: string;
                name: string;
                account_number: string;
                classification: string;
                market_value_in_base_currency: number;
                invested_market_value: number;
                currency: string;
                type: string;
                owner_id: string;
                owner_name: string;
                balance: number;
                balance_in_base_currency: number;
                expected_balance: number;
                expected_balance_in_base_currency: number;
                unsettled_amount: number;
                unsettled_amount_in_base_currency: number;
                buying_power: number;
                tags: Array<string>;
                reinvest_fund_dividend: boolean;
                reinvest_fund_dividend_applicable: boolean;
                edit_reinvest_fund_dividend_applicable: boolean;
                contract_is_being_paid_out: boolean;
                poa: boolean;
            }>;
        }>;
        portfolio_value?: number;
        loan_id?: string;
        loan_formatted_id?: string;
        group?: string;
        repayment_status?: string;
        first_draw_down_date?: string;
        interest?: {
            rate: number;
            reference_rate_type: string;
            period_start_date: string;
            discounted_rate_end_date: string;
            base_rate: number;
            discount: number;
            effective_rate: number;
            interest_change_dates_history: Array<string>;
        };
        amount?: {
            granted: number;
            paid: number;
            balance: number;
        };
        following_payment?: {
            instalment: number;
            interest: number;
            fees: number;
            total: number;
            date: string;
        };
        following_payment_total_and_date?: {
            instalment: number;
            interest: number;
            fees: number;
            total: number;
            date: string;
        };
        repayment_schedule?: {
            instalment_free_months: Array<any>;
            period_between_instalments: number;
            final_payment_date: string;
            number_of_instalments: number;
            loan_account_number: string;
            debit_account_number: string;
            repayment_day_of_month: number;
            is_itemisation_transferred: boolean;
            debt_at_end: number;
        };
        loan_permissions?: {
            can_transfer_to_loan: boolean;
            can_transfer_from_loan: boolean;
            can_pay_from_loan: boolean;
        };
        financed_object?: {
            id: string;
            name: string;
        };
        owners?: Array<{
            name: string;
            shared_rate_percentage: number;
        }>;
        metadata?: {
            patch_metadata: Array<{
                path: string;
                allowed_operations: Array<string>;
            }>;
        };
        interest_binding_period?: string;
        loan_type_info?: string;
        capabilities_enabled?: Array<any>;
        has_repayment_plan?: boolean;
        has_loan_invoice_notification?: boolean;
        has_extended_transaction_info?: boolean;
    };
    account?: {
        providerAccountId: string;
        providerAccountNumber: string;
        name: string;
        providerAccountType: string;
        type: string;
        subType: string;
        providerId: number;
        provider?: string;
        cashBalance: {
            amt: number;
            cy: string;
        };
        totalValue: {
            amt: number;
            cy: string;
        };
        raw: {
            account_id?: string;
            display_account_number?: string;
            source_account_number?: string;
            iban?: string;
            bic?: string;
            registration_number?: string;
            country_code?: string;
            product_code?: string;
            product_name?: string;
            nickname?: string;
            product_type?: string;
            category?: string;
            account_status?: string;
            booked_balance?: number;
            credit_limit?: number;
            available_balance?: number;
            currency?: string;
            covered_by_deposit_guarantee?: boolean;
            roles?: Array<{
                name: string;
                role: string;
                current_user: boolean;
            }>;
            permissions?: {
                can_view: boolean;
                can_view_transactions: boolean;
                can_pay_from_account: boolean;
                can_transfer_from_account: boolean;
                can_transfer_to_account: boolean;
                can_deposit_to_account: boolean;
                can_pay_international_from_account: boolean;
                can_pay_eligible: boolean;
                can_use_for_loan_repayment: boolean;
                can_use_for_mortgage_loan_repayment: boolean;
                can_close: boolean;
                can_pay_pgbg_from_account: boolean;
            };
            interest_info?: {
                show_negative_interest_warning: boolean;
                interests: Array<{
                    rate_type: string;
                    accumulated_amount?: number;
                    accumulated_last_year_amount?: number;
                    interest_intervals: Array<{
                        from_amount: number;
                        to_amount: number;
                        rate: number;
                    }>;
                }>;
            };
            interest?: {
                rate?: number;
                reference_rate_type?: string;
                period_start_date?: string;
                discounted_rate_end_date?: string;
                base_rate?: number;
                discount?: number;
                effective_rate?: number;
                interest_change_dates_history?: Array<string>;
                show_negative_interest_warning?: boolean;
                interests?: Array<{
                    rate_type: string;
                    accumulated_amount?: number;
                    accumulated_last_year_amount?: number;
                    interest_intervals: Array<{
                        from_amount: number;
                        to_amount: number;
                        rate: number;
                    }>;
                }>;
            };
            transaction_list_search_criteria?: {
                can_use_start_date: boolean;
                min_start_date: string;
                can_use_end_date: boolean;
                can_use_lowest_amount: boolean;
                can_use_highest_amount: boolean;
                can_use_free_text: boolean;
                sort_by_list: Array<string>;
            };
            source_system?: string;
            data_retrieved_from?: string;
            is_public_sector_account?: boolean;
            can_be_public_sector_account?: boolean;
            default_payment_account?: boolean;
            automatic_renewal_text?: string;
            maturity_amount?: number;
            original_amount?: number;
            account_key?: string;
            account_key_encrypted?: string;
            name: any;
            account_number?: string;
            classification?: string;
            profit_loss?: number;
            profit_loss_percentage?: number;
            profit_loss_valid?: boolean;
            todays_change?: number;
            todays_change_percentage?: number;
            market_value_development?: number;
            market_value_development_percentage?: number;
            profit_loss_applicable?: boolean;
            market_value_in_base_currency?: number;
            invested_market_value?: number;
            type?: string;
            has_additional_info?: boolean;
            has_reports?: boolean;
            has_fund_allocation_plan?: boolean;
            owner_id?: string;
            owner_name?: string;
            details_available?: boolean;
            holdings?: Array<{
                display_country_code: string;
                country_name: string;
                sustainable_selection: boolean;
                position_key: string;
                name: string;
                instrument_key: string;
                instrument_type: string;
                detailed_type: string;
                currency: string;
                custody_key: string;
                custody_name: string;
                avg_purchase_price: number;
                unrealized_profit_loss: number;
                unrealized_profit_loss_pct: number;
                profit_loss_applicable: boolean;
                quantity: number;
                price: number;
                price_timestamp: string;
                todays_change: number;
                todays_change_pct: number;
                market_value_in_base_currency: number;
                market_value: number;
                purchase_value: number;
                nominal: boolean;
                buy_allowed: boolean;
                sell_allowed: boolean;
                switch_allowed: boolean;
                details_available: boolean;
                tags: Array<string>;
                owned_by_customer: boolean;
                owner_name: string;
                owner_id: string;
                account_number: string;
                account_key_encrypted: string;
                has_incomplete_data: boolean;
                notes: Array<any>;
                isin: string;
                market: string;
                price_factor: number;
                fx_rate: number;
                base_currency: string;
                logo_available: boolean;
                price_precision: number;
                units_precision: number;
                classification: string;
            }>;
            tags?: Array<string>;
            reinvest_fund_dividend?: boolean;
            reinvest_fund_dividend_applicable?: boolean;
            edit_reinvest_fund_dividend_applicable?: boolean;
            contract_is_being_paid_out?: boolean;
            default_cash_accounts?: Array<any>;
            poa?: boolean;
            portfolio_accounts?: Array<{
                account_key: string;
                account_key_encrypted: string;
                name: string;
                account_number: string;
                classification: string;
                market_value_in_base_currency: number;
                invested_market_value: number;
                currency: string;
                type: string;
                owner_id: string;
                owner_name: string;
                balance?: number;
                balance_in_base_currency?: number;
                expected_balance?: number;
                expected_balance_in_base_currency?: number;
                unsettled_amount?: number;
                unsettled_amount_in_base_currency?: number;
                buying_power?: number;
                tags: Array<string>;
                reinvest_fund_dividend: boolean;
                reinvest_fund_dividend_applicable: boolean;
                edit_reinvest_fund_dividend_applicable: boolean;
                contract_is_being_paid_out: boolean;
                poa: boolean;
                profit_loss?: number;
                profit_loss_percentage?: number;
                profit_loss_valid?: boolean;
                todays_change?: number;
                todays_change_percentage?: number;
                market_value_development?: number;
                market_value_development_percentage?: number;
                profit_loss_applicable?: boolean;
                has_additional_info?: boolean;
                has_reports?: boolean;
                has_fund_allocation_plan?: boolean;
                details_available?: boolean;
                holdings?: Array<any>;
                default_cash_accounts?: Array<{
                    account_key: string;
                    account_key_encrypted: string;
                    name: string;
                    account_number: string;
                    classification: string;
                    market_value_in_base_currency: number;
                    invested_market_value: number;
                    currency: string;
                    type: string;
                    owner_id: string;
                    owner_name: string;
                    balance: number;
                    balance_in_base_currency: number;
                    expected_balance: number;
                    expected_balance_in_base_currency: number;
                    unsettled_amount: number;
                    unsettled_amount_in_base_currency: number;
                    buying_power: number;
                    tags: Array<string>;
                    reinvest_fund_dividend: boolean;
                    reinvest_fund_dividend_applicable: boolean;
                    edit_reinvest_fund_dividend_applicable: boolean;
                    contract_is_being_paid_out: boolean;
                    poa: boolean;
                }>;
            }>;
            portfolio_value?: number;
            loan_id?: string;
            loan_formatted_id?: string;
            group?: string;
            repayment_status?: string;
            first_draw_down_date?: string;
            amount?: {
                granted: number;
                paid: number;
                balance: number;
            };
            following_payment?: {
                instalment: number;
                interest: number;
                fees: number;
                total: number;
                date: string;
            };
            following_payment_total_and_date?: {
                instalment: number;
                interest: number;
                fees: number;
                total: number;
                date: string;
            };
            repayment_schedule?: {
                instalment_free_months: Array<any>;
                period_between_instalments: number;
                final_payment_date: string;
                number_of_instalments: number;
                loan_account_number: string;
                debit_account_number: string;
                repayment_day_of_month: number;
                is_itemisation_transferred: boolean;
                debt_at_end: number;
            };
            loan_permissions?: {
                can_transfer_to_loan: boolean;
                can_transfer_from_loan: boolean;
                can_pay_from_loan: boolean;
            };
            financed_object?: {
                id: string;
                name: string;
            };
            owners?: Array<{
                name: string;
                shared_rate_percentage: number;
            }>;
            metadata?: {
                patch_metadata: Array<{
                    path: string;
                    allowed_operations: Array<string>;
                }>;
            };
            interest_binding_period?: string;
            loan_type_info?: string;
            capabilities_enabled?: Array<any>;
            has_repayment_plan?: boolean;
            has_loan_invoice_notification?: boolean;
            has_extended_transaction_info?: boolean;
            id?: string;
            namn?: string;
            status?: string;
            errorStatus?: string;
            categoryId?: string;
            cashBalance?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            profit?: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
            totalAcquiredValue?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            totalValue?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            buyingPower?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            buyingPowerWithoutCredit?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            interestRate?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            depositInterestRate?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            loanInterestRate?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            credit: any;
            performance?: {
                ONE_MONTH: {
                    absolute: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                    relative: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                };
                THIS_YEAR: {
                    absolute: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                    relative: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                };
                THREE_MONTHS: {
                    absolute: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                    relative: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                };
                ONE_YEAR: {
                    absolute: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                    relative: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                };
                ONE_WEEK: {
                    absolute: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                    relative: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                };
                THREE_YEARS: {
                    absolute: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                    relative: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                };
                ALL_TIME: {
                    absolute: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                    relative: {
                        value: number;
                        unit: string;
                        unitType: string;
                        decimalPrecision: number;
                    };
                };
            };
            settings?: {
                IS_HIDDEN: boolean;
            };
            clearingNumber?: string;
            accountNumber?: string;
            urlParameterId?: string;
            isOvermortgaged?: boolean;
            isOverdrawn?: boolean;
            isOwner?: boolean;
            createdDate?: string;
        };
        accountCreated?: string;
        interestRate?: number;
        isOwner?: boolean;
        providerAccountCreated?: string;
    };
    positions?: Array<{
        quantity: number;
        acquiredPrice: {
            amt: number;
            cy: string;
        };
        lastPrice?: {
            amt: number;
            cy: string;
        };
        morningPriceTC?: {
            amt: number;
            cy?: string;
        };
        marketValueTC: {
            amt: number;
            cy?: string;
        };
        marketValueAC: {
            amt: number;
            cy: string;
        };
        currency: string;
        pctReturn?: number;
        pctToday?: number;
        instrument: {
            isin: string;
            internalId?: string;
            name: string;
            symbol?: string;
            type: string;
            mic?: string;
            internalType: string;
            currency?: string;
            raw?: {
                orderbookId: string;
                name: string;
                isin: string;
                instrumentId: string;
                sectors: Array<{
                    sectorId: string;
                    sectorName: string;
                }>;
                tradable: string;
                listing: {
                    shortName: string;
                    tickerSymbol: string;
                    countryCode: string;
                    currency: string;
                    marketPlaceCode: string;
                    marketPlaceName: string;
                    tickSizeListId: string;
                    marketTradesAvailable: boolean;
                    marketListName?: string;
                };
                historicalClosingPrices: {
                    oneDay: number;
                    oneWeek: number;
                    oneMonth: number;
                    threeMonths: number;
                    startOfYear: number;
                    oneYear: number;
                    threeYears?: number;
                    fiveYears?: number;
                    start: number;
                    startDate: string;
                    tenYears?: number;
                };
                keyIndicators: {
                    numberOfOwners: number;
                    directYield?: number;
                    volatility?: number;
                    beta?: number;
                    priceEarningsRatio?: number;
                    priceSalesRatio?: number;
                    interestCoverageRatio?: number;
                    returnOnEquity?: number;
                    returnOnTotalAssets?: number;
                    equityRatio?: number;
                    capitalTurnover?: number;
                    operatingProfitMargin?: number;
                    grossMargin?: number;
                    netMargin?: number;
                    marketCapital?: {
                        value: number;
                        currency: string;
                    };
                    equityPerShare?: {
                        value: number;
                        currency: string;
                    };
                    turnoverPerShare?: {
                        value: number;
                        currency: string;
                    };
                    earningsPerShare?: {
                        value: number;
                        currency: string;
                    };
                    dividend?: {
                        exDate: string;
                        paymentDate?: string;
                        amount: number;
                        currencyCode: string;
                        exDateStatus: string;
                    };
                    dividendsPerYear: number;
                    previousReport?: {
                        date: string;
                        reportType: string;
                    };
                    reportDate?: string;
                    nextReport?: {
                        date: string;
                        reportType: string;
                    };
                };
                quote: {
                    buy?: number;
                    sell?: number;
                    last: number;
                    highest?: number;
                    lowest?: number;
                    change: number;
                    changePercent: number;
                    spread?: number;
                    timeOfLast: number;
                    totalValueTraded: number;
                    totalVolumeTraded: number;
                    updated: number;
                    volumeWeightedAveragePrice?: number;
                };
                type: string;
            };
            marketCap?: {
                amt: number;
                cy: string;
            };
            lastPrice?: {
                amt: number;
                cy: string;
            };
        };
        raw: {
            account?: {
                id: string;
                type: string;
                name: string;
                urlParameterId: string;
                hasCredit: boolean;
            };
            instrument?: {
                id?: string;
                type: string;
                name: string;
                orderbook?: {
                    id: string;
                    flagCode?: string;
                    name: string;
                    type: string;
                    tradeStatus: string;
                    quote: {
                        highest?: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                        lowest?: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                        buy?: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                        sell?: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                        latest: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                        change: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                        changePercent: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                        updated: string;
                    };
                    turnover: {
                        volume: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                        value?: {
                            value: number;
                            unit: string;
                            unitType: string;
                            decimalPrecision: number;
                        };
                    };
                    lastDeal: {
                        date: string;
                        time?: string;
                    };
                };
                currency: string;
                isin: string;
                volumeFactor: number;
            };
            volume?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            value?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            averageAcquiredPrice?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            acquiredValue?: {
                value: number;
                unit: string;
                unitType: string;
                decimalPrecision: number;
            };
            lastTradingDayPerformance?: {
                absolute: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
                relative: {
                    value: number;
                    unit: string;
                    unitType: string;
                    decimalPrecision: number;
                };
            };
            id?: string;
            display_country_code?: string;
            country_name?: string;
            sustainable_selection?: boolean;
            position_key?: string;
            name?: string;
            instrument_key?: string;
            instrument_type?: string;
            detailed_type?: string;
            currency?: string;
            custody_key?: string;
            custody_name?: string;
            avg_purchase_price?: number;
            unrealized_profit_loss?: number;
            unrealized_profit_loss_pct?: number;
            profit_loss_applicable?: boolean;
            quantity?: number;
            price?: number;
            price_timestamp?: string;
            todays_change?: number;
            todays_change_pct?: number;
            market_value_in_base_currency?: number;
            market_value?: number;
            purchase_value?: number;
            nominal?: boolean;
            buy_allowed?: boolean;
            sell_allowed?: boolean;
            switch_allowed?: boolean;
            details_available?: boolean;
            tags?: Array<string>;
            owned_by_customer?: boolean;
            owner_name?: string;
            owner_id?: string;
            account_number?: string;
            account_key_encrypted?: string;
            has_incomplete_data?: boolean;
            notes?: Array<any>;
            isin?: string;
            market?: string;
            price_factor?: number;
            fx_rate?: number;
            base_currency?: string;
            logo_available?: boolean;
            price_precision?: number;
            units_precision?: number;
            classification?: string;
        };
    }>;
    pctPerformance?: {
        today?: number;
        ytd?: number;
        max?: number;
        l1Week?: number;
        l1Month?: number;
        l1Year?: number;
        l3Year?: number;
    };
    accountCreated?: string;
    interestRate?: number;
    loanParts?: Array<{
        id: string;
        name: string;
        contractNumber: string;
        balance: {
            amt: number;
            cy: string;
        };
        amountPaid: {
            amt: number;
            cy: string;
        };
        interestRate: number;
        nextPaymentDate: string;
        expirationDate: string;
        periodicity: string;
        raw: {
            lånenamn: string;
        };
    }>;
    isOwner?: boolean;
    providerAccountCreated?: string;
};
