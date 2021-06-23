const calc = require( '../lib/sports' );

test( 'oneRm()', () => {
	const cases = [
		[ 3, 20, 'epley', 22 ],
		[ 3, 20, 'brzycki', 21.18 ],
		[ 3, 20, 'lombardi', 22.32 ],
		[ 3, 20, 'mayhew', 22.8 ],
		[ 3, 20, 'oconner', 21.5 ],
		[ 3, 20, 'wathan', 21.8 ],
		[ 3, 20, 'lander', 21.44 ],

		[ 10, 100, 'epley', 133.33 ],
		[ 10, 100, 'brzycki', 133.37 ],
		[ 10, 100, 'lombardi', 125.89 ],
		[ 10, 100, 'mayhew', 130.93 ],
		[ 10, 100, 'oconner', 125 ],
		[ 10, 100, 'wathan', 134.75 ],
		[ 10, 100, 'lander', 134.07 ],

		[ 10, 0, 'epley', 0 ],
		[ 10, 0, 'brzycki', 0 ],
		[ 10, 0, 'lombardi', 0 ],
		[ 10, 0, 'mayhew', 0 ],
		[ 10, 0, 'oconner', 0 ],
		[ 10, 0, 'wathan', 0 ],
		[ 10, 0, 'lander', 0 ],

		[ 0, 100, 'epley', new Error( 'reps must be greater than 0' ) ],
	];

	cases.forEach( ( [ reps, weight, formula, expected ] ) => {
		if ( expected instanceof Error ) {
			expect( () => calc.oneRm( reps, weight, formula ) ).toThrow( expected );
		} else {
			expect( calc.oneRm( reps, weight, formula ) ).toBe( expected );
		}
	} );
} );

test( 'hrMax()', () => {
	const cases = [
		[ 20, 'haskell', 200 ],
		[ 20, 'inbar', 192 ],
		[ 20, 'nes', 198 ],
		[ 20, 'oakland', 189 ],
		[ 20, 'tanaka', 194 ],

		[ 60, 'haskell', 160 ],
		[ 60, 'inbar', 165 ],
		[ 60, 'nes', 173 ],
		[ 60, 'oakland', 167 ],
		[ 60, 'tanaka', 166 ],

		[ 0, 'haskell', new Error( 'age must be between 1 and 124' ) ],
		[ 125, 'haskell', new Error( 'age must be between 1 and 124' ) ],
	];

	cases.forEach( ( [ age, formula, expected ] ) => {
		if ( expected instanceof Error ) {
			expect( () => calc.hrMax( age, formula ) ).toThrow( expected );
		} else {
			expect( calc.hrMax( age, formula ) ).toBe( expected );
		}
	} );
} );
