"use strict";
exports.__esModule = true;
exports.Logger = void 0;
exports.Logger = function (fileName, method, details) {
    console.log("(" + fileName + ") --> " + method + " | Details: " + details);
};
