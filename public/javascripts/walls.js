class Walls {
    constructor() {
        this.x = 0;
        this.y = 500;
    }


    draw(ctx) {
        // ctx.save();
        this.stone = new Image();
        this.stone.onload = () => {
                for(let i = 0; i < 10; i++) {
                    ctx.drawImage(this.stone, this.x, 500, 100, 100)
                    this.x += 75
            };
        };
        // this.stone.src = '/public/images/stone.png'
        // ctx.restore();
    }
}

module.exports = Walls;
