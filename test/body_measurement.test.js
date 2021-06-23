const calc = require( '../lib/body_measurement' );

test( 'bmi()', () => {
	const cases = [
		// [ weight in kg, height in cm, flag to use imperial, expected output ]
		[ 67, 172, false, 22.65 ],
		[ 20, 100, false, 20 ],
		[ 0, 0, false, NaN ],
		[ 147.71, 67.7165, true, 22.65 ],
		[ 44.0925, 39.3701, true, 20 ],
		[ 0, 0, true, NaN ],
	];

	cases.forEach( testCase => {
		const [ w, h, imperial, expected ] = testCase;
		expect( calc.bmi( w, h, imperial ) ).toBe( expected );
	} );
} );

test( 'whtr()', () => {
	const cases = [
		// [ waist circumference, height, imperial?, expected ]
		[ 80, 180, false, 0.44 ],
		[ 31.496, 70.87, true, 0.44 ],
		[ 0, 0, false, NaN ],
		[ 0, 100, false, 0 ],
		[ 100, 0, false, Infinity ],
	];

	cases.forEach( ( [ wc, h, imperial, expected ] ) => {
		expect( calc.whtr( wc, h, imperial ) ).toBe( expected );
	} );
} );

test( 'whtrCategory()', () => {
	const cases = [
		// Children. Gender doesn't matter.
		[ 'male', 1, 0.33, 'Extremely Slim' ],
		[ 'male', 2, 0.35, 'Slim' ],
		[ 'male', 3, 0.36, 'Slim' ],
		[ 'male', 4, 0.45, 'Slim' ],
		[ 'male', 5, 0.46, 'Healthy' ],
		[ 'male', 6, 0.50, 'Healthy' ],
		[ 'male', 7, 0.51, 'Healthy' ],
		[ 'male', 8, 0.52, 'Overweight' ],
		[ 'male', 9, 0.62, 'Overweight' ],
		[ 'male', 10, 0.63, 'Overweight' ],
		[ 'male', 14, 0.64, 'Obese' ],
		[ 'male', 15, 1, 'Obese' ],

		// Male.
		[ 'male', 16, 0.33, 'Extremely Slim' ],
		[ 'male', 16, 0.35, 'Slim' ],
		[ 'male', 16, 0.36, 'Slim' ],
		[ 'male', 16, 0.42, 'Slim' ],
		[ 'male', 16, 0.43, 'Healthy' ],
		[ 'male', 16, 0.51, 'Healthy' ],
		[ 'male', 16, 0.52, 'Healthy' ],
		[ 'male', 16, 0.53, 'Overweight' ],
		[ 'male', 119, 0.56, 'Overweight' ],
		[ 'male', 119, 0.57, 'Overweight' ],
		[ 'male', 119, 0.58, 'Very Overweight' ],
		[ 'male', 119, 0.61, 'Very Overweight' ],
		[ 'male', 119, 0.62, 'Very Overweight' ],
		[ 'male', 119, 0.63, 'Obese' ],
		[ 'male', 119, 1, 'Obese' ],

		// Female.
		[ 'female', 16, 0.33, 'Extremely Slim' ],
		[ 'female', 16, 0.35, 'Slim' ],
		[ 'female', 16, 0.36, 'Slim' ],
		[ 'female', 16, 0.41, 'Slim' ],
		[ 'female', 16, 0.42, 'Healthy' ],
		[ 'female', 16, 0.47, 'Healthy' ],
		[ 'female', 16, 0.48, 'Healthy' ],
		[ 'female', 119, 0.49, 'Overweight' ],
		[ 'female', 119, 0.52, 'Overweight' ],
		[ 'female', 119, 0.53, 'Overweight' ],
		[ 'female', 119, 0.54, 'Very Overweight' ],
		[ 'female', 119, 0.56, 'Very Overweight' ],
		[ 'female', 119, 0.57, 'Very Overweight' ],
		[ 'female', 119, 0.58, 'Obese' ],
		[ 'female', 119, 1, 'Obese' ],

		// Error.
		[ 'male', -1, 0, new Error( 'age must be between 1 and 120' ) ],
		[ 'male', 0, 0, new Error( 'age must be between 1 and 120' ) ],
		[ 'male', 121, 0, new Error( 'age must be between 1 and 120' ) ],
	];

	cases.forEach( ( [ gender, age, ratio, expected ] ) => {
		if ( expected instanceof Error ) {
			expect( () => calc.whtrCategory( gender, age, ratio ) ).toThrow( expected );
		} else {
			expect( calc.whtrCategory( gender, age, ratio ) ).toBe( expected );
		}
	} );
} );

test( 'whr()', () => {
	const cases = [
		[ -1, 85, -0.01 ],
		[ 0, 85, 0 ],
		[ 70, 85, 0.82 ],
		[ 70, 0, Infinity ],
	];

	cases.forEach( ( [ w, h, expected ] ) => {
		expect( calc.whr( w, h ) ).toBe( expected );
	} );
} );

test( 'bfp()', () => {
	const cases = [
		[ 'male', 20, 20.1, 12.52 ],
		[ 'female', 20, 20.1, 23.32 ],
		[ 'male', 0, 0, -16.2 ],
		[ 'female', 0, 0, -5.4 ],
	];

	cases.forEach( ( [ gender, age, bmi, expected ] ) => {
		expect( calc.bfp( gender, age, bmi ) ).toBe( expected );
	} );
} );

test( 'lbm()', () => {
	const cases = [
		[ 'male', 70, 172, false, 55.21 ],
		[ 'female', 70, 172, false, 50.7 ],
		[ 'male', 154.324, 67.7165, true, 55.21 ],
		[ 'female', 154.324, 67.7165, true, 50.7 ],
		[ 'male', 0, 0, false, -19.2 ],
		[ 'female', 0, 0, false, -48.3 ],
	];

	cases.forEach( ( [ gender, weight, height, imperial, expected ] ) => {
		expect( calc.lbm( gender, weight, height, imperial ) ).toBe( expected );
	} );
} );

test( 'rfm()', () => {
	const cases = [
		[ 'male', 172, 70, false, 15 ],
		[ 'female', 172, 70, false, 27 ],
		[ 'male', 79, 0, false, new Error( 'height must be between 80cm and 272cm' ) ],
		[ 'male', 273, 0, false, new Error( 'height must be between 80cm and 272cm' ) ],
	];

	cases.forEach( ( [ gender, height, waist, imperial, expected ] ) => {
		if ( expected instanceof Error ) {
			expect( () => calc.rfm( gender, height, waist, imperial ) ).toThrow( expected );
		} else {
			expect( calc.rfm( gender, height, waist, imperial ) ).toBe( expected );
		}
	} );
} );

test( 'ffmi()', () => {
	const cases = [
		[ 70, 0, 20, false, Infinity ],
		[ 0, 0, 20, false, NaN ],
		[ 0, 172, 20, false, 0 ],
		[ 0, 172, 0, false, 0 ],
		[ 70, 172, 20, false, 18.93 ],
		[ 80, 172, 5, false, 25.69 ],
	];

	cases.forEach( ( [ w, h, bf, imperial, expected ] ) => {
		expect( calc.ffmi( w, h, bf, imperial ) ).toBe( expected );
	} );
} )
