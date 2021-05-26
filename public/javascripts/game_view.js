class GameView {
    constructor(game, ctx, stCtx) {
        this.game = game;
        this.vehicle = this.game.vehicle
        this.ctx = ctx;
        this.stCtx = stCtx;
        this.animate = this.animate.bind(this);
        this.start = this.start.bind(this);
    }
    setEventListeners(){
       document.addEventListener('keydown', e => {
            if(e.key === 'e' || e.key === 'q') this.vehicle.rotateVehicle(e)
            if(e.key === 'w' || e.key === 's') this.vehicle.moveVehicle(e)
            if(e.key === 'f') this.vehicle.testFunc()
            if(e.code === 'Space') this.vehicle.reduceSpeed(e);
        
        });
        document.addEventListener('keyup', e => {
            if(e.key === 'w') this.vehicle.reduceSpeed(e); 
        })
    };
    restart() {
        // const newGame = new GameView
    }

    start() {
        // document.addEventListener('click', e => {
            // if(e.target.className === 'start-btn') {
                const audio = document.getElementById('song');
                audio.volume = 0.1;
                // audio.play()
                this.game.loadStatic(this.stCtx);
                this.setEventListeners();
                requestAnimationFrame(this.animate);
                // document.querySelector('.start-game-container').classList.add('hidden')
            // };
        // });
    };

    animate() {
        this.game.loadResources(this.ctx);
        requestAnimationFrame(this.animate);
    };
};

module.exports = GameView;