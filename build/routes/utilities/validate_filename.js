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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var resize_1 = __importDefault(require("./resize"));
function check_image_path_exisit(query) {
    return __awaiter(this, void 0, void 0, function () {
        var dirPath, thumbs_dir, thumbs_exists, json_response, image_dir, image_exisit, reimage, json_response, json_response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dirPath = path_1.default.join(__dirname, '../../..');
                    return [4 /*yield*/, fs_1.promises.readdir("".concat(dirPath, "/thumbs"))];
                case 1:
                    thumbs_dir = _a.sent();
                    thumbs_exists = thumbs_dir.includes("".concat(query.filename, "-").concat(query.width, "x").concat(query.height, ".jpeg"));
                    if (thumbs_exists) {
                        json_response = { response: 200, message: 'Success', path: "".concat(dirPath, "/thumbs/").concat(query.filename, "-").concat(query.width, "x").concat(query.height, ".jpeg") };
                        return [2 /*return*/, json_response];
                    }
                    return [4 /*yield*/, fs_1.promises.readdir("".concat(dirPath, "/images"))];
                case 2:
                    image_dir = _a.sent();
                    image_exisit = image_dir.includes("".concat(query.filename, ".jpeg"));
                    if (!image_exisit) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, resize_1.default)("".concat(dirPath, "/images/").concat(query.filename, ".jpeg"), Number(query.width), Number(query.height), "".concat(dirPath, "/thumbs/").concat(query.filename, "-").concat(query.width, "x").concat(query.height, ".jpeg"))];
                case 3:
                    reimage = _a.sent();
                    if (reimage) {
                        json_response = { response: 200, message: 'Success', path: "".concat(dirPath, "/thumbs/").concat(query.filename, "-").concat(query.width, "x").concat(query.height, ".jpeg") };
                        return [2 /*return*/, json_response];
                    }
                    return [3 /*break*/, 5];
                case 4:
                    json_response = { response: 404, message: 'Image Not found' };
                    return [2 /*return*/, json_response];
                case 5: return [2 /*return*/];
            }
        });
    });
}
;
exports.default = check_image_path_exisit;
