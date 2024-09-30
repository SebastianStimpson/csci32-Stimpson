"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Input;
var size_1 = require("./size");
var variant_1 = require("./variant");
var tokens_1 = require("./tokens");
function Input(_a) {
    var _b = _a.variant, variant = _b === void 0 ? variant_1.Variant.PRIMARY : _b, _c = _a.size, size = _c === void 0 ? size_1.Size.MEDIUM : _c, value = _a.value, name = _a.name, id = _a.id, defaultValue = _a.defaultValue, setValue = _a.setValue, _d = _a.type, type = _d === void 0 ? 'text' : _d, placeholder = _a.placeholder, InputProps = __rest(_a, ["variant", "size", "value", "name", "id", "defaultValue", "setValue", "type", "placeholder"]);
    var sizeCssClasses = (0, size_1.getInputSizeStyles)(size);
    var variantOutlineCssClasses = (0, variant_1.getVariantOutlineStyles)(variant);
    var variantBorderCssClasses = (0, variant_1.getVariantBorderStyles)(variant);
    var variantInputTextCssClasses = (0, variant_1.getVariantInputTextStyles)(variant);
    var commonCssClasses = (0, tokens_1.getCommonStyles)();
    return (<input className={"".concat(sizeCssClasses, " ").concat(variantBorderCssClasses, " ").concat(variantInputTextCssClasses, " ").concat(variantOutlineCssClasses, " ").concat(commonCssClasses)} name={name} id={id} defaultValue={defaultValue} placeholder={placeholder} type={type} value={value} onChange={setValue ? function (newValue) { return setValue(newValue.currentTarget.value); } : function () { }}/>);
}
