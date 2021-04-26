class Vehicle {
    constructor() {
        this.directions = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
        this.current_dir = 270;
        this.min_angle = 0; 
        this.max_angle = 360;

    };

    vehicleImage () {
        
    }

    rotateLeft() {

    }

    rotateRight() {

    }

    draw(ctx) {
        this.vehicle = new Image();
        this.vehicle.onload = () => {
            ctx.drawImage(this.vehicle, 0, 600, 80, 40)
        }
        this.vehicle.src = '/public/images/car_imgs/270.png';
      
    };
};

module.exports = Vehicle;