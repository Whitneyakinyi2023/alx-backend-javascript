export default class Currency {
  constructor(code, name) {
    // Attribute validation
    if (typeof code !== 'string') {
      throw new TypeError('Code must be string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be string');
    }
    // Assignment of relevant attributes
    this._name = name;
    this._code = code;
  }

  // Getters and setters
  // Getters and Setters for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = value;
  }

  // Getters and Setters for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Nmae must be a string');
    }
    this._code = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
