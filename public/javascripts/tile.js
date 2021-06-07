class Tile {
    constructor(options) {
        this.options = options;
    };

    draw(ctx) {
        let tile = new Image();
        tile.src = `public/images/track/tile${this.options.n}.png`;
        tile.width = this.options.w;
        tile.height = this.options.h;
        tile.onload = () => {
            ctx.drawImage(tile, this.options.x, this.options.y, tile.width, tile.height);
        };
    };
};

module.exports = Tile;