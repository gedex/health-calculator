import { Gender } from './util';
/**
 * @module dietary
 */
declare enum BmrEquation {
    HarrisBenedict = "harrisBenedict",
    RozaAndShizgal = "rozaAndShizgal",
    Mifflin = "mifflin"
}
declare enum ActivityLevel {
    Sedentary = "sedentary",
    Light = "light",
    Moderate = "moderate",
    Active = "active",
    Extra = "extra"
}
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
export declare function bmr(gender: Gender, age: number, weight: number, height: number, imperial?: boolean, equation?: BmrEquation): number;
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
export declare function tdee(gender: Gender, age: number, weight: number, height: number, activity: ActivityLevel, imperial?: boolean, equation?: BmrEquation): number;
interface Macros {
    carb: [number, number];
    fat: [number, number];
    protein: [number, number];
}
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
export declare function amdr(gender: Gender, age: number, weight: number, height: number, activity: ActivityLevel, imperial?: boolean, equation?: BmrEquation): Macros;
export {};
//# sourceMappingURL=dietary.d.ts.map