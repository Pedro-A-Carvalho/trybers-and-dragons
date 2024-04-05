import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _opponent: Fighter;
  private _winner = 0;
  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._opponent = opponent;
  }

  public isGoing(): boolean {
    return this.player.lifePoints > 0 && this._opponent.lifePoints > 0;
  }

  public fight(): number {
    while (this.isGoing()) {
      this.player.attack(this._opponent);
      if (!this.isGoing()) this._winner = 1;
      this._opponent.attack(this.player);
      if (!this.isGoing()) this._winner = -1;
    }
    return super.fight();
  }
}