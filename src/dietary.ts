import {
	lbToKg,
	inchToCm,
	Gender,
} from './util';

/**
 * @module dietary
 */

enum BmrEquation {
	HarrisBenedict = 'harrisBenedict',
	RozaAndShizgal = 'rozaAndShizgal',
	Mifflin = 'mifflin',
}

enum ActivityLevel {
	Sedentary = 'sedentary', // little or no exercise
	Light = 'light',         // light exercise / sports (1 -3 days per week)
	Moderate = 'moderate',   // moderate exercise / sports (3 - 5 days per week)
	Active = 'active',       // hard exercise / sports (6 - 7 days per week)
	Extra = 'extra',         // very hard exercise / spors and a physical job
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
export function bmr( gender: Gender, age: number, weight: number, height: number, imperial?: boolean, equation: BmrEquation = BmrEquation.Mifflin ): number {
	if ( imperial ) {
		weight = lbToKg( weight );
		height = inchToCm( height );
	}

	if ( age < 18 || age > 120 ) {
		throw new Error( 'age must be between 18 and 120' );
	}

	// TODO: if imperial is used, the error message should be using lbs.
	if ( weight < 15 || weight > 635 ) {
		throw new Error( 'weight must be between 15kg and 635kg' );
	}

	if ( height < 50 || height > 272 ) {
		throw new Error( 'height must be between 50cm and 272cm' );
	}

	switch ( equation ) {
		case BmrEquation.HarrisBenedict:
			return bmrHarrisBenedict( gender, age, weight, height );
		case BmrEquation.RozaAndShizgal:
			return bmrRozaAndShizgal( gender, age, weight, height );
		default:
			return bmrMifflin( gender, age, weight, height );
	}
}

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
function bmrHarrisBenedict( gender: Gender, age: number, weight: number, height: number ) : number {
	if ( gender === Gender.Male ) {
		return Number( ( 66.5 + ( 13.75 * weight ) + ( 5.003 * height ) - ( 6.755 * age ) ).toFixed( 0 ) );
	}
	return Number( ( 655 + ( 9.563 * weight ) + ( 1.850 * height ) - ( 4.676 * age ) ).toFixed( 0 ) );
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
function bmrRozaAndShizgal( gender: Gender, age: number, weight: number, height: number ) : number {
	if ( gender === Gender.Male ) {
		return Number( ( 88.362 + ( 13.397 * weight ) + ( 4.799 * height ) - ( 5.677 * age ) ).toFixed( 0 ) );
	}
	return Number( ( 447.593 + ( 9.247 * weight ) + ( 3.098 * height ) - ( 4.330 * age ) ).toFixed( 0 ) );
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
function bmrMifflin( gender: Gender, age: number, weight: number, height: number ) : number {
	if ( gender === Gender.Male ) {
		return Number( ( ( 10 * weight ) + ( 6.25 * height ) - ( 5 * age ) + 5 ).toFixed( 0 ) );
	}
	return Number( ( ( 10 * weight ) + ( 6.25 * height ) - ( 5 * age ) - 161 ).toFixed( 0 ) );
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
export function tdee( gender: Gender, age: number, weight: number, height: number, activity: ActivityLevel, imperial?: boolean, equation: BmrEquation = BmrEquation.Mifflin ) : number {
	const b = bmr( gender, age, weight, height, imperial, equation );
	switch ( activity ) {
		case ActivityLevel.Light:
			return Number( ( b * 1.375 ).toFixed( 0 ) );
		case ActivityLevel.Moderate:
			return Number( ( b * 1.55 ).toFixed( 0 ) );
		case ActivityLevel.Active:
			return Number( ( b * 1.725 ).toFixed( 0 ) );
		case ActivityLevel.Extra:
			return Number( ( b * 1.9 ).toFixed( 0 ) );
		default: // Sedentary.
			return Number( ( b * 1.2 ).toFixed( 0 ) );
	}
}

interface Macros {
	carb: [ number, number ],
	fat: [ number, number ],
	protein: [ number, number ],
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
export function amdr( gender: Gender, age: number, weight: number, height: number, activity: ActivityLevel, imperial?: boolean, equation: BmrEquation = BmrEquation.Mifflin ) : Macros {
	const t = tdee( gender, age, weight, height, activity, imperial, equation );
	return {
		carb: [
			Number( ( ( t * 0.45 ) / 4 ).toFixed( 2 ) ),
			Number( ( ( t * 0.65 ) / 4 ).toFixed( 2 ) ),
		],
		fat: [
			Number( ( ( t * 0.20 ) / 9 ).toFixed( 2 ) ),
			Number( ( ( t * 0.35 ) / 9 ).toFixed( 2 ) ),
		],
		protein: [
			Number( ( ( t * 0.10 ) / 4 ).toFixed( 2 ) ),
			Number( ( ( t * 0.35 ) / 4 ).toFixed( 2 ) ),
		]
	}
}
