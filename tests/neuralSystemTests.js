describe('NeuralSystem', function() {
    describe('#initialisation', function() {
        it('should setup an array of neural networks of size based on constructor argument', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            expect(neuralSystem.genomes.length).to.eql(10);
        });
        it('neural layers array should contain neural layers', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            for (var i = 0; i < 10; i++) {
                expect(neuralSystem.genomes[i]).to.be.a(NeuralNetwork);
            }
        });
    });
    describe('#getGenomes', function() {
        it('should return genomes', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            expect(neuralSystem.getGenomes()).to.eql(neuralSystem.genomes);
        });
    });
    describe('#getGenomesLength', function() {
        it('should return number of genomes', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            expect(neuralSystem.getGenomesLength()).to.eql(neuralSystem.genomes.length);
        });
    });
    describe('#incFitness', function() {
        it('should increment fitness by 1', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            var fitness = neuralSystem.genomes[0].fitness;
            neuralSystem.incFitness(0);
            expect(neuralSystem.genomes[0].fitness).to.eql(fitness + 1);
        });
    });
    describe('#decFitness', function() {
        it('should decrement fitness by 0.1', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            var fitness = neuralSystem.genomes[0].fitness;
            neuralSystem.decFitness(0);
            expect(neuralSystem.genomes[0].fitness).to.eql(fitness - 0.1);
        });
    });
    describe('#getFitness', function() {
        it('should return fitness of referenced neural network', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            expect(neuralSystem.getFitness(0)).to.eql(neuralSystem.genomes[0].fitness);
        });
    });
    describe('#getWeight', function() {
        it('should return referenced weight', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            expect(neuralSystem.getWeight(1, 1, 1, 1)).to.eql(neuralSystem.genomes[1].layers[1].neurons[1].weights[1]);
        });
    });
    describe('#getValue', function() {
        it('should return referenced value', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            expect(neuralSystem.getValue(1, 1, 1)).to.eql(neuralSystem.genomes[1].layers[1].neurons[1].value);
        });
    });
    describe('#reset', function() {
        it('should set count to 0', function () {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            neuralSystem.count = 5;
            neuralSystem.reset();
            expect(neuralSystem.count).to.eql(0);
        });
    });
    describe('#getCount', function() {
        it('should return count', function() {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            neuralSystem.count = 5;
            expect(neuralSystem.getCount()).to.eql(neuralSystem.count);
        });
    });
    describe('#setCount', function() {
        it('should set count to argument', function() {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            neuralSystem.setCount(5);
            expect(neuralSystem.getCount()).to.eql(neuralSystem.count);
        });
    });
    describe('#getActive', function() {
        it('should return active state of referenced neural network', function() {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            expect(neuralSystem.getActive(2)).to.eql(neuralSystem.genomes[2].active);
        });
    });
    describe('#deActivate', function() {
        it('should set state of referenced neural network to deactive', function() {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            neuralSystem.deActivate(2);
            expect(neuralSystem.getActive(2)).to.eql(false);
        });
    });
    describe('#newGen', function() {
        it('should increment count', function() {
            var neuralSystem = new NeuralSystem(10, [10, 10, 10]);
            var count = neuralSystem.count;
            neuralSystem.newGen();
            expect(neuralSystem.count).to.eql(count + 1);
        });
    })
})

describe('NeuralNetwork', function() {
    describe('#initialisation', function() {
        it('should setup an array of neural layers of size based on constructor argument', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            expect(neuralNetwork.layers.length).to.eql(3);
        });
        it('neural layers array should contain neural layers', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            for (var i = 0; i < 3; i++) {
                expect(neuralNetwork.layers[i]).to.be.a(NeuralLayer);
            }
        });
    });
    describe('#getActive', function() {
        it('should return referenced bool', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            expect(neuralNetwork.getActive()).to.eql(true);
        });
    });
    describe('#setActive', function() {
        it('should set active to true', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            neuralNetwork.setActive();
            expect(neuralNetwork.getActive()).to.eql(true);
        });
    });
    describe('#deActivate', function() {
        it('should set active to false', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            neuralNetwork.deActivate();
            expect(neuralNetwork.getActive()).to.eql(false);
        });
    });
    describe('#getWeight', function() {
        it('should return referenced weight', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            expect(neuralNetwork.getWeight(0, 1, 2)).to.eql(neuralNetwork.layers[0].neurons[1].weights[2]);
        });
    });
    describe('#getValue', function() {
        it('should return referenced value', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            expect(neuralNetwork.getValue(0, 1)).to.eql(neuralNetwork.layers[0].neurons[1].value);
        });
    });
    describe('#getLayers', function() {
        it('should return layers', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            expect(neuralNetwork.getLayers()).to.eql(neuralNetwork.layers);
        });
    });
    describe('#incFitness', function() {
        it('should increment fitness by 1', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            var fitness = neuralNetwork.fitness;
            neuralNetwork.incFitness();
            expect(neuralNetwork.fitness).to.eql(fitness + 1);
        });
    });
    describe('#decFitness', function() {
        it('should decrement fitness by 0.1', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            var fitness = neuralNetwork.fitness;
            neuralNetwork.decFitness();
            expect(neuralNetwork.fitness).to.eql(fitness - 0.1);
        });
    });
    describe('#resetFitness', function() {
        it('should reset fitness to 0', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            var fitness = neuralNetwork.fitness;
            neuralNetwork.fitness = 10;
            neuralNetwork.resetFitness();
            expect(neuralNetwork.fitness).to.eql(0);
        });
    });
    describe('#getFitness', function() {
        it('should return fitness value', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            var fitness = neuralNetwork.fitness;
            neuralNetwork.fitness = 10;
            expect(neuralNetwork.getFitness()).to.eql(10);
        });
    });
    describe('#setWeights', function() {
        it('should duplicate weights into respective neurons if mutation is false', function () {
            var neuralNetwork = new NeuralNetwork([10, 10, 10]);
            var duplicateNetwork = new NeuralNetwork([10, 10, 10]);
            duplicateNetwork.setWeights(neuralNetwork.layers, false);
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 10; j++) {
                    for (var k = 0; k < 10; k++) {
                        expect(neuralNetwork.layers[i].neurons[j].getWeight(k)).to.eql(duplicateNetwork.layers[i].neurons[j].getWeight(k));
                    }
                }
            }
        });
    });
});

