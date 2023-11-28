let inButton, outButton, clearButton, simButton;
let nextInPosition, nextOutPosition;
let allIns, allOuts;

// setup function is run once at the beginning
function setup() {
  createCanvas(800, 800);

  // set background colour
  background(220);

  // creating the buttons for new input/output neurons:
  inButton = createButton("New input neuron");
  inButton.position(800, 100);

  outButton = createButton("New output neuron")
  outButton.position(800, 200);

  clearButton = createButton("Clear")
  clearButton.position(800, 300);

  simButton = createButton("Simulate")
  simButton.position(800, 400);

  nextInPosition = [100, 100];
  nextOutPosition = [600, 100];

  // attach functions to each button
  inButton.mousePressed(newInput);
  outButton.mousePressed(newOutput);
  clearButton.mousePressed(clearCanvas);
  simButton.mousePressed(simulate);

  allIns = [];
  allOuts = [];

}

// draw function is continuously looped
function draw() {
}

function newInput() {

  let input, submit;

  // collect weight info
  input = createInput();
  input.position(nextInPosition[0] + 10, nextInPosition[1] - 35);

  submit = createButton('Enter weight');
  submit.position(input.x + input.width, input.y);
  submit.mousePressed(setWeight);

  function setWeight() {
    let newNode = new InputNode(nextInPosition, float(input.value()));
    allIns.push(newNode);

    submit.remove();
    input.remove();
    newNode.display();
    nextInPosition[1] += 100;
  }
}

function newOutput() {

  let input, submit;

  // collect weight info
  input = createInput();
  input.position(nextOutPosition[0] + 10, nextOutPosition[1] - 35);

  submit = createButton('Enter threshold');
  submit.position(input.x + input.width, input.y);
  submit.mousePressed(setThreshold);

  function setThreshold() {
    let newNode = new OutputNode(nextOutPosition, float(input.value()));
    allOuts.push(newNode);

    submit.remove();
    input.remove();
    newNode.display();
    nextOutPosition[1] += 100;
  }
}

// TODO: make the clear erase text
function clearCanvas() {
  background(220);
  nextInPosition = [100, 100];
  nextOutPosition = [600, 100];
  allIns = [];
  allOuts = [];
}

function simulate() {
  console.log(allIns);
  console.log(allOuts);
}

class InputNode {
  constructor(position, weight) {
    this.x = position[0];
    this.y = position[1];
    this.diameter = 100;
    this.weight = weight;
  }

  display() {
    circle(this.x, this.y, this.diameter);
    text('weight: ' + this.weight, this.x - 40, this.y - 10);
  }
}

class OutputNode {
  constructor(position, threshold) {
    this.x = position[0];
    this.y = position[1];
    this.diameter = 100;
    this.threshold = threshold;
  }

  display() {
    circle(this.x, this.y, this.diameter);
    text('threshold: ' + this.threshold, this.x - 40, this.y - 10);
  }
}
