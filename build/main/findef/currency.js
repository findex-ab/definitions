"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_CURRENCIES = exports.ECurrency = void 0;
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
