let inButton, outButton, clearButton;
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

  nextInPosition = [100, 100];
  nextOutPosition = [600, 100];

  // create new input/output neurons when respective buttons are pressed
  inButton.mousePressed(newInput);
  outButton.mousePressed(newOutput);

  // clear button function
  clearButton.mousePressed(clearCanvas);

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
  }
  
  nextInPosition[1] += 100;

}


function newOutput() {
  allOuts.push(new OutputNode(nextOutPosition));
  nextOutPosition[1] += 100;
}

// TODO: make the clear erase text
function clearCanvas() {
  background(220);
  nextInPosition = [100, 100];
  nextOutPosition = [600, 100];
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
    text('weight: ' + this.weight, this.x - 40, this.y - 50);
    console.log(this.weight);
  }
}
