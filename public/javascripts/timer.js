
class Timer {
    constructor() {
        this.secs = 120;
        this.gameOver = false;
        this.timer = document.getElementById('timer');
    };

    increment() {
        if(!this.gameOver) {
            if(this.secs > 0) this.secs --;
            if(this.secs <= 60) this.timer.style.color = 'yellow';
            if(this.secs <= 10) this.timer.style.color = 'red';
            if(this.secs === 0) this.gameOver = true;
            this.timer.innerHTML = this.secs;
        };
    };

    reset() {
        this.secs = 120;
        this.gameOver = false;
    };
};

module.exports = Timer;