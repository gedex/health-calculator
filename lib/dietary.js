"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amdr = exports.tdee = exports.bmr = void 0;
var util_1 = require("./util");
/**
 * @module dietary
 */
var BmrEquation;
(function (BmrEquation) {
    BmrEquation["HarrisBenedict"] = "harrisBenedict";
    BmrEquation["RozaAndShizgal"] = "rozaAndShizgal";
    BmrEquation["Mifflin"] = "mifflin";
})(BmrEquation || (BmrEquation = {}));
var ActivityLevel;
(function (ActivityLevel) {
    ActivityLevel["Sedentary"] = "sedentary";
    ActivityLevel["Light"] = "light";
    ActivityLevel["Moderate"] = "moderate";
    ActivityLevel["Active"] = "active";
    ActivityLevel["Extra"] = "extra";
})(ActivityLevel || (ActivityLevel = {}));
/**
 * Calculates basal metabolic rate (BMW); the number of calories our body needs
 * to accomplish its most basic (basal) life-sustaining functions.
 *
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} weight - Weight between 15kg and 635kg.
 * @param {number} height - Height of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @param {BmrEquation} equation - Equation to use ('harrisBenedict', 'rozaAndShizgal', or 'mifflin'). Default to 'mifflin'.
 * @returns {number} BMI.
 */
function bmr(gender, age, weight, height, imperial, equation) {
    if (equation === void 0) { equation = BmrEquation.Mifflin; }
    if (imperial) {
        weight = util_1.lbToKg(weight);
        height = util_1.inchToCm(height);
    }
    if (age < 18 || age > 120) {
        throw new Error('age must be between 18 and 120');
    }
    // TODO: if imperial is used, the error message should be using lbs.
    if (weight < 15 || weight > 635) {
        throw new Error('weight must be between 15kg and 635kg');
    }
    if (height < 50 || height > 272) {
        throw new Error('height must be between 50cm and 272cm');
    }
    switch (equation) {
        case BmrEquation.HarrisBenedict:
            return bmrHarrisBenedict(gender, age, weight, height);
        case BmrEquation.RozaAndShizgal:
            return bmrRozaAndShizgal(gender, age, weight, height);
        default:
            return bmrMifflin(gender, age, weight, height);
    }
}
exports.bmr = bmr;
/**
 * Calculates BMR using Harris-Benedict equation.
 *
 * @see {@link https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation}
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} weight - Weight between 15kg and 635kg.
 * @param {number} height - Height of a person.
 * @returns {number} BMR.
 */
function bmrHarrisBenedict(gender, age, weight, height) {
    if (gender === util_1.Gender.Male) {
        return Number((66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age)).toFixed(0));
    }
    return Number((655 + (9.563 * weight) + (1.850 * height) - (4.676 * age)).toFixed(0));
}
/**
 * Calculates BMR using revised Harris-Benedict equation by Roza and Shizgal.
 *
 * @see {@link https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation}
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} weight - Weight between 15kg and 635kg.
 * @param {number} height - Height of a person.
 * @returns {number} BMR.
 */
function bmrRozaAndShizgal(gender, age, weight, height) {
    if (gender === util_1.Gender.Male) {
        return Number((88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(0));
    }
    return Number((447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(0));
}
/**
 * Calculates BMR using revised Harris-Benedict equation by Mifflin.
 *
 * @see {@link https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation}
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} weight - Weight between 15kg and 635kg.
 * @param {number} height - Height of a person.
 * @returns {number} BMR.
 */
function bmrMifflin(gender, age, weight, height) {
    if (gender === util_1.Gender.Male) {
        return Number(((10 * weight) + (6.25 * height) - (5 * age) + 5).toFixed(0));
    }
    return Number(((10 * weight) + (6.25 * height) - (5 * age) - 161).toFixed(0));
}
/**
 * Calculates total daily energy expenditure (TDEE); the number of calories our
 * body burns daily to perform its bodily functions based on activity level.
 *
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} weight - Weight between 15kg and 635kg.
 * @param {number} height - Height of a person.
 * @param {ActivityLevel} activity - Activity level.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @param {BmrEquation} equation - Equation to use ('harrisBenedict', 'rozaAndShizgal', or 'mifflin'). Default to 'mifflin'.
 * @returns {number} BMR.
 */
function tdee(gender, age, weight, height, activity, imperial, equation) {
    if (equation === void 0) { equation = BmrEquation.Mifflin; }
    var b = bmr(gender, age, weight, height, imperial, equation);
    switch (activity) {
        case ActivityLevel.Light:
            return Number((b * 1.375).toFixed(0));
        case ActivityLevel.Moderate:
            return Number((b * 1.55).toFixed(0));
        case ActivityLevel.Active:
            return Number((b * 1.725).toFixed(0));
        case ActivityLevel.Extra:
            return Number((b * 1.9).toFixed(0));
        default: // Sedentary.
            return Number((b * 1.2).toFixed(0));
    }
}
exports.tdee = tdee;
/**
 * Calculates acceptable macronutrient range (AMDR).
 *
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} weight - Weight between 15kg and 635kg.
 * @param {number} height - Height of a person.
 * @param {ActivityLevel} activity - Activity level.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @param {BmrEquation} equation - Equation to use ('harrisBenedict', 'rozaAndShizgal', or 'mifflin'). Default to 'mifflin'.
 * @returns {number} BMR.
 */
function amdr(gender, age, weight, height, activity, imperial, equation) {
    if (equation === void 0) { equation = BmrEquation.Mifflin; }
    var t = tdee(gender, age, weight, height, activity, imperial, equation);
    return {
        carb: [
            Number(((t * 0.45) / 4).toFixed(2)),
            Number(((t * 0.65) / 4).toFixed(2)),
        ],
        fat: [
            Number(((t * 0.20) / 9).toFixed(2)),
            Number(((t * 0.35) / 9).toFixed(2)),
        ],
        protein: [
            Number(((t * 0.10) / 4).toFixed(2)),
            Number(((t * 0.35) / 4).toFixed(2)),
        ]
    };
}
exports.amdr = amdr;
//# sourceMappingURL=dietary.js.map