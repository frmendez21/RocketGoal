const Orb = require('./orb');
class Orbs {
    constructor(vehicle, boost) {
        this.orbs = [
            new Orb({x: '350', y: '500', h:'25', w:'25'}, vehicle, boost),
            new Orb({x: '1375', y: '650', h:'25', w:'25'}, vehicle, boost),
            new Orb({x: '200', y: '780', h:'25', w:'25'}, vehicle, boost),
            new Orb({x: '50', y: '1550', h:'25', w:'25'}, vehicle, boost),
            new Orb({x: '1375', y: '1250', h:'25', w:'25'}, vehicle, boost)
        ];
    };
    
    reset() {
        this.orbs.forEach(orb => orb.reset())
    };

    draw(ctx) {
        this.orbs.forEach(orb => {
            if(orb.active) orb.draw(ctx)
        });
    };;
}

module.exports = Orbs;