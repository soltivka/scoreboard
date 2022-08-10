"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreBoard = void 0;
var match_1 = require("./match");
var ScoreBoard = /** @class */ (function () {
    function ScoreBoard() {
        this.scores = [];
    }
    /** Adds a new game to the scoreboard. It takes two parameters: (home team name, guest team name).
     *  Returns an instance of the Match with a score of 0-0 */
    ScoreBoard.prototype.newMatch = function (homeTeam, awayTeam) {
        var match = new match_1.Match(homeTeam, awayTeam);
        this.scores.push(match);
        return match;
    };
    /** deletes specified Match from this scoreboard.*/
    ScoreBoard.prototype.finishMatch = function (id) {
        this.scores = this.scores.filter(function (el) { return el.id !== id; });
        return this;
    };
    /** Get a summary of games in progress ordered by their total score. The games with the
     same total score will be returned ordered by the most recently started match in the
     scoreboard.*/
    ScoreBoard.prototype.getScore = function () {
        var scores = __spreadArray([], this.scores, true);
        var sorted = scores.sort(function (a, b) {
            if (a.total < b.total) {
                return -1;
            }
            if (a.total > b.total) {
                return 1;
            }
            if (a.started > b.started) {
                return -1;
            }
            if (a.started < b.started) {
                return 1;
            }
        });
        return sorted;
    };
    return ScoreBoard;
}());
exports.ScoreBoard = ScoreBoard;
