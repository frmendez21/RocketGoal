class GameView {
    constructor(game, ctx, bgCtx, stCtx) {
        this.game = game;
        this.vehicle = this.game.vehicle
        this.ctx = ctx;
        this.bgCtx = bgCtx;
        this.stCtx = stCtx;
        this.animate = this.animate.bind(this);
    }
    setEventListeners(){
       document.addEventListener('keydown', e => {
            if(e.key === 'e') this.vehicle.rotateRight()
            if(e.key === 'q') this.vehicle.rotateLeft()
            if(e.key === 'w') this.vehicle.moveForward(e)
            if(e.code === 'Space') this.vehicle.reduceSpeed(e);
        
        });
        document.addEventListener('keyup', e => {
            if(e.key === 'w') this.vehicle.reduceSpeed(e); 
        })
    };

    start() {
        // document.addEventListener('click', e => {
        //     if(e.target.className === 'start-btn') {
                this.game.loadStatic(this.stCtx);
                this.setEventListeners();
                requestAnimationFrame(this.animate);
            //     document.querySelector('.start-btn').classList.add('hidden')
            // };
        // });
    };

    animate() {
        this.game.loadResources(this.ctx);
        requestAnimationFrame(this.animate);
    };
};

module.exports = GameView;