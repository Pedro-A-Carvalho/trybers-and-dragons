import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _created = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._created += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._created;
  }
}
