/**
 * @module util
 */

export enum Gender {
	Female = 'female',
	Male = 'male',
}

/**
 * Converts cm to inch.
 *
 * @param {number} cm - Length in cm.
 * @returns {number} Length in inch.
 */
export function cmToInch( cm: number ): number {
	return cm / 2.54;
}

/**
 * Converts inch to cm.
 *
 * @param {number} inch - Length in inch.
 * @returns {number} Length in cm.
 */
export function inchToCm( inch: number ): number {
	return inch * 2.54;
}

/**
 * Converts lb to kg.
 *
 * @param {number} lb - Weight in lb.
 * @returns {number} Weight in kg.
 */
export function lbToKg( lb: number ): number {
	return lb / 2.2046;
}

/**
 * Converts kg to lb.
 *
 * @param {number} kg - Weight in kg.
 * @returns {number} Weight in lb.
 */
export function kgToLb( kg: number ): number {
	return kg * 2.2046;
}
