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
    Match.prototype.update = function (score) {
        this.score = score;
        this.updated = new Date().getTime();
        return this;
    };
    Object.defineProperty(Match.prototype, "total", {
        get: function () {
            return this.score.home + this.score.away;
        },
        enumerable: false,
        configurable: true
    });
    Match.prototype.finishHim = function () {
        //some procedure to mark match as finished
        return undefined;
    };
    return Match;
}());
exports.Match = Match;
