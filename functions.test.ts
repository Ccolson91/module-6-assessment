const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let sample = [1, 2, 3, 4, 5]
    let value = shuffleArray(sample)
    
    test('shuffleArray returns an array', () => {
        expect(Array.isArray(value)).toBe(true)
    })
    test('shuffleArray returns array with the same length', () => {
        expect(value.length).toEqual(shuffleArray(sample).length)
    })
})