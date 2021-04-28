class GameView {
    constructor(game, ctx, bgCtx) {
        this.game = game;
        this.vehicle = this.game.vehicle
        this.ctx = ctx;
        this.bgCtx = bgCtx;
        this.animate = this.animate.bind(this);
    }
    setEventListeners(){
       document.addEventListener('keydown', e => {
            if(e.key === 'e') this.vehicle.rotateRight()
            if(e.key === 'q') this.vehicle.rotateLeft()
            if(e.key === 'w') this.vehicle.moveForward()
            if(e.key === 's') this.vehicle.moveBackward()
        });
    };

    start() {
        this.game.draw(this.bgCtx);
        document.addEventListener('click', e => {
            this.setEventListeners();
            requestAnimationFrame(this.animate)
        });
    };

    animate() {
        this.game.loadResources(this.ctx);
        requestAnimationFrame(this.animate);
    };
};

module.exports = GameView;