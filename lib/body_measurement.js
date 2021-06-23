"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ffmi = exports.rfm = exports.lbm = exports.bfp = exports.whr = exports.whtrCategory = exports.whtr = exports.bmi = void 0;
var util_1 = require("./util");
/**
 * @module body_measurement
 */
var BodyCategory;
(function (BodyCategory) {
    BodyCategory["ExtremelySlim"] = "Extremely Slim";
    BodyCategory["Slim"] = "Slim";
    BodyCategory["Healthy"] = "Healthy";
    BodyCategory["Overweight"] = "Overweight";
    BodyCategory["VeryOverweight"] = "Very Overweight";
    BodyCategory["Obese"] = "Obese";
})(BodyCategory || (BodyCategory = {}));
/**
 * Calculates body mass index (BMI).
 *
 * @param {number} weight - Weight of a person.
 * @param {number} height - Height of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} BMI.
 */
function bmi(weight, height, imperial) {
    // TODO: validate weight and height.
    if (imperial) {
        weight = util_1.lbToKg(weight);
        height = util_1.inchToCm(height);
    }
    return Number((weight / Math.pow((height / 100), 2)).toFixed(2));
}
exports.bmi = bmi;
/**
 * Calculates waist-to-height ratio (WHtR).
 *
 * @see {@link https://en.wikipedia.org/wiki/Waist-to-height_ratio}
 * @param {number} waistCircumference - Waist circumference of a person.
 * @param {number} height - Height of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} WHtR.
 */
function whtr(waistCircumference, height, imperial) {
    if (imperial) {
        waistCircumference = util_1.inchToCm(waistCircumference);
        height = util_1.inchToCm(height);
    }
    return Number((waistCircumference / height).toFixed(2));
}
exports.whtr = whtr;
/**
 * Categorize the boundaries for WHtR in terms of their health implications.
 *
 * @see {@link https://en.wikipedia.org/wiki/Waist-to-height_ratio#Health_implications}
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} ratio - WHtR.
 * @returns {BodyCategory} Category.
 */
function whtrCategory(gender, age, ratio) {
    if (age < 1 || age > 120) {
        throw new Error('age must be between 1 and 120');
    }
    if (age <= 15) {
        return whtrChildren(ratio);
    }
    if (gender === util_1.Gender.Male) {
        return whtrMale(ratio);
    }
    return whtrFemale(ratio);
}
exports.whtrCategory = whtrCategory;
/**
 * WHtR category for children (up to 15 yeard old).
 *
 * @param {number} ratio - WHtR.
 * @returns {BodyCategory} Category.
 */
function whtrChildren(ratio) {
    if (ratio <= 0.34) {
        return BodyCategory.ExtremelySlim;
    }
    if (ratio >= 0.35 && ratio <= 0.45) {
        return BodyCategory.Slim;
    }
    if (ratio >= 0.46 && ratio <= 0.51) {
        return BodyCategory.Healthy;
    }
    if (ratio >= 0.52 && ratio <= 0.63) {
        return BodyCategory.Overweight;
    }
    return BodyCategory.Obese;
}
/**
 * WHtR category for adult male.
 *
 * @param {number} ratio - WHtR.
 * @returns {BodyCategory} Category.
 */
function whtrMale(ratio) {
    if (ratio <= 0.34) {
        return BodyCategory.ExtremelySlim;
    }
    if (ratio >= 0.35 && ratio <= 0.42) {
        return BodyCategory.Slim;
    }
    if (ratio >= 0.43 && ratio <= 0.52) {
        return BodyCategory.Healthy;
    }
    if (ratio >= 0.53 && ratio <= 0.57) {
        return BodyCategory.Overweight;
    }
    if (ratio >= 0.58 && ratio <= 0.62) {
        return BodyCategory.VeryOverweight;
    }
    return BodyCategory.Obese;
}
/**
 * WHtR category for adult female.
 *
 * @param {number} ratio - WHtR.
 * @returns {BodyCategory} Category.
 */
