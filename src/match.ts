export interface IScore {
    home: number;
    away: number;
}

export class Match {
    id: string;
    homeTeam: string;
    awayTeam: string;
    score: IScore;
    updated: number;
    started: number;

    constructor(homeTeam: string, awayTeam: string) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.score = {
            home: 0,
            away: 0,
        }
        this.started = new Date().getTime()
        this.id = homeTeam + awayTeam + this.started
        this.updated = this.started
    }

    /** Update score. This should receive IScore object of absolute scores: home team score and
     away team score. */
    update(score: IScore) {
        if(typeof score.home!=='number' || typeof score.away !=='number' ){
            throw new Error('score can contain numbers only')
        }
        this.score = score
        this.updated = new Date().getTime()
        return this
    }

    /** Calculates total score of this match (needed to simplify sorting) */
    get total() {
        return this.score.home + this.score.away
    }
}
