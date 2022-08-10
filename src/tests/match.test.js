const {Match, IScore} = require('../match')

describe('Match:', () => {
    let match
    beforeEach(() => {
        match = new Match('one', 'two')
    })

    test('should be constructor', () => {
        expect(match).toBeInstanceOf(Match)
    })

    test('parameters "homeTeam" and "awayTeam" should apply correctly', () => {
        expect(match.homeTeam).toBe('one')
        expect(match.awayTeam).toBe('two')
    })

})

describe(`Matches score `, () => {
    let match
    beforeEach(() => {
        match = new Match('one', 'two')
    })

    test('start score should be 0 - 0', () => {
        expect(match.score.away).toBe(0)
        expect(match.score.home).toBe(0)
    })

    test('parameters "homeTeam" and "awayTeam" should apply correctly', () => {
        match.update({home: 10, away: 20})
        expect(match.score).toEqual({home: 10, away: 20})
    })

    test('should throw an Error, if parameters are not numbers', () => {
        expect(() => {
            match.update({home: null, away: undefined})
        }).toThrow('score can contain numbers only')

        expect(() => {
            match.update({home: 0, away: '0'})
        }).toThrow('score can contain numbers only')
    })

    test('total score must be a sum of home and away team score', () => {
        match.update({home: 10, away: 20})
        expect(match.total).toEqual(30)
    })
})