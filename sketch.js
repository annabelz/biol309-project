let inButton, outButton;

function setup() {
  createCanvas(800, 800);

   // creating the button:
   inButton = createButton("New input neuron");
   inButton.position(800, 100);

   outButton = createButton("New output neuron")
   outButton.position(800, 200);
}

function draw() {
  background(220);
}
