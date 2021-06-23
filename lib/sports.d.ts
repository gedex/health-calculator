/**
 * @module sports
 */
declare enum OneRmFormula {
    Epley = "epley",
    Brzycki = "brzycki",
    Lombardi = "lombardi",
    Mayhew = "mayhew",
    OConner = "oconner",
    Wathan = "wathan",
    Lander = "lander"
}
/**
 * Calculates one-repetition maximum (1RM) using various formula.
 *
 * @param {number} reps - Number of repetition of a given weight.
 * @param {number} weight - Weight being lifted for a given reps.
 * @param {OneRmFormula} formula - Formula to use.
 * @returns {number} One rep max.
 */
export declare function oneRm(reps: number, weight: number, formula?: OneRmFormula): number;
declare enum HRMaxFormula {
    Haskell = "haskell",
    Inbar = "inbar",
    Nes = "nes",
    Oakland = "oakland",
    Tanaka = "tanaka"
}
/**
 * Calculates maximum heart rate (HR) of a given age and formula.
 *
 * @param {number} age - Person age.
 * @param {HRMaxFormula} formula - Formula to use.
 * @returns {number} HRmax in BPM (beats per minute).
 */
export declare function hrMax(age: number, formula?: HRMaxFormula): number;
export {};
//# sourceMappingURL=sports.d.ts.map