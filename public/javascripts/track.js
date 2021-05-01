class Track {
    constructor() {
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.moveTo(0, 875)
        ctx.lineTo(1250, 875)
        ctx.lineTo(1250, 825)
        ctx.lineTo(50, 825)
        ctx.lineTo(50, 775)
        ctx.lineTo(25, 775)
        ctx.lineTo(25, 625)
        ctx.lineTo(1250, 625)
        ctx.lineTo(1250, 525)
        ctx.lineTo(400, 525)
        ctx.lineTo(400, 600)
        ctx.lineTo(25, 600)
        ctx.lineTo(25, 300)
        ctx.lineTo(50, 300)
        ctx.lineTo(1250, 300)
        ctx.lineTo(1250, 275)
        ctx.lineTo(600, 275)
        ctx.lineTo(600, 100)
        ctx.lineWidth = 12;
        ctx.strokeStyle = 'white';
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(0, 990)
        ctx.lineTo(1415, 990)
        ctx.lineTo(1415, 725)
        ctx.lineTo(150, 725)
        ctx.lineTo(150, 700)
        ctx.lineTo(1415, 700)
        ctx.lineTo(1415, 400)
        ctx.lineTo(150, 400)
        ctx.lineTo(150, 375)
        ctx.lineTo(1415, 375)
        ctx.lineTo(1415, 200)
        ctx.lineTo(800, 200)
        ctx.lineTo(800, 100)
        ctx.lineWidth = 12;
        ctx.strokeStyle = 'white';
        ctx.stroke()
    }
}

module.exports = Track;
