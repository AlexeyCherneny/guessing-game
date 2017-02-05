class GuessingGame {
    constructor(min = 0, max = 0) {
    	this.guessStart = min;
    	this.guessEnd = max;
    	this.min = min;
    	this.max = max;
    	this.temp = 0;
    }

    setRange(min, max) {
    	this.guessStart = min;
    	this.guessEnd = max;
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	this.temp = Math.round((this.guessStart + this.guessEnd)/2);
    	
    	return this.temp;
    }

    lower() {
    	this.guessEnd = this.temp;
    	
    }

    greater() {
    	this.guessStart = this.temp;
    }
}

module.exports = GuessingGame;
