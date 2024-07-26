class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target === Building) {
      throw new Error('Cannot instantiate an abstract class.');
    }
  }

  get sqft() {
    return this._sqft;
  }

  // Method to be overridden in subclass
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
