
class GameView {
    constructor(game, ctx, stCtx) {
        this.game = game;
        this.vehicle = this.game.vehicle
        this.ctx = ctx;
        this.stCtx = stCtx;
        this.animate = this.animate.bind(this);
    };

    setEventListeners(){
       document.addEventListener('keydown', e => {
            if(e.key === "ArrowLeft" || e.key === 'ArrowRight') this.vehicle.rotateVehicle(e)
            if(e.key === 'ArrowUp' || e.key === 'ArrowDown') this.vehicle.moveVehicle(e)
            if(e.key === 'f') this.vehicle.testFunc()
            if(e.code === 'Space') this.vehicle.reduceSpeed(e);
            if(e.code === 'ShiftLeft') this.vehicle.activateBoost(e);
        });
        document.addEventListener('keyup', e => {
            if(e.key === 'ArrowUp') this.vehicle.reduceSpeed(e); 
            if(e.key === "Shift") this.vehicle.reduceSpeed(e);
        });
    };

    start() {
        document.addEventListener('click', e => {
            const audio = document.getElementById('song');
            const mute = document.getElementById('mute');
            const play = document.getElementById('play');
            audio.volume = 0.1;
            if(e.target.className === 'start-btn') {
                document.querySelector('.start-game-container').classList.add('hidden');
                audio.play();
                this.game.loadStatic(this.stCtx);
                this.setEventListeners();
                requestAnimationFrame(this.animate);
            } else if(e.target.id === "mute"){
                audio.pause();
                mute.style.display = 'none';
                play.style.display = 'block';
            } else if(e.target.id === "play") {
                audio.play();
                play.style.display = 'none';
                mute.style.display = 'block';
            };
        });
    };

    animate() {
        this.game.loadResources(this.ctx);
        requestAnimationFrame(this.animate);
    }; 
};

module.exports = GameView;