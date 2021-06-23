import { Gender } from './util';
/**
 * @module body_measurement
 */
declare enum BodyCategory {
    ExtremelySlim = "Extremely Slim",
    Slim = "Slim",
    Healthy = "Healthy",
    Overweight = "Overweight",
    VeryOverweight = "Very Overweight",
    Obese = "Obese"
}
/**
 * Calculates body mass index (BMI).
 *
 * @param {number} weight - Weight of a person.
 * @param {number} height - Height of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} BMI.
 */
export declare function bmi(weight: number, height: number, imperial?: boolean): number;
/**
 * Calculates waist-to-height ratio (WHtR).
 *
 * @see {@link https://en.wikipedia.org/wiki/Waist-to-height_ratio}
 * @param {number} waistCircumference - Waist circumference of a person.
 * @param {number} height - Height of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} WHtR.
 */
export declare function whtr(waistCircumference: number, height: number, imperial?: boolean): number;
/**
 * Categorize the boundaries for WHtR in terms of their health implications.
 *
 * @see {@link https://en.wikipedia.org/wiki/Waist-to-height_ratio#Health_implications}
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} ratio - WHtR.
 * @returns {BodyCategory} Category.
 */
export declare function whtrCategory(gender: Gender, age: number, ratio: number): BodyCategory;
/**
 * Calculates waist-to-hip ratio (WHR).
 *
 * @see {@link https://en.wikipedia.org/wiki/Waist%E2%80%93hip_ratio}
 * @param {number} waistCircumference - Waist circumference of a person.
 * @param {number} hipCircumference - Hip circumference of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} WHR.
 */
export declare function whr(waistCircumference: number, hipCircumference: number, imperial?: boolean): number;
/**
 * Calculates body fat percentage (BFP) using BMI.
 *
 * @see {@link https://en.wikipedia.org/wiki/Body_fat_percentage#From_BMI}
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} age - Age between 18 and 120.
 * @param {number} bmi - BMI result.
 * @returns {number} BFP.
 */
export declare function bfp(gender: Gender, age: number, bmi: number): number;
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
export declare function lbm(gender: Gender, weight: number, height: number, imperial?: boolean): number;
/**
 * Calculates relative fat mass (RFM).
 *
 * @param {Gender} gender - 'male' or 'female'.
 * @param {number} height - Height of a person.
 * @param {number} waistCircumference - Waist circumference of a person.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} RFM.
 */
export declare function rfm(gender: Gender, height: number, waistCircumference: number, imperial?: number): number;
/**
 * Calculates fat-free mass index (FFMI).
 *
 * @param {number} weight - Weight of a person.
 * @param {number} height - Height of a person.
 * @param {number} bodyFat - Body fat percentage.
 * @param {boolean} imperial - Flag to use imperial (lb and inch). Default to use metric (kg and cm).
 * @returns {number} FFMI.
 */
export declare function ffmi(weight: number, height: number, bodyFat: number, imperial?: number): number;
export {};
//# sourceMappingURL=body_measurement.d.ts.map