const MovingObject = require('./moving_objects');
class Orb extends MovingObject{
    constructor(options, vehicle, boost) {
        super()
        this.x = options.x;
        this.y = options.y;
        this.h = options.h;
        this.w = options.w;
        this.c = 0;
        this.vehicle = vehicle;
        this.boost = boost;
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

    draw(ctx) {
        this.detectVehicle();
        this.c >= 4 ? this.c = 0 : this.c ++;
        ctx.save();
        let orb = new Image();
        if(this.active){
            orb.src = `public/images/orbs/${this.c}.png`;
            orb.onload = () => {
                ctx.drawImage(orb, this.x, this.y, this.w, this.h)
            };
        } else {
            orb.src = `public/images/orbs/pad.png`
            orb.onload = () => {
                ctx.drawImage(orb, this.x - 35, this.y - 35, 100, 100)
            };
        }
        ctx.restore();
    };
};

module.exports = Orb;