const MovingObject = require('./moving_objects');
class Orb extends MovingObject{
    constructor(options, vehicle, boost) {
        super()
        this.x = options.x;
        this.y = options.y;
        this.h = options.h;
        this.w = options.w;
        this.vehicle = vehicle;
        this.boost = boost;
        this.c = 0;
        this.active = true;
        this.sound = document.getElementById('orb');
        this.sound.volume = 0.5;
    };

    detectVehicle() {
        let dist = this.findDistance(this.x, this.y, this.vehicle.currentX, this.vehicle.currentY);
        if(this.active && (dist <= 45 && this.boost.boostLevel < 294)) {
            this.sound.play()
            this.boost.incrementBoost();
            this.active = false;
        };
    };
    
    reset() {
        let ctx = document.getElementById('static-canvas').getContext('2d');
        ctx.clearRect(0, 0, 1425, 2000)
        this.c = 0;
        this.active = true;
    };

    draw(ctx) {
        this.detectVehicle();
        this.c >= 4 ? this.c = 0 : this.c ++;
        ctx.save();
        let orb = new Image();
        let pad = new Image();
        orb.src = `public/images/orbs/${this.c}.png`;
        pad.src = `public/images/orbs/pad.png`;

        if(this.active){
            orb.onload = () => {
                ctx.clearRect(this.x - 35, this.y - 35, 100, 100)
                ctx.drawImage(orb, this.x, this.y, this.w, this.h)
            };
        } else {
            pad.onload = () => {
                ctx.drawImage(pad, this.x - 35, this.y - 35, 100, 100)
            };
        }
        ctx.restore();
    };
};

module.exports = Orb;