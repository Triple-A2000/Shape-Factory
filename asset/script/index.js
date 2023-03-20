'use strict';

/*
    JavaScript basics
    Ayomide Boye-Ogundiya

    Color picker

*/

// Define Shape class
class Shape {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  getInfo() {
    return `Name: ${this._name}, Color: ${this._color}`;
  }
}

// Initialize variables
const shapeSelect = document.getElementById('shape-select');
const colorSelect = document.getElementById('color-select');
const createBtn = document.getElementById('create-btn');
const shapeGrid = document.getElementById('shape-grid');
const shapes = [];

// Add event listener to create button
createBtn.addEventListener('click', createShape);

// Function to create a new shape
function createShape() {
  // Get selected shape and color
  const shapeName = shapeSelect.value;
  const shapeColor = colorSelect.value;

  // Create new Shape object
  const shape = new Shape(shapeName, shapeColor);

  // Add new Shape object to shapes array
  shapes.push(shape);

  // Create new HTML element to represent the Shape object
  const shapeDiv = document.createElement('div');
  shapeDiv.classList.add('shape', `shape-${shapeName}`);
  shapeDiv.style.backgroundColor = shapeColor;
  shapeDiv.setAttribute('title', shape.getInfo());

  // Add new shape to shape grid
  shapeGrid.appendChild(shapeDiv);
}

for (let i = 0; i < 20; i++) {
  const shapeDiv = document.createElement('div');
  const shapeType = i % 2 === 0 ? 'circle' : 'square';
  shapeDiv.classList.add('shape', shapeType);
  shapeGrid.appendChild(shapeDiv);
}
