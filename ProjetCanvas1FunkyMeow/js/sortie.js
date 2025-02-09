import ObjectGraphique from "./ObjectGraphique.js";

/**
 * Classe Sortie : Représente la sortie que le joueur doit atteindre.
 * C'est un rectangle situé en bas à droite de l'écran.
 */
export default class Sortie extends ObjectGraphique {
    constructor(x, y, w, h, couleur) {
        super(x, y, w, h, couleur);
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.restore();
    }
}