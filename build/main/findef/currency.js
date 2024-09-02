"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_CURRENCIES = exports.ECurrency = exports.CONVERSION_CURRENCY = void 0;
exports.CONVERSION_CURRENCY = 'SEK';
var ECurrency;
(function (ECurrency) {
    ECurrency["SEK"] = "SEK";
    ECurrency["USD"] = "USD";
    ECurrency["EUR"] = "EUR";
    ECurrency["GBP"] = "GBP";
    ECurrency["CNY"] = "CNY";
    ECurrency["NOK"] = "NOK";
    ECurrency["RUB"] = "RUB";
})(ECurrency || (exports.ECurrency = ECurrency = {}));
exports.AVAILABLE_CURRENCIES = [
    ECurrency.SEK,
    ECurrency.USD,
    ECurrency.EUR
];
