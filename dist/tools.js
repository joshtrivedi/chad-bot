"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = eval('require("fs")');
var Logger_1 = require("./Logger");
var Tools = /** @class */ (function () {
    function Tools() {
    }
    /*static isProd(): boolean {
        return process.platform === "linux";
    }*/
    Tools.paramsToArgs = function (params) {
        return params.split(" ");
    };
    Tools.stringToWords = function (inputStr) {
        return inputStr.split(" ");
    };
    Tools.resolveFile = function (filename) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            fs.readFile("./src/collections/" + filename + ".json", "utf-8", function (err, data) {
                                resolve(JSON.parse(data));
                            });
                        }
                        catch (error) {
                            var why = "FAILED TO READ FILE " + ("./src/collections/" + filename + ".json");
                            Logger_1.Logger("tools", "resolveFile", why);
                            reject(why);
                        }
                    })];
            });
        });
    };
    Tools.getFirstReaction = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var collected;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, message.awaitReactions(function (reaction, user) {
                            return !user.bot;
                        }, { max: 1, time: 6000000, errors: ["time"] })];
                    case 1:
                        collected = _a.sent();
                        return [2 /*return*/, collected.first().emoji.toString()];
                }
            });
        });
    };
    Tools.addNumberReactions = function (options, message) {
        return __awaiter(this, void 0, Promise, function () {
            var index, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options > 5)
                            return [2 /*return*/, false];
                        index = 1;
                        _a.label = 1;
                    case 1:
                        if (!(index < options)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, message.react(options === 1
                                ? "1️⃣"
                                : options === 2
                                    ? "2️⃣"
                                    : options === 3
                                        ? "3️⃣"
                                        : options === 4
                                            ? "4️⃣"
                                            : options === 5
                                                ? "5️⃣"
                                                : null)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        Logger_1.Logger("tools", "addNumberReactions", error_1);
                        return [3 /*break*/, 5];
                    case 5:
                        index++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Tools.writeFile = function (filename, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    fs.writeFile("./src/collections/" + filename + ".json", JSON.stringify(data), function () {
                        return true;
                    });
                }
                catch (error) {
                    Logger_1.Logger("tools", "writeFile", error);
                }
                return [2 /*return*/];
            });
        });
    };
    Tools.updateFile = function (filename, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    fs.readFile("./src/collections/" + filename + ".json", "utf-8", function (err, string) {
                        var existingArray = JSON.parse(string);
                        existingArray.push(data);
                        fs.writeFile("./src/collections/" + filename + ".json", JSON.stringify(existingArray), function () {
                            return true;
                        });
                    });
                }
                catch (error) {
                    Logger_1.Logger("tools", "updateFile", error);
                }
                return [2 /*return*/];
            });
        });
    };
    return Tools;
}());
