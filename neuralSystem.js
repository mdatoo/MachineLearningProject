class NeuralSystem {
    constructor(genomeCount, layerWidth) {
        this.genomes = [];
        this.count = 0;
        for (var i = 0; i < genomeCount; i++) {
            this.genomes.push(new NeuralNetwork(layerWidth));
        }
    }
    getGenomes() {
        return this.genomes;
    }
    getGenomesLength() {
        return this.genomes.length;
    }
    setGenomes(genomes) {
        for (var i = 0; i < this.genomes.length; i++) {
            this.genomes[i].setWeights(genomes[i].layers, false);
            this.genomes[i].resetFitness();
            this.genomes[i].setActive();
        }
    }
    incFitness(id) {
        this.genomes[id].incFitness();
    }
    decFitness(id) {
        this.genomes[id].decFitness();
    }
    getFitness(id) {
        return this.genomes[id].fitness;
    }
    getWeight(id, layer, node, connection) {
        return this.genomes[id].getWeight(layer, node, connection);
    }
    getValue(id, layer, node) {
        return this.genomes[id].getValue(layer, node);
    }
    feedInfo(inputValues, id) {
        return this.genomes[id].feedInfo(inputValues);
    }
    reset(genomeCount, layerWidth) {
        this.count = 0;
        this.genomes.length = 0;
        for (var i = 0; i < genomeCount; i++) {
            this.genomes.push(new NeuralNetwork(layerWidth));
        }
    }
    getCount() {
        return this.count;
    }
    setCount(count) {
        this.count = count;
    }
    getActive(id) {
        return this.genomes[id].getActive();
    }
    deActivate(id) {
        this.genomes[id].deActivate();
    }
    //called with every new generation, finds best performing neural network, using it as a template to regenerate the weights of the other neural networks
    newGen() {
        this.count++;
        var unsorted = Array(genomes).fill(-5);
        for (var i = 0; i < genomes; i++) {
            unsorted[i] = neural.getFitness(i);
        }
        var maxId = unsorted.indexOf(env.quickSort(unsorted.slice(0))[this.genomes.length - 1]);
        for (var i = 0; i < this.genomes.length; i++) {
            if (i != maxId) {
                this.genomes[i].setWeights(this.genomes[maxId].getLayers(), true);
            }
            this.genomes[i].resetFitness();
            this.genomes[i].setActive();
        }
    }
}

class NeuralNetwork {
    constructor(layerWidth) {
        this.layers = [];
        this.layers.push(new NeuralLayer(layerWidth[0], 0));
        for (var i = 1; i < layerWidth.length; i++) {
            this.layers.push(new NeuralLayer(layerWidth[i], layerWidth[i - 1]));
        }
        this.fitness = 0;
        this.active = true;
    }
    getActive() {
        return this.active;
    }
    setActive() {
        this.active = true;
    }
    deActivate() {
        this.active = false;
    }
    getWeight(layer, node, connection) {
        return this.layers[layer].getWeight(node, connection);
    }
    getValue(layer, node) {
        return this.layers[layer].getValue(node);
    }
    getLayers() {
        return this.layers;
    }
    incFitness() {
        this.fitness += 1;
    }
    decFitness() {
        this.fitness -= 0.1;
    }
    resetFitness() {
        this.fitness = 0;
    }
    getFitness() {
        return this.fitness;
    }
    setWeights(alphaLayers, mutations) {
        for (var i = 0; i < alphaLayers.length; i++) {
            this.layers[i].setWeights(alphaLayers[i], mutations);
        }
    }
    //argument has a 1 attached to it (acts as a bias node), sets values of input layer nodes to argument, calculates values for each of the subsequent layers and returns values of output (final) layer nodes
    feedInfo(inputValues) { 
        inputValues.push(1);
        this.layers[0].setValues(inputValues);
        for (var i = 1; i < this.layers.length - 1; i++) {
            this.layers[i].calcValues(this.layers[i - 1].getValues(), true);
        }
        this.layers[this.layers.length - 1].calcValues(this.layers[this.layers.length - 2].getValues(), false);
        return this.layers[this.layers.length - 1].getValues();
    }
}

class NeuralLayer {
    constructor(nodesCount, prevNodesCount) {
        this.neurons = [];
        for (var i = 0; i < nodesCount; i++) {
            this.neurons.push(new Neuron(prevNodesCount));
        }
    }
    setWeights(alphaNodes, mutations) {
        for (var i = 0; i < alphaNodes.neurons.length; i++) {
            this.neurons[i].setWeights(alphaNodes.neurons[i], mutations);
        }
    }
    setValues(inputValues) {
        for (var i = 0; i < this.neurons.length; i++) {
            this.neurons[i].setValue(inputValues[i]);
        }
    }
    //calculates values of each neuron by multiplying the values of the previous layers' neurons by their respective weights, sets last neuron to a constant 1 (acts as a bias node) if specified
    calcValues(prevValues, bias) {
        for (var i = 0; i < this.neurons.length; i++) {
            var value = 0;
            for (var j = 0; j < prevValues.length; j++) {
                value += prevValues[j] * this.neurons[i].getWeight(j);
            }
            this.neurons[i].setValue(1 / (1 + Math.pow(Math.E, -value)));
        }
        if (bias) {
            this.neurons[this.neurons.length - 1].setValue(1);
        }
    }
    getWeight(node, connection) {
        return this.neurons[node].getWeight(connection);
    }
    getValue(node) {
        return this.neurons[node].getValue();
    }
    getValues() {
        var values = [];
        for (var i = 0; i < this.neurons.length; i++) {
            values.push(this.neurons[i].getValue());
        }
        return values;
    }
}

class Neuron {
    constructor(linkCount) {
        this.weights = [];
        for (var i = 0; i < linkCount; i++) {
            this.weights.push(Math.random() * 10 - 5);
        }
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setWeights(weights, mutations) {
        if (mutations) {
            for (var i = 0; i < this.weights.length; i++) {
                if (Math.random() < 0.8) {
                    this.weights[i] = weights.weights[i];
                }
                else if (Math.random() < 0.7) {
                    this.weights[i] = weights.weights[i] + Math.random() * 2 - 1;
                }
                else {
                    this.weights[i] = Math.random() * 10 - 5;
                }
            }
        }
        else {
            for (var i = 0; i < this.weights.length; i++) {
                this.weights[i] = weights.weights[i];
            }
        }
    }
    getWeight(index) {
        return this.weights[index];
    }
}