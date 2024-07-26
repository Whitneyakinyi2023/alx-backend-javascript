import Building from './5-building.js';

const b = new Building(100);  // This will throw an error because Building is abstract
console.log(b);

class TestBuilding extends Building { }

try {
    new TestBuilding(200);  // This will throw an error because TestBuilding does not implement evacuationWarningMessage
} catch (err) {
    console.log(err);
}
