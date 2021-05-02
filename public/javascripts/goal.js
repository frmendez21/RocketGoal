
class Goal {
    draw(ctx) {
        this.goal = new Image();
        this.goal.onload = () => {
            ctx.drawImage(this.goal, 600, 0, 200, 100)
        }
        this.goal.src = 'public/images/goal.png'
    }
}

module.exports = Goal;