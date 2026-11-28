"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHelpers = void 0;
const date_helper_1 = require("./date.helper");
const money_helper_1 = require("./money.helper");
const nest_validation_view_1 = require("nest-validation-view");
const registerHelpers = (app) => {
    const helpers = {
        dateFormat: date_helper_1.dateFormat,
        moneyFormat: money_helper_1.moneyFormat,
        validationErrors: nest_validation_view_1.validationErrorsHelper,
    };
    Object.assign(app.locals, helpers);
};
exports.registerHelpers = registerHelpers;
//# sourceMappingURL=index.js.map