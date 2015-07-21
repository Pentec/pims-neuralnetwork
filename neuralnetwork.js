var synaptic = require('synaptic');
var Architect = synaptic.Architect;
var train = require('./mockFiles/test.json');

var perceptron = new Architect.Perceptron(2,3,1);

/** Function activates using the form inputs and determines the length of admission for the patient
 *  @param input
 * */
exports.activate = function(input){
    return perceptron.activate(input);
};

/**
 * Trains the neural network on the newer data.
 */
exports.train = function(){
    perceptron.trainer.train(train);
};

/**
 * Adds a new set of input data to the training data
 * @param input
 */
//TODO Updating JSON file via javascript
exports.addTrainer = function(input){
    if(train.length>10){
        train[train.length-1]=input;
    }else{
        train[train.length]=input;
    }
};