var test = require('./mockFiles/test.json');
var synaptic = require('synaptic');
var Architect = synaptic.Architect;

var perceptron = new Architect.Perceptron(2,3,1);

perceptron.trainer.train(test);

console.log(perceptron.activate([1,0]));
console.log(perceptron.activate([0,0]));
console.log(perceptron.activate([0,1]));
console.log(perceptron.activate([1,1]));
