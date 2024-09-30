"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = void 0;
exports.getVariantStyles = getVariantStyles;
exports.getVariantOutlineStyles = getVariantOutlineStyles;
exports.getVariantBorderStyles = getVariantBorderStyles;
exports.getVariantInputTextStyles = getVariantInputTextStyles;
exports.getInputSizeStyles = getInputSizeStyles;
var size_1 = require("./size");
var Variant;
(function (Variant) {
    Variant["PRIMARY"] = "primary";
    Variant["SECONDARY"] = "secondary";
    Variant["TERTIARY"] = "tertiary";
})(Variant || (exports.Variant = Variant = {}));
function getVariantStyles(variant) {
    switch (variant) {
        case Variant.PRIMARY:
            return 'bg-emerald-600 outline-emerald-600 hover:bg-emerald-700 active:bg-emerald-800';
        case Variant.SECONDARY:
            return 'bg-violet-600 outline-violet-600 hover:bg-violet-700 active:bg-violet-800';
        case Variant.TERTIARY:
            return 'bg-pink-600 outline-pink-600 hover:bg-pink-700 active:bg-pink-800';
    }
}
function getVariantOutlineStyles(cariant) {
    switch (cariant) {
        case Variant.PRIMARY:
            return 'outline-emerald-600';
        case Variant.SECONDARY:
            return 'outline-violet-600';
        case Variant.TERTIARY:
            return 'outline-pink-600';
    }
}
function getVariantBorderStyles(variant) {
    switch (variant) {
        case Variant.PRIMARY:
            return 'border-2 border-emerald-600';
        case Variant.SECONDARY:
            return 'border-2 border-violet-600';
        case Variant.TERTIARY:
            return 'border-2 border-pink-600';
    }
}
function getVariantInputTextStyles(variant) {
    switch (variant) {
        case Variant.PRIMARY:
            return 'text-black';
        case Variant.SECONDARY:
            return 'text-black';
        case Variant.TERTIARY:
            return 'text-black';
    }
}
function getInputSizeStyles(size) {
    switch (size) {
        case size_1.Size.SMALL:
            return 'px-2 py-1 rounded shadow';
        case size_1.Size.MEDIUM:
            return 'px-3 py-1.5 rounded-md shadow-md';
        case size_1.Size.LARGE:
            return 'px-4 py-2 rounded-lg shadow-lg';
    }
}
