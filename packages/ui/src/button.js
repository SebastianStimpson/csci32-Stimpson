'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var size_1 = require("./size");
var variant_1 = require("./variant");
var tokens_1 = require("./tokens");
var Button = function (_a) {
    var children = _a.children, className = _a.className, href = _a.href, onClick = _a.onClick, _b = _a.size, size = _b === void 0 ? size_1.Size.MEDIUM : _b, _c = _a.variant, variant = _c === void 0 ? variant_1.Variant.PRIMARY : _c;
    var sizeCssClasses = (0, size_1.getInputSizeStyles)(size);
    var variantCssClasses = (0, variant_1.getVariantStyles)(variant);
    var commonCssClasses = (0, tokens_1.getCommonStyles)();
    var completedCssClasses = "".concat(sizeCssClasses, " ").concat(variantCssClasses, " ").concat(commonCssClasses, " ").concat(className);
    return href ? (<a href={href} className={completedCssClasses}>
      {children}
    </a>) : (<button className={completedCssClasses} onClick={onClick}>
      {children}
    </button>);
};
exports.Button = Button;
