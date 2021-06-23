const calc = require( '../lib/dietary' );

test( 'bmr()', () => {
	const cases = [
		// Valid cases.
		[ 'male', 37, 67, 172, false, 'harrisBenedict', 1598 ],
		[ 'male', 37, 67, 172, false, 'rozaAndShizgal', 1601 ],
		[ 'male', 37, 67, 172, false, 'mifflin', 1565 ],
		[ 'female', 37, 67, 172, false, 'harrisBenedict', 1441 ],
		[ 'female', 37, 67, 172, false, 'rozaAndShizgal', 1440 ],
		[ 'female', 37, 67, 172, false, 'mifflin', 1399 ],

		// Imperial.
		[ 'male', 20, 176.37, 70.8661, true, 'mifflin', 1830 ],

		// Throws error.
		[ 'male', 14, 67, 172, false, 'harrisBenedict', new Error( 'age must be between 18 and 120' ) ],
		[ 'male', 121, 67, 172, false, 'harrisBenedict', new Error( 'age must be between 18 and 120' ) ],
		[ 'male', 37, 14, 172, false, 'harrisBenedict', new Error( 'weight must be between 15kg and 635kg' ) ],
		[ 'male', 37, 636, 172, false, 'harrisBenedict', new Error( 'weight must be between 15kg and 635kg' ) ],
		[ 'male', 37, 67, 49, false, 'harrisBenedict', new Error( 'height must be between 50cm and 272cm' ) ],
		[ 'male', 37, 67, 273, false, 'harrisBenedict', new Error( 'height must be between 50cm and 272cm' ) ],
	];
	cases.forEach( testCase => {
		const [ gender, age, weight, height, imperial, equation, expected ] = testCase;
		if ( expected instanceof Error ) {
			expect( () => calc.bmr( gender, age, weight, height, imperial, equation ) ).toThrow( expected );
		} else {
			expect( calc.bmr( gender, age, weight, height, imperial, equation ) ).toBe( expected );
		}
	} )
} );

test( 'tdee()', () => {
	const cases = [
		// Valid cases.
		[ 'male', 20, 72, 180, 'sedentary', false, 2100 ],
		[ 'male', 20, 72, 180, 'light', false, 2406 ],
		[ 'male', 20, 72, 180, 'moderate', false, 2713 ],
		[ 'male', 20, 72, 180, 'active', false, 3019 ],
		[ 'male', 20, 72, 180, 'extra', false, 3325 ],
		[ 'female', 20, 72, 180, 'sedentary', false, 1901 ],
		[ 'female', 20, 72, 180, 'light', false, 2178 ],
		[ 'female', 20, 72, 180, 'moderate', false, 2455 ],
		[ 'female', 20, 72, 180, 'active', false, 2732 ],
		[ 'female', 20, 72, 180, 'extra', false, 3010 ],

		// Imperial.
		[ 'male', 20, 158.733, 70.8661, 'sedentary', true, 2100 ],

		// Throws error.
		[ 'male', 17, 72, 180, 'sedentary', false, new Error( 'age must be between 18 and 120' ) ],
		[ 'male', 121, 72, 180, 'sedentary', false, new Error( 'age must be between 18 and 120' ) ],
		[ 'male', 20, 14, 180, 'sedentary', false, new Error( 'weight must be between 15kg and 635kg' ) ],
		[ 'male', 20, 636, 180, 'sedentary', false, new Error( 'weight must be between 15kg and 635kg' ) ],
		[ 'male', 20, 72, 49, 'sedentary', false, new Error( 'height must be between 50cm and 272cm' ) ],
		[ 'male', 20, 72, 273, 'sedentary', false, new Error( 'height must be between 50cm and 272cm' ) ],
	];

	cases.forEach( ( [ gender, age, w, h, activity, imperial, expected ] ) => {
		if ( expected instanceof Error ) {
			expect( () => calc.tdee( gender, age, w, h, activity, imperial ) ).toThrow( expected );
		} else {
			expect( calc.tdee( gender, age, w, h, activity, imperial ) ).toBe( expected );
		}
	} );
} );

test( 'amdr()', () => {
	const cases = [
		[ 'male', 20, 72, 180, 'moderate', false, { carb: [305.21, 440.86], fat: [60.29, 105.51], protein: [67.83, 237.39] } ],
		[ 'female', 20, 72, 180, 'moderate', false, { carb: [276.19, 398.94], fat: [54.56, 95.47], protein: [61.38, 214.81] } ],
	];

	cases.forEach( ( [ gender, age, w, h, activity, imperial, expected ] ) => {
		expect( calc.amdr( gender, age, w, h, activity, imperial ) ).toStrictEqual( expected );
	} );
} );
