describe('Environment', function() {
    describe('#initialisation', function() {
        it('should create array of bools of length 4', function() {
            var environment = new Environment();
            expect(environment.junctions.length).to.eql(4);
        });
        it('at least one element should be true', function() {
            var environment = new Environment();
            var oneTruth = false;
            for (var i = 0; i < 4; i++) {
                if (environment.junctions[i] == true) {
                    oneTruth = true;
                    break;
                }
            }
            expect(oneTruth).to.eql(true);
        });
        it('should create an array of vehicles of length genomes', function() {
            var environment = new Environment();
            expect(environment.vehicles.length).to.eql(genomes);
        });
        it('each vehicle object should contain an array each the same length as the rewards array', function() {
            var environment = new Environment();
            for (var i = 0; i < environment.vehicles.length; i++) {
                expect(environment.vehicles[i].rewards.length).to.eql(environment.rewards.length);
            }
        });
        it('each element in each array should be true', function() {
            var environment = new Environment();
            for (var i = 0; i < environment.vehicles.length; i++) {
                for (var j = 0; j < environment.vehicles[i].rewards.length; j++) {
                    expect(environment.vehicles[i].rewards[j]).to.eql(true);
                }
            }
        });
    });
    describe('#getVehicles', function() {
        it('should return referenced vehicle', function() {
            var environment = new Environment();
            expect(environment.getVehicles(0)).to.eql(environment.vehicles[0]);
        });
    });
    describe('#getGenVehicles', function() {
        it('should return referenced generated vehicle', function() {
            var environment = new Environment();
            expect(environment.getGenVehicles(0)).to.eql(environment.genVehicles[0]);
        });
    });
    describe('#getMaxFitness', function() {
        it('should return max fitness', function() {
            var environment = new Environment();
            environment.maxFitness = 5;
            expect(environment.getMaxFitness()).to.eql(5);
        });
    });
    describe('#setMaxFitness', function() {
        it('should set max fitness to argument', function() {
            var environment = new Environment();
            environment.setMaxFitness(5);
            expect(environment.getMaxFitness()).to.eql(5);
        });
    });
    describe('#genGenVehiclesLength', function() {
        it('should return length of generated vehicles array', function() {
            var environment = new Environment();
            environment.genVehicles.push(null);
            expect(environment.getGenVehiclesLength()).to.eql(1);
        });
    });
    describe('#toggleGenControl', function() {
        it('should toggle controlled state of referenced generated vehicle', function() {
            var environment = new Environment();
            environment.genVehicles.push({controlled: false});
            var value = environment.genVehicles[0].controlled;
            environment.toggleGenControl(0);
            expect(environment.genVehicles[0].controlled).to.eql(!value);
        });
    });
    describe('#adjustGenSpeed', function() {
        it('should return a value between 1 and 5', function() {
            var environment = new Environment();
            environment.genVehicles.push({speed: 5});
            environment.adjustGenSpeed(0, 1.5);
            expect(environment.genVehicles[0].speed).to.be.within(1, 5);
        });
    });
    describe('#toggleRaycasts', function() {
        it('should toggle state of toggle raycasts variable', function() {
            var environment = new Environment();
            environment.showRaycasts = true;
            environment.toggleRaycasts();
            expect(environment.showRaycasts).to.eql(false);
        });
    });
    describe('#getRaycastsVisibility', function() {
        it('should return state of toggle raycasts variable', function() {
            var environment = new Environment();
            expect(environment.getRaycastsVisibility()).to.eql(environment.showRaycasts);
        });
    });
    describe('#refresh', function() {
        it('should reduce genVehicles array to 1 element if a genVehicle is being controlled', function() {
            var environment = new Environment();
            environment.genVehicles.push({controlled: true}, {controlled: false});
            environment.refresh();
            expect(environment.genVehicles.length).to.eql(1);
        });
        it('should reduce genVehicles array to 0 elements if there isn\'t a genVehicle being controlled', function() {
            var environment = new Environment();
            environment.genVehicles.push({controlled: false}, {controlled: false});
            environment.refresh();
            expect(environment.genVehicles.length).to.eql(0);
        });
        it('should set spawnTimeout\'s elements to genTimeout', function() {
            var environment = new Environment();
            environment.spawnTimeout[0] = 0;
            environment.refresh();
            for (var i = 0; i < 4; i++) {
                expect(environment.spawnTimeout[0]).to.eql(environment.genTimeout);
            }
        });
        it('each vehicle\'s rewards array elements should be true', function() {
            var environment = new Environment();
            environment.vehicles[0].rewards[0] = false;
            environment.refresh();
            for (var i = 0; i < environment.vehicles.length; i++) {
                for (var j = 0; j < environment.vehicles[i].rewards.length; j++) {
                    expect(environment.vehicles[i].rewards[j]).to.eql(true);
                }
            }
        });
    });
    describe('reset', function() {
        it('at least one element in junctions array should be true', function() {
            var environment = new Environment();
            environment.reset();
            var oneTruth = false;
            for (var i = 0; i < 4; i++) {
                if (environment.junctions[i] == true) {
                    oneTruth = true;
                    break;
                }
            }
            expect(oneTruth).to.eql(true);
        });
    });
    describe('#quickSort', function() {
        it('should sort argument array', function() {
            var environment = new Environment();
            var toSort = [];
            for (var i = 0; i < 10; i++) {
                toSort.push(Math.floor(Math.random() * 10));
            }
            toSort = environment.quickSort(toSort.slice(0));
            for (var i = 1; i < 10; i++) {
                expect(toSort[i]).to.be.within(toSort[i - 1], Infinity);
            }
        });
    });
});