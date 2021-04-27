class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
     
    }


    start() {
        document.addEventListener('click', e => {
            this.game.draw(this.ctx)
        })
    }
}

module.exports = GameView;