describe('NeuralLayer', function() {
    describe('#initialisation', function () {
        it('should setup an array of neurons of size based on constructor argument', function () {
            var neuralLayer = new NeuralLayer(10, 5);
            expect(neuralLayer.neurons.length).to.eql(10);
        });
        it('neurons array should contain neurons', function () {
            var neuralLayer = new NeuralLayer(10, 10);
            for (var i = 0; i < neuralLayer.neurons.length; i++) {
                expect(neuralLayer.neurons[i]).to.be.a(Neuron);
            }
        });
    });
    describe('#setWeights', function() {
        it('should duplicate weights into respective neurons if mutation is false', function() {
            var neuralLayer = new NeuralLayer(10, 10);
            var duplicateLayer = new NeuralLayer(10, 10);
            duplicateLayer.setWeights(neuralLayer, false);
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    expect(neuralLayer.neurons[i].getWeight(j)).to.eql(duplicateLayer.neurons[i].getWeight(j));
                }
            }
        });
    });
    describe('#setValues', function() {
        it('should duplicate values into respective neurons', function() {
            var neuralLayer = new NeuralLayer(10, 10);
            var values = [];
            for (var i = 0; i < 10; i++) {
                values.push(10);
            }
            neuralLayer.setValues(values);
            for (var i = 0; i < 10; i++) {
                expect(neuralLayer.neurons[i].getValue()).to.eql(values[i]);
            }
        });
    });
    describe('#calcValues', function() {
        it('should calculate the sigmoid of the sum of the previous layer\'s neuron values when all weights are 1 and there are no bias nodes', function() {
            var neuralLayer = new NeuralLayer(10, 10);
            var prevNeuralLayer = new NeuralLayer(10, 10);
            var values = [];
            var sum = 0;
            for (var i = 0; i < 10; i++) {
                values.push(10);
                sum += values[i];
            }
            prevNeuralLayer.setValues(values);
            var weights = [];
            weights.weights = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            for (var i = 0; i < 10; i++) {
                neuralLayer.neurons[i].setWeights(weights, false);
            }
            neuralLayer.calcValues(prevNeuralLayer.getValues(), false);
            for (var i = 0; i < 10; i++) {
                expect(neuralLayer.neurons[i].value).to.eql(1 / (1 + Math.pow(Math.E, -sum)));
            }
        });
    });
    describe('#getWeight', function() {
        it('should return referenced weight', function() {
            var neuralLayer = new NeuralLayer(10, 10);
            expect(neuralLayer.getWeight(1, 0)).to.eql(neuralLayer.neurons[1].weights[0]);
        });
    });
    describe('#getValue', function() {
        it('should return referenced value', function() {
            var neuralLayer = new NeuralLayer(10, 10);
            expect(neuralLayer.getValue(2)).to.eql(neuralLayer.neurons[2].value);
        });
    });
    describe('#getValue', function() {
        it('should return referenced values', function() {
            var neuralLayer = new NeuralLayer(10, 10);
            var values = [];
            for (var i = 0; i < 10; i++) {
                values.push(neuralLayer.neurons[i].value);
            }
            expect(neuralLayer.getValues()).to.eql(values);
        });
    });
});

describe('Neuron', function () {
    describe('#initialisation', function () {
        it('should setup a weights array of size based on constructor argument', function () {
            var neuron = new Neuron(10);
            expect(neuron.weights.length).to.eql(10);
        });
        it('weights array should contain random numbers between -5 & +5', function () {
            var neuron = new Neuron(10);
            for (var i = 0; i < neuron.weights.length; i++) {
                expect(neuron.weights[i]).to.be.within(-5, 5);
            }
        });
    });
    describe('#setValue', function () {
        it('should save value for later retrieval', function () {
            var neuron = new Neuron(10);
            var value = 10;
            neuron.setValue(value);
            expect(neuron.value).to.eql(value);
        });
    });
    describe('#getValue', function () {
        it('should return value stored earlier', function () {
            var neuron = new Neuron(10);
            var value = 10;
            neuron.setValue(value);
            expect(neuron.getValue()).to.eql(value);
        });
    });
    describe('#setWeights', function () {
        it('should duplicate input weights if mutations is false', function () {
            var neuron = new Neuron(10);
            var weights = [];
            weights.weights = [];
            for (var i = 0; i < 10; i++) {
                weights.weights.push(2);
            }
            neuron.setWeights(weights, false);
            for (var i = 0; i < 10; i++) {
                expect(neuron.weights[i]).to.eql(weights.weights[i]);
            }
        });
    });
    describe('#getWeight', function () {
        it('should return value stored earlier', function () {
            var neuron = new Neuron(10);
            var weights = [];
            weights.weights = [];
            for (var i = 0; i < 10; i++) {
                weights.weights.push(2);
            }
            neuron.setWeights(weights, false);
            for (var i = 0; i < 10; i++) {
                expect(neuron.getWeight(i)).to.eql(weights.weights[i]);
            }
        });
    });
});