import ObstacleDangereux from "./ObstacleDangereux.js";

/**
 * Classe obstacleAnime : Un obstacle qui se déplace automatiquement et qui est dangereux.
 */
export default class obstacleAnime extends ObstacleDangereux {
    constructor(x, y, w, h, couleur, speedX, speedY, rangeX, rangeY) {
        super(x, y, w, h, couleur);
        this.speedX = speedX;
        this.speedY = speedY;
        this.rangeX = rangeX;
        this.rangeY = rangeY;
        this.startX = x;
        this.startY = y;
        this.directionX = 1;
        this.directionY = 1;
        this.alive = true;  // Ajout d'un état pour stopper l'update
    }

    update() {
        if (!this.alive) return; // Empêche l'animation après destruction

        this.y += this.speedY * this.directionY;
        this.x += this.speedX * this.directionX;

        if (this.y > this.startY + this.rangeY || this.y < this.startY) {
            this.directionY *= -1;
        }

        if (this.x > this.startX + this.rangeX || this.x < this.startX) {
            this.directionX *= -1;
        }
    }

    draw(ctx) {
        if (!this.alive) return; // Empêche le rendu après destruction

        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.restore();
    }

    destroy() {
        console.log(`${this.constructor.name} supprimé.`);
        this.alive = false; // Stoppe immédiatement les animations
    }
}
