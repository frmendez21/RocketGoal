const Vehicle = require('./vehicle');
const EnemyGoalie = require('./enemy_goalie');
const Enemy = require('./enemy');

class EnemyVehicle extends Vehicle {
    constructor(ball, player) {
        super(ball, player)
        this.enemyGoalie = new EnemyGoalie([600, 140], ball);
        this.enemy1 = new Enemy({x: 250, y:800, a:270, c:'green', h: 80,
        w: 90}, ball, player);
        this.enemy2 = new Enemy({x: 1200, y:500, a: 270, c:'yellow', h:60, w:90}, ball, player)
        this.enemy3 = new Enemy({x: 1200, y: 1200, a: 180, c:'red', h:50, w:80}, ball, player)
        this.enemy4 = new Enemy({x: 100, y: 1500, a: 0, c:'purple', h:40, w:80}, ball, player)
        this.enemy5 = new Enemy({x: 1200, y: 1750, a: 270, c:'pink', h:50, w:90}, ball, player)
    }
    

    draw(ctx) {
        this.enemyGoalie.draw(ctx, 'horz')
        this.enemy1.draw(ctx, 'vert')
        this.enemy2.draw(ctx, 'vert')
        this.enemy3.draw(ctx, 'horz')
        this.enemy4.draw(ctx, 'horz')
        this.enemy5.draw(ctx, 'vert')
    }
}

module.exports = EnemyVehicle;