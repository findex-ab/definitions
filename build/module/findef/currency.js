export var ECurrency;
(function (ECurrency) {
    ECurrency["SEK"] = "SEK";
    ECurrency["USD"] = "USD";
    ECurrency["EUR"] = "EUR";
})(ECurrency || (ECurrency = {}));
export const AVAILABLE_CURRENCIES = [
    ECurrency.SEK,
    ECurrency.USD,
    ECurrency.EUR
];
