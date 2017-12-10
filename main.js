var neural = new NeuralSystem(genomes, layerWidth);
var env = new Environment();
var IO = new InputOutput();

var main = setInterval(function() {
    env.draw();
    env.cycleGen();
    var toDelete = [];
    for (var i = 0; i < env.getGenVehiclesLength(); i++) {
        //checks if a generated vehicle has gone off the map or if the generated vehicle being controlled by the user has collided with an obstruction, adjusts speed (and direction for controlled generated vehicle) of generated vehicles
        if (env.getGenVehicles(i).x < -vehicleHeight / 2 || env.getGenVehicles(i).x > canvas.width + vehicleHeight / 2 || env.getGenVehicles(i).y < offset - vehicleHeight / 2 || env.getGenVehicles(i).y > canvas.height + vehicleHeight / 2) {
            toDelete.push(i);
        }
        else {
            if (env.getGenVehicles(i).controlled) {
                if (env.raycast(env.getGenVehicles(i).x, env.getGenVehicles(i).y, env.getGenVehicles(i).dir, -vehicleAngle, true, i, true, false) <= 0 || env.raycast(env.getGenVehicles(i).x, env.getGenVehicles(i).y, env.getGenVehicles(i).dir, vehicleAngle, true, i, true, false) <= 0 || env.raycast(env.getGenVehicles(i).x, env.getGenVehicles(i).y, env.getGenVehicles(i).dir, 180 - vehicleAngle, true, i, true, false) <= 0 || env.raycast(env.getGenVehicles(i).x, env.getGenVehicles(i).y, env.getGenVehicles(i).dir, -180 + vehicleAngle, true, i, true, false) <= 0) {
                    toDelete.push(i);
                }
                else {
                    env.drawVehicle(env.getGenVehicles(i).x, env.getGenVehicles(i).y, env.getGenVehicles(i).dir, 2);
                    env.adjustContGenSpeed(i, IO.keys);
                }
            }
            else {
                env.drawVehicle(env.getGenVehicles(i).x, env.getGenVehicles(i).y, env.getGenVehicles(i).dir, 1);
                if (env.raycast(env.getGenVehicles(i).x, env.getGenVehicles(i).y, env.getGenVehicles(i).dir, 0, true, i, true, true) < roadSize) {
                    env.adjustGenSpeed(i, 0.5);
                }
                else {
                    env.adjustGenSpeed(i, 1.1);
                }
            }
        }
    }
    for (var i = 0; i < toDelete.length; i++) {
        env.genVehicles.splice(toDelete[i], 1);
    }
    env.drawOverlay();
    var active = false;
    for (var i = 0; i < genomes; i++) {
        if (neural.getActive(i)) {
            active = true;
            neural.decFitness(i);
            if (env.rewardsCollision(env.getVehicles(i).x, env.getVehicles(i).y, i)) {
                neural.incFitness(i);
            }
            env.drawVehicle(env.getVehicles(i).x, env.getVehicles(i).y, env.getVehicles(i).dir, 0);
            //checks if vehicle has collided with an obstruction behind it
            if (neural.getFitness(i) <= -1 || env.raycast(env.getVehicles(i).x, env.getVehicles(i).y, env.getVehicles(i).dir, 180 - vehicleAngle, true, -1, false, false) <= 0 || env.raycast(env.getVehicles(i).x, env.getVehicles(i).y, env.getVehicles(i).dir, -180 + vehicleAngle, true, -1, false, false) <= 0) {
                neural.deActivate(i);
                break;
            }
            var dists = [];
            //sends out raycasts to front of vehicle to feed into input nodes, uses raycasts to also check if vehicle has collided with an obstruction in front of it
            for (var j = 0; j < layerWidth[0] - 1; j++) {
                dists.push(env.raycast(env.getVehicles(i).x, env.getVehicles(i).y, env.getVehicles(i).dir, -90 + 180 * j / (layerWidth[0] - 2), false, -1, false, false));
                if (dists[j] <= 0) {
                    neural.deActivate(i);
                    break;
                }
                if (j == layerWidth[0] - 2) {
                    env.cycle(neural.feedInfo(dists, i), i);
                }
            }
        }
    }
    if (!active) {
        neural.newGen();
        env.refresh();
    }
}, 10);