"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
var Match = /** @class */ (function () {
    function Match(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.score = {
            home: 0,
            away: 0,
        };
        this.started = new Date().getTime();
        this.id = homeTeam + awayTeam + this.started;
        this.updated = this.started;
    }
    /** Update score. This should receive IScore object of absolute scores: home team score and
     away team score. */
    Match.prototype.update = function (score) {
        if (typeof score.home !== 'number' || typeof score.away !== 'number') {
            throw new Error('score can contain numbers only');
        }
        this.score = score;
        this.updated = new Date().getTime();
        return this;
    };
    Object.defineProperty(Match.prototype, "total", {
        /** Calculates total score of this match (needed to simplify sorting) */
        get: function () {
            return this.score.home + this.score.away;
        },
        enumerable: false,
        configurable: true
    });
    return Match;
}());
exports.Match = Match;
