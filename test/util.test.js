const util = require( '../lib/util' );

test( 'cmToInch()', () => {
	const cases = [
		// [ input in cm, expected output in inch ]
		[ -1, -0.39 ],
		[ 0, 0 ],
		[ 1, 0.39 ],
		[ 175.5, 69.09 ],
	];

	cases.forEach( testCase => {
		const [ input, expected ] = testCase;
		expect( Number( util.cmToInch( input ).toFixed( 2 ) ) ).toBe( expected );
	} );
} );

test( 'inchToCm()', () => {
	const cases = [
		// [ input in inch, expected output in cm ]
		[ -0.39, -0.99 ],
		[ 0, 0 ],
		[ 1, 2.54 ],
		[ 69.09, 175.49 ],
	];

	cases.forEach( testCase => {
		const [ input, expected ] = testCase;
		expect( Number( util.inchToCm( input ).toFixed( 2 ) ) ).toBe( expected );
	} );
} );

test( 'lbToKg()', () => {
	const cases = [
		// [ input in lb, expected output in kg ]
		[ -0.99, -0.45 ],
		[ 0, 0 ],
		[ 1, 0.45 ],
		[ 150, 68.04 ],
	];

	cases.forEach( testCase => {
		const [ input, expected ] = testCase;
		expect( Number( util.lbToKg( input ).toFixed( 2 ) ) ).toBe( expected );
	} );
} );

test( 'kgToLb()', () => {
	const cases = [
		// [ input in kg, expected output in lb ]
		[ -0.45, -0.99 ],
		[ 0, 0 ],
		[ 1, 2.2 ],
		[ 68.04, 150 ],
	];

	cases.forEach( testCase => {
		const [ input, expected ] = testCase;
		expect( Number( util.kgToLb( input ).toFixed( 2 ) ) ).toBe( expected );
	} );
} );
