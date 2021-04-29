const Game = require('./game');
const GameView = require('./game_view');


document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('game-canvas');
    const bg = document.getElementById('bg-canvas');
    const sCanvas = document.getElementById('static-canvas')
    const ctx = canvas.getContext('2d');
    const bgCtx = bg.getContext('2d');
    const stCtx = sCanvas.getContext('2d');

    const game = new Game();
    
    new GameView(game, ctx, bgCtx, stCtx).start();
    

});