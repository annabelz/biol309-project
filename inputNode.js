// let input, weight, submit;

// function InputNode(nextInPosition) {
//     // adds input node
//     circle(nextInPosition[0], nextInPosition[1], 100);

//     // text with weight
//     weight = createElement('p', 'weight: ');
//     weight.position(nextInPosition[0]-40, nextInPosition[1]-50);

//     // collect weight info
//     input = createInput();
//     input.position(nextInPosition[0]+10, nextInPosition[1]-35);
    
//     submit = createButton('Enter weight');
//     submit.position(input.x + input.width, input.y);
//     submit.mousePressed(setWeight);

//     this.weight = input.value;
// }

// function setWeight() {
//     const curWeight = input.value();
//     weight.html('weight: ' + curWeight);
//     input.value('');
//     submit.remove();
//     input.remove();
// }