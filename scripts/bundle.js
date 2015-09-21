(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	yardsPerAttempt = function () {
		return this.yards / this.attempts + 'yards';
	};

	function Quarterback(firstname, lastName, team) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.team = team;
		this.attemps = 0;
		this.completions = 0;
		this.yards = 0;
		this.touchdowns = 0;
		this.interceptions = 0;
		this.sacks = 0;
		this.longestCompletion = 0;
		this.yardsPerAttempt = yardsPerAttempt();
		this.completionPercentage = function () {
			return Math.round(this.completions / this.attempts * 100) + '%';
		};
		this.addAttempt = function (type, yards) {
			type.toLowerCase();
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
				this.yards -= yards;
			}
			if (type === 'interception') {
				this.interception++;
			}
		};
	}

	function runningBack(firstname, lastName, team) {
		this.firstname = firstname;
		this.lastName = lastName;
		this.team = team;
		this.attempts = 0;
		this.yards = 0;
		this.over20 = 0;
		this.touchdowns = 0;
		this.firstDowns = 0;
		this.fumbles = 0;
		this.longestRush = 0;
		this.yardsPerAttempt = yardsPerAttempt();
		this.addAttempt = function (type, yards) {
			type.toLowerCase();
			if (yards > 20) {
				this.over20++;
			}
			if (type === 'fumble') {
				this.fumbles++;
				this.attempts++;
			}
		};
	}
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map