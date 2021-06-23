"use strict";
/**
 * @module util
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.kgToLb = exports.lbToKg = exports.inchToCm = exports.cmToInch = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Female"] = "female";
    Gender["Male"] = "male";
})(Gender = exports.Gender || (exports.Gender = {}));
/**
 * Converts cm to inch.
 *
 * @param {number} cm - Length in cm.
 * @returns {number} Length in inch.
 */
function cmToInch(cm) {
    return cm / 2.54;
}
exports.cmToInch = cmToInch;
/**
 * Converts inch to cm.
 *
 * @param {number} inch - Length in inch.
 * @returns {number} Length in cm.
 */
function inchToCm(inch) {
    return inch * 2.54;
}
exports.inchToCm = inchToCm;
/**
 * Converts lb to kg.
 *
 * @param {number} lb - Weight in lb.
 * @returns {number} Weight in kg.
 */
function lbToKg(lb) {
    return lb / 2.2046;
}
exports.lbToKg = lbToKg;
/**
 * Converts kg to lb.
 *
 * @param {number} kg - Weight in kg.
 * @returns {number} Weight in lb.
 */
function kgToLb(kg) {
    return kg * 2.2046;
}
exports.kgToLb = kgToLb;
//# sourceMappingURL=util.js.map