function whtrFemale(ratio) {
    if (ratio <= 0.34) {
        return BodyCategory.ExtremelySlim;
    }
    if (ratio >= 0.35 && ratio <= 0.41) {
        return BodyCategory.Slim;
    }
    if (ratio >= 0.42 && ratio <= 0.48) {
        return BodyCategory.Healthy;
    }
    if (ratio >= 0.49 && ratio <= 0.53) {
        return BodyCategory.Overweight;
    }
    if (ratio >= 0.54 && ratio <= 0.57) {
        return BodyCategory.VeryOverweight;
    }
    return BodyCategory.Obese;
}
/**
 * Calculates waist-to-hip ratio (WHR).
 *
 * @see {@link https://en.wikipedia.org/wiki/Waist%E2%80%93hip_ratio}
 * @param {number} waistCircumference - Waist circumference of a person.
 * @param {number} hipCircumference - Hip circumference of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} WHR.
 */
function whr(waistCircumference, hipCircumference, imperial) {
    if (imperial) {
        waistCircumference = util_1.inchToCm(waistCircumference);
        hipCircumference = util_1.inchToCm(hipCircumference);
    }
    return Number((waistCircumference / hipCircumference).toFixed(2));
}
exports.whr = whr;
/**
 * Calculates body fat percentage (BFP) using BMI.
 *
 * @see {@link https://en.wikipedia.org/wiki/Body_fat_percentage#From_BMI}
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} bmi - BMI result.
 * @returns {number} BFP.
 */
function bfp(gender, age, bmi) {
    // TODO: validate age and maybe bmi.
    if (gender === util_1.Gender.Male) {
        return Number(((1.20 * bmi) + (0.23 * age) - 16.2).toFixed(2));
    }
    return Number(((1.20 * bmi) + (0.23 * age) - 5.4).toFixed(2));
}
exports.bfp = bfp;
/**
 * Calculates lean body mass (LBM) using the Boer formula.
 *
 * @see {@link https://en.wikipedia.org/wiki/Lean_body_mass#Boer[3]}
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} weight - Weight of a person.
 * @param {number} height - Height of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} LBM.
 */
function lbm(gender, weight, height, imperial) {
    if (imperial) {
        weight = util_1.lbToKg(weight);
        height = util_1.inchToCm(height);
    }
    if (gender === util_1.Gender.Male) {
        return Number(((0.407 * weight) + (0.267 * height) - 19.2).toFixed(2));
    }
    return Number(((0.252 * weight) + (0.473 * height) - 48.3).toFixed(2));
}
exports.lbm = lbm;
/**
 * Calculates relative fat mass (RFM).
 *
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} height - Height of a person.
 * @param {number} waistCircumference - Waist circumference of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} RFM.
 */
function rfm(gender, height, waistCircumference, imperial) {
    if (imperial) {
        height = util_1.inchToCm(height);
        waistCircumference = util_1.inchToCm(waistCircumference);
    }
    if (height < 80 || height > 272) {
        throw new Error('height must be between 80cm and 272cm');
    }
    if (gender === util_1.Gender.Male) {
        return Number((64 - (20 * height / waistCircumference)).toFixed(0));
    }
    return Number((76 - (20 * height / waistCircumference)).toFixed(0));
}
exports.rfm = rfm;
/**
 * Calculates fat-free mass index (FFMI).
 *
 * @param {number} weight - Weight of a person.
 * @param {number} height - Height of a person.
 * @param {number} bodyFat - Body fat percentage.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} FFMI.
 */
function ffmi(weight, height, bodyFat, imperial) {
    if (imperial) {
        weight = util_1.lbToKg(weight);
        height = util_1.inchToCm(height);
    }
    var ffm = weight * (1 - (bodyFat / 100));
    return Number((ffm / (Math.pow((height / 100), 2))).toFixed(2));
}
exports.ffmi = ffmi;
//# sourceMappingURL=body_measurement.js.map