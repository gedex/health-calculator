"use strict";
/**
 * @module sports
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hrMax = exports.oneRm = void 0;
var OneRmFormula;
(function (OneRmFormula) {
    OneRmFormula["Epley"] = "epley";
    OneRmFormula["Brzycki"] = "brzycki";
    OneRmFormula["Lombardi"] = "lombardi";
    OneRmFormula["Mayhew"] = "mayhew";
    OneRmFormula["OConner"] = "oconner";
    OneRmFormula["Wathan"] = "wathan";
    OneRmFormula["Lander"] = "lander";
})(OneRmFormula || (OneRmFormula = {}));
/**
 * Calculates one-repetition maximum (1RM) using various formula.
 *
 * @param {number} reps - Number of repetition of a given weight.
 * @param {number} weight - Weight being lifted for a given reps.
 * @param {OneRmFormula} formula - Formula to use.
 * @returns {number} One rep max.
 */
function oneRm(reps, weight, formula) {
    if (formula === void 0) { formula = OneRmFormula.Epley; }
    if (reps <= 0) {
        throw new Error('reps must be greater than 0');
    }
    switch (formula) {
        case OneRmFormula.Brzycki:
            return Number((weight / (1.0278 - 0.0278 * reps)).toFixed(2));
        case OneRmFormula.Lombardi:
            return Number((weight * Math.pow(reps, 0.10)).toFixed(2));
        case OneRmFormula.Mayhew:
            return Number(((100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps))).toFixed(2));
        case OneRmFormula.OConner:
            return Number((weight * (1 + reps / 40)).toFixed(2));
        case OneRmFormula.Wathan:
            return Number((100 * weight / (48.80 + 53.8 * Math.exp(-0.075 * reps))).toFixed(2));
        case OneRmFormula.Lander:
            return Number((100 * weight / (101.3 - 2.67123 * reps)).toFixed(2));
        default:
            return Number((weight * (1 + (reps / 30))).toFixed(2));
    }
}
exports.oneRm = oneRm;
var HRMaxFormula;
(function (HRMaxFormula) {
    HRMaxFormula["Haskell"] = "haskell";
    HRMaxFormula["Inbar"] = "inbar";
    HRMaxFormula["Nes"] = "nes";
    HRMaxFormula["Oakland"] = "oakland";
    HRMaxFormula["Tanaka"] = "tanaka";
})(HRMaxFormula || (HRMaxFormula = {}));
/**
 * Calculates maximum heart rate (HR) of a given age and formula.
 *
 * @param {number} age - Person age.
 * @param {HRMaxFormula} formula - Formula to use.
 * @returns {number} HRmax in BPM (beats per minute).
 */
function hrMax(age, formula) {
    if (formula === void 0) { formula = HRMaxFormula.Haskell; }
    if (age < 1 || age > 124) {
        throw new Error('age must be between 1 and 124');
    }
    switch (formula) {
        case HRMaxFormula.Inbar:
            return Number((205.8 - (0.685 * age)).toFixed(0));
        case HRMaxFormula.Nes:
            return Number((211 - (0.64 * age)).toFixed(0));
        case HRMaxFormula.Oakland:
            return Number((192 - (0.007 * (Math.pow(age, 2)))).toFixed(0));
        case HRMaxFormula.Tanaka:
            return Number((208 - (0.7 * age)).toFixed(0));
        default:
            // Haskell
            return Number((220 - age).toFixed(0));
    }
}
exports.hrMax = hrMax;
//# sourceMappingURL=sports.js.map