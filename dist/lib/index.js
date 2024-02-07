"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useName = exports.Name = exports.FrameMetadata = exports.getFrameMessage = exports.getFrameMetadata = exports.getFrameHtmlResponse = exports.version = void 0;
// 🌲☀️🌲
var version_1 = require("./version");
Object.defineProperty(exports, "version", { enumerable: true, get: function () { return version_1.version; } });
var getFrameHtmlResponse_1 = require("./core/getFrameHtmlResponse");
Object.defineProperty(exports, "getFrameHtmlResponse", { enumerable: true, get: function () { return getFrameHtmlResponse_1.getFrameHtmlResponse; } });
var getFrameMetadata_1 = require("./core/getFrameMetadata");
Object.defineProperty(exports, "getFrameMetadata", { enumerable: true, get: function () { return getFrameMetadata_1.getFrameMetadata; } });
var getFrameMessage_1 = require("./core/getFrameMessage");
Object.defineProperty(exports, "getFrameMessage", { enumerable: true, get: function () { return getFrameMessage_1.getFrameMessage; } });
var FrameMetadata_1 = require("./components/FrameMetadata");
Object.defineProperty(exports, "FrameMetadata", { enumerable: true, get: function () { return FrameMetadata_1.FrameMetadata; } });
var Name_1 = require("./components/Name");
Object.defineProperty(exports, "Name", { enumerable: true, get: function () { return Name_1.Name; } });
var useName_1 = require("./hooks/useName");
Object.defineProperty(exports, "useName", { enumerable: true, get: function () { return useName_1.useName; } });
//# sourceMappingURL=index.js.map