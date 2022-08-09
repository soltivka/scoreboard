"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var match_1 = require("./match");
var ScoreBoard = /** @class */ (function () {
    function ScoreBoard() {
        this.scores = [];
    }
    ScoreBoard.prototype.newMatch = function (homeTeam, awayTeam) {
        var match = new match_1.Match(homeTeam, awayTeam);
        this.scores.push(match);
        return match;
    };
    ScoreBoard.prototype.getMatch = function (id) {
        return this.scores.find(function (el) { return el.id === id; });
    };
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
        return sorted.map(function (el) { return __assign(__assign({}, el.score), { homeTeam: el.homeTeam, awayTeam: el.awayTeam, time: el.started }); });
    };
    return ScoreBoard;
}());
var SB = new ScoreBoard();
var first = SB.newMatch('ukrop', 'rusnya');
var second = setTimeout(function () {
    SB.newMatch('newYork', 'London').update({ home: 15, away: 0 });
}, 1000);
var third = SB.newMatch('georgia', 'rusnya');
first.update({ home: 15, away: 0 });
third.update({ home: 15, away: 0 });
setTimeout(function () {
    console.log(SB.getScore());
}, 1500);
