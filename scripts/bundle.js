(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    function Quarterback(name, team) {
        this.name = name;
        this.team = team;
        this.attemps = 0;
        this.completions = 0;
        this.yards = 0;
        this.touchdowns = 0;
        this.interceptions = 0;
        this.sacks = 0;
        this.longestCompletion = 0;
        this.addAttempt = function (type, yards) {
            type.toLowerCase();
            var longest = 0;
            if (longest < yards) {
                longest = yards;
                this.longestRush = longest + 'yards';
            }
            if (type === 'touchdown') {
                this.touchdown++;
                this.attempts++;
                this.yards += yards;
                this.completions++;
            }
            if (type === 'complete') {
                this.completions++;
                this.attempts++;
                this.yards += yards;
            }
            if (type === 'incomplete') {
                this.attempts++;
            }
            if (type === 'sack') {
                this.sacks++;
                this.yards += yards;
            }
            if (type === 'interception') {
                this.interception++;
            }
        };
        this.yardsPerAttempt = function () {
            return this.yards / this.attempts + 'yards';
        };
        this.completionPercentage = function () {
            return Math.round(this.completions / this.attempts * 100) + '%';
        };
    }

    var jarrodHeard = new Quarterback('Jarrod Heard', 'Longhorns');
    var steveYoung = new Quarterback('Steve Young', 'San Fransico');
    console.log(jarrodHeard);
    console.log(steveYoung);

    function RunningBack(name, team) {
        this.name = name;
        this.team = team;
        this.attempts = 0;
        this.yards = 0;
        this.over20 = 0;
        this.touchdowns = 0;
        this.firstDowns = 0;
        this.fumbles = 0;
        this.longestRush = 0;
        this.addAttempt = function (type, yards) {
            type.toLowerCase();
            var longest = 0;
            if (longest < yards) {
                longest = yards;
                this.longestRush = longest + 'yards';
            }
            if (yards > 20) {
                this.over20++;
            }
            if (type === 'fumble') {
                this.fumbles++;
                this.attempts++;
            }
            if (type === 'firstDown') {
                this.attempts++;
                this.firstDowns++;
                this.yards += yards;
            }
            if (tpye === 'touchdown') {
                this.touchdowns++;
                this.attempts++;
                this.yards += yards;
            }
        };
        this.yardsPerAttempt = function () {
            return this.yards / this.attempts + 'yards';
        };
    }

    var barrySanders = new RunningBack('Barry Sanders', 'Detroit');
    var jamaalCharles = new RunningBack('Jamaal Charles', 'Kansas City');
    console.log(barrySanders);
    console.log(jarrodHeard);

    function Kicker(name, team) {
        this.name = name;
        this.team = team;
        this.attemps = 0;
        this.made = 0;
        this.longestFieldGoal = 0;
        this.addAttempt = function (type, yards) {
            type.toLowerCase();
            var longest = 0;
            if (longest < yards) {
                longest = yards;
                this.longestFieldGoal = longest + 'yards';
            }
            if (type === 'made') {
                this.attempts++;
                this.made++;
            }
            if (type === 'missed') {
                this.attempts++;
            }
            this.fieldGoalPercentage = function () {
                return Math.round(this.made / this.attempts * 100) + '%';
            };
        };
    }

    var justinTucker = new Kicker('Justin Tucker', 'Baltimore');
    var philDawson = new Kicker('Phil Dawson', 'San Fransico');
    console.log(justinTucker);
    console.log(philDawson);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map