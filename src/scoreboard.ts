import {Match} from "./match";


export class ScoreBoard {
    scores: Match[];

    constructor() {
        this.scores = []
    }

    /** Adds a new game to the scoreboard. It takes two parameters: (home team name, guest team name).
     *  Returns an instance of the Match with a score of 0-0 */
    newMatch(homeTeam: string, awayTeam: string) {
        const match = new Match(homeTeam, awayTeam)
        this.scores.push(match)
        return match
    }

    /** deletes specified Match from this scoreboard.*/
    finishMatch(id:string):ScoreBoard {
        this.scores = this.scores.filter(el => el.id !== id)
        return this
    }

    /** Get a summary of games in progress ordered by their total score. The games with the
     same total score will be returned ordered by the most recently started match in the
     scoreboard.*/
    getScore() {
        const scores = [...this.scores]
        const sorted = scores.sort((a, b) => {
            if (a.total < b.total) {
                return -1
            }
            if (a.total > b.total) {
                return 1
            }
            if (a.started > b.started) {
                return -1
            }
            if (a.started < b.started) {
                return 1
            }
        })
        return sorted
    }
}


