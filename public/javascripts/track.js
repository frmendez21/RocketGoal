const Tile = require('./tile');
class Track {
    constructor() {
        this.group1 = {
            tile1: new Tile({n:'01', x: '0', y: '1750', h:'30', w:'1000'}),
            tile2: new Tile({n:'04', x:'1000', y: '1750', h:'30', w:'60'}),
            tile3: new Tile({n:'06', x:'1000', y: '1720', h: '30', w: '60'}),
            tile4: new Tile({n:'10', x:'0', y: '1720', h: '30', w: '1000'})
        };
        this.group2 = {
            tile1: new Tile({n:'01', x: '825', y: '1400', h:'30', w:'600'}),
            tile2: new Tile({n:'05', x:'765', y: '1400', h: '30', w: '60'}),
            tile3: new Tile({n:'07', x:'760', y: '1370', h: '30', w: '65'}),
            tile4: new Tile({n:'10', x:'820', y: '1370', h: '30', w: '605'})
        };

        this.group3 = {
            tile1: new Tile({n:'01', x: '0', y: '1150', h:'30', w:'350'}),
            tile2: new Tile({n:'04', x:'350', y: '1150', h:'30', w:'60'}),
            tile3: new Tile({n:'06', x:'350', y: '1120', h: '30', w: '60'}),
            tile4: new Tile({n:'10', x:'0', y: '1121', h: '29', w: '350'})
        };

        this.group4 = {
            tile1: new Tile({n:'01', x: '1125', y: '800', h:'30', w:'300'}),
            tile2: new Tile({n:'05', x:'1065', y: '800', h: '30', w: '60'}),
            tile3: new Tile({n:'07', x:'1060', y: '770', h: '30', w: '65'}),
            tile4: new Tile({n:'10', x:'1125', y: '770', h: '30', w: '300'})
        };

        this.group5 = {
            tile17: new Tile({n:'01', x: '650', y: '600', h:'30', w:'250'}),
            tile18: new Tile({n:'05', x:'590', y: '600', h: '30', w: '60'}),
            tile19: new Tile({n:'07', x:'585', y: '570', h: '30', w: '65'}),
            tile20: new Tile({n:'10', x:'650', y: '570', h: '30', w: '250'}),
            tile21: new Tile({n:'06', x:'900', y: '569', h: '30', w: '60'}),
            tile22: new Tile({n:'04', x:'900', y: '599', h:'30', w:'60'})
        };

    };

    draw(ctx) {
        Object.values(this.group1).forEach(tile => {
            tile.draw(ctx)
        });
        Object.values(this.group2).forEach(tile => {
            tile.draw(ctx)
        });
        Object.values(this.group3).forEach(tile => {
            tile.draw(ctx)
        });
        Object.values(this.group3).forEach(tile => {
            tile.draw(ctx)
        });
        Object.values(this.group4).forEach(tile => {
            tile.draw(ctx)
        });
        Object.values(this.group5).forEach(tile => {
            tile.draw(ctx)
        });

    };
};

module.exports = Track;
