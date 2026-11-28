"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moneyFormat = void 0;
const moneyFormat = (value, locale = 'pt-BR', currency = 'BRL') => {
    if (value === null || value === undefined)
        return '';
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(value);
};
exports.moneyFormat = moneyFormat;
//# sourceMappingURL=money.helper.js.map