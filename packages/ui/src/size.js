"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
exports.getInputSizeStyles = getInputSizeStyles;
var Size;
(function (Size) {
    Size["SMALL"] = "small";
    Size["MEDIUM"] = "medium";
    Size["LARGE"] = "large";
})(Size || (exports.Size = Size = {}));
function getInputSizeStyles(size) {
    switch (size) {
        case Size.SMALL:
            return 'px-4 py-1 rounded shadow';
        case Size.MEDIUM:
            return 'px-6 py-1.5 rounded-md shadow-md';
        case Size.LARGE:
            return 'px-8 py-2 rounded-lg shadow-lg';
    }
}
