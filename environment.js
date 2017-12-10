class Environment {
    constructor() {
        this.rewards = [];
        this.vehicles = [];
        this.genVehicles = [];
        this.minGenVehicles = 3;
        this.genTimeout = 700;
        this.spawnTimeout = [this.genTimeout, this.genTimeout, this.genTimeout, this.genTimeout];
        this.maxFitness = 0;
        this.showRaycasts = true;
        this.showNeuralNetwork = true;
        this.probGen = 0.1;
        this.bounds = {left: Math.floor(Math.random() * canvas.width / 3), top: Math.floor(Math.random() * canvas.height / 4) + offset, right: Math.floor(canvas.width - Math.random() * canvas.width / 3), bottom: Math.floor(canvas.height - Math.random() * canvas.height / 3)};
        this.spawns = [{x: -vehicleHeight / 2, y: this.bounds.top + roadSize / 4, dir: 90}, {x: canvas.width + vehicleHeight / 2, y: this.bounds.bottom - roadSize / 4, dir: 270}, {x: this.bounds.left + roadSize / 4, y: canvas.height + vehicleHeight / 2, dir: 0}, {x: this.bounds.right - roadSize / 4, y: offset - vehicleHeight / 2, dir: 180}];
        this.junctions = [Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5];
        for (var i = 0; i < this.junctions.length; i++) {
            if (this.junctions[i] == true) {
                break;
            }
            if (i == this.junctions.length - 1) {
                this.junctions[Math.floor(Math.random() * 4)] = true;
            }
        }
        for (var i = this.bounds.left + roadSize; i < this.bounds.right - roadSize; i += rewardsSpacing) {
            this.rewards.push({x1: i, x2: i, y1: this.bounds.top, y2: this.bounds.top + roadSize});
        }
        for (var i = this.bounds.top + roadSize; i < this.bounds.bottom - roadSize; i += rewardsSpacing) {
            this.rewards.push({x1: this.bounds.right - roadSize, x2: this.bounds.right, y1: i, y2: i});
        }
        for (var i = this.bounds.right - roadSize; i > this.bounds.left + roadSize; i -= rewardsSpacing) {
            this.rewards.push({x1: i, x2: i, y1: this.bounds.bottom - roadSize, y2: this.bounds.bottom});
        }
        for (var i = this.bounds.bottom - roadSize; i > this.bounds.top + roadSize; i -= rewardsSpacing) {
            this.rewards.push({x1: this.bounds.left, x2: this.bounds.left + roadSize, y1: i, y2: i});
        }
        for (var i = 0; i < genomes; i++) {
            this.vehicles.push({x: this.bounds.left + roadSize / 2, y: this.bounds.top + roadSize / 2, speed: 5, dir: 90, rewards: []});
            for (var j = 0; j < this.rewards.length; j++) {
                this.vehicles[i].rewards.push(true);
            }
        }
    }
    getVehicles(id) {
        return this.vehicles[id];
    }
    getGenVehicles(id) {
        return this.genVehicles[id];
    }
    getMaxFitness() {
        return this.maxFitness;
    }
    setMaxFitness(value) {
        this.maxFitness = value;
    }
    getGenVehiclesLength() {
        return this.genVehicles.length;
    }
    toggleGenControl(id) {
        this.genVehicles[id].controlled = !this.genVehicles[id].controlled;
    }
    adjustGenSpeed(i, perc) {
        this.genVehicles[i].speed = this.genVehicles[i].speed * perc;
        this.genVehicles[i].speed = Math.min(5, this.genVehicles[i].speed);
        this.genVehicles[i].speed = Math.max(1, this.genVehicles[i].speed);
    }
    //adjusts speed and rotation of the generated vehicle that is being controlled by the user
    adjustContGenSpeed(i, keys) {
        if (keys.up) {
            this.genVehicles[i].speed += 0.2;
            this.genVehicles[i].speed = Math.min(5, this.genVehicles[i].speed);
        }
        if (keys.left) {
            this.genVehicles[i].dir -= 2;
        }
        if (keys.right) {
            this.genVehicles[i].dir += 2;
        }
        if (keys.down) {
            this.genVehicles[i].speed -= 0.2;
            this.genVehicles[i].speed = Math.max(-5, this.genVehicles[i].speed);
        }
    }
    toggleRaycasts() {
        this.showRaycasts = !this.showRaycasts;
    }
    getRaycastsVisibility() {
        return this.showRaycasts;
    }
    refresh() {
        for (var i = 0; i < this.genVehicles.length; i++) {
            if (this.genVehicles[i].controlled) {
                this.genVehicles = [this.genVehicles[i]];
                break;
            }
            if (i == this.genVehicles.length - 1) {
                this.genVehicles = [];
            }
        }
        this.spawnTimeout = [this.genTimeout, this.genTimeout, this.genTimeout, this.genTimeout];
        for (var i = 0; i < genomes; i++) {
            this.vehicles[i] = {x: this.bounds.left + roadSize / 2, y: this.bounds.top + roadSize / 2, speed: 5, dir: 90, rewards: []};
            for (var j = 0; j < this.rewards.length; j++) {
                this.vehicles[i].rewards.push(true);
            }
        }
    }
    reset() {
        this.rewards = [];
        this.vehicles = [];
        this.genVehicles = [];
        this.spawnTimeout = [this.genTimeout, this.genTimeout, this.genTimeout, this.genTimeout];
        this.bounds = {left: Math.floor(Math.random() * canvas.width / 3), top: Math.floor(Math.random() * canvas.height / 4) + offset, right: Math.floor(canvas.width - Math.random() * canvas.width / 3), bottom: Math.floor(canvas.height - Math.random() * canvas.height / 3)};
        this.spawns = [{x: -vehicleHeight / 2, y: this.bounds.top + roadSize / 4, dir: 90}, {x: canvas.width + vehicleHeight / 2, y: this.bounds.bottom - roadSize / 4, dir: 270}, {x: this.bounds.left + roadSize / 4, y: canvas.height + vehicleHeight / 2, dir: 0}, {x: this.bounds.right - roadSize / 4, y: offset - vehicleHeight / 2, dir: 180}];
        this.junctions = [Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5];
        this.maxFitness = 0;
        for (var i = 0; i < this.junctions.length; i++) {
            if (this.junctions[i] == true) {
                break;
            }
            if (i == this.junctions.length - 1) {
                this.junctions[Math.floor(Math.random() * 4)] = true;
            }
        }
        for (var i = this.bounds.left + roadSize; i < this.bounds.right - roadSize; i += rewardsSpacing) {
            this.rewards.push({x1: i, x2: i, y1: this.bounds.top, y2: this.bounds.top + roadSize});
        }
        for (var i = this.bounds.top + roadSize; i < this.bounds.bottom - roadSize; i += rewardsSpacing) {
            this.rewards.push({x1: this.bounds.right - roadSize, x2: this.bounds.right, y1: i, y2: i});
        }
        for (var i = this.bounds.right - roadSize; i > this.bounds.left + roadSize; i -= rewardsSpacing) {
            this.rewards.push({x1: i, x2: i, y1: this.bounds.bottom - roadSize, y2: this.bounds.bottom});
        }
        for (var i = this.bounds.bottom - roadSize; i > this.bounds.top + roadSize; i -= rewardsSpacing) {
            this.rewards.push({x1: this.bounds.left, x2: this.bounds.left + roadSize, y1: i, y2: i});
        }
        for (var i = 0; i < genomes; i++) {
            this.vehicles.push({x: this.bounds.left + roadSize / 2, y: this.bounds.top + roadSize / 2, speed: 5, dir: 90, rewards: []});
            for (var j = 0; j < this.rewards.length; j++) {
                this.vehicles[i].rewards.push(true);
            }
        }
    }
    //checks if a self driving vehicle is within range of a reward node to collect it, and activates the reward node directly opposite to the collected reward node
    rewardsCollision(x, y, id) {
        for (var i = 0; i < this.rewards.length; i++) {
            if (this.vehicles[id].rewards[i] && ((i == 0 && y < canvas.height / 2) || (i != 0 && !this.vehicles[id].rewards[i - 1])) && (this.rewards[i].y1 == this.rewards[i].y2 && (Math.abs((this.rewards[i].x1 + this.rewards[i].x2) / 2 - x) < roadSize / 2 && Math.abs((this.rewards[i].y1 + this.rewards[i].y2) / 2 - y) < vehicleHeight / 2) || (this.rewards[i].x1 == this.rewards[i].x2 && Math.abs((this.rewards[i].x1 + this.rewards[i].x2) / 2 - x) < vehicleHeight / 2 && Math.abs(this.rewards[i].y1 + this.rewards[i].y2) / 2 - y < roadSize / 2))) {
                this.vehicles[id].rewards[i] = false;
                this.vehicles[id].rewards[(i + this.rewards.length / 2) % this.rewards.length] = true;
                return true;
            }
        }
        return false;
    }
    //checks if a point on the map can be entered - the bool soft allows points to exist on the roads outside of the circle, the bool supersoft allows points to exist anywhere on the map and at most roadSize + vehicleHeight / 2 away from the map
    valid(x, y, soft, superSoft) {
        if (x > this.bounds.left + roadSize && x < this.bounds.right - roadSize && y > this.bounds.top + roadSize && y < this.bounds.bottom - roadSize) {
            return false;
        }
        if (superSoft) {
            if (x < -vehicleHeight / 2 - roadSize || x > canvas.width + vehicleHeight / 2 + roadSize || y < offset - vehicleHeight / 2 - roadSize || y > canvas.height + vehicleHeight / 2 + roadSize) {
                return false;
            }
        }
        else if (soft) {
            if (x < this.bounds.left && (y < this.bounds.top || y > this.bounds.bottom) || x > this.bounds.right && (y < this.bounds.top || y > this.bounds.bottom)) {
            return false;
            }
            else if (x > this.bounds.left + roadSize && x < this.bounds.right - roadSize && (y < this.bounds.top || y > this.bounds.bottom) || y > this.bounds.top + roadSize && y < this.bounds.bottom - roadSize && (x < this.bounds.left || x > this.bounds.right)) {
                return false;
            }
            else if ((!env.junctions[0] && y < canvas.height / 2 && (x < this.bounds.left || x > this.bounds.right)) || !env.junctions[1] && y > canvas.height / 2 && (x < this.bounds.left || x > this.bounds.right) || !env.junctions[2] && x < canvas.width / 2 && (y < this.bounds.top || y > this.bounds.bottom) || !env.junctions[3] && x > canvas.width / 2 && (y < this.bounds.top || y > this.bounds.bottom)) {
                return false;
            }
        }
        else {
            if (x < this.bounds.left || x > this.bounds.right || y < this.bounds.top || y > this.bounds.bottom) {
                return false;
            }
        }
        return true;
    }
    //rotates lx and ly by dir degrees about centre (x, y) - when type is 0, returns x coordinate, when type is 1, returns y coordinate
    getCoords(lx, ly, x, y, dir) {
        return [lx * Math.cos(dir / 180 * Math.PI) - ly * Math.sin(dir / 180 * Math.PI) + x, lx * Math.sin(dir / 180 * Math.PI) + ly * Math.cos(dir / 180 * Math.PI) + y];
    }
    //checks if a point has collided with a generated vehicle
    genValid(x, y, id) {
        for (var i = 0; i < this.genVehicles.length; i++) {
            if (i != id) {
                var tCoords = this.getCoords(x - this.genVehicles[i].x, y - this.genVehicles[i].y, this.genVehicles[i].x, this.genVehicles[i].y, -this.genVehicles[i].dir);
                if (Math.abs(this.genVehicles[i].x - tCoords[0]) <= vehicleWidth / 2 && Math.abs(this.genVehicles[i].y - tCoords[1]) <= vehicleHeight / 2) {
                    return false;
                }
            }
        }
        return true;
    }
    //finds the distance to the nearest obstacle in a given direction - silent controls whether or not raycasts are shown
    raycast(x, y, dir, angle, silent, id, soft, superSoft) {
        var dist = 0;
        if (this.showRaycasts && !silent) {
            ctx.strokeStyle = '#9dff00';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
        while (this.valid(x, y, soft, superSoft) && this.genValid(x, y, id)) {
            x += Math.sin((dir + angle) * Math.PI / 180);
            y += -Math.cos((dir + angle) * Math.PI / 180);
            dist++;
        }
        if (this.showRaycasts && !silent) {
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.fillStyle = '#ffa700';
            ctx.fillRect(x - 2, y - 2, 4, 4);
        }
        if (Math.abs(angle) <= vehicleAngle) {
            dist -= (vehicleHeight / 2) / Math.cos(Math.abs(angle) * Math.PI / 180);
        }
        else {
            dist -= (vehicleWidth / 2) / Math.sin(Math.abs(angle) * Math.PI / 180);
        }
        return dist;
    }
    draw() {
        ctx.fillStyle = '#b5b5b5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#222222';
        ctx.fillRect(0 + !this.junctions[0] * this.bounds.left, this.bounds.top, canvas.width - !this.junctions[0] * (this.bounds.left + canvas.width - this.bounds.right), roadSize);
        ctx.fillRect(0 + !this.junctions[1] * this.bounds.left, this.bounds.bottom, canvas.width - !this.junctions[1] * (this.bounds.left + canvas.width - this.bounds.right), -roadSize);
        ctx.fillRect(this.bounds.left, 0 + !this.junctions[2] * this.bounds.top, roadSize, canvas.height - !this.junctions[2] * (this.bounds.top + canvas.height - this.bounds.bottom));
        ctx.fillRect(this.bounds.right, 0 + !this.junctions[3] * this.bounds.top, -roadSize, canvas.height - !this.junctions[3] * (this.bounds.top + canvas.height - this.bounds.bottom));
        ctx.fillStyle = '#006004';
        var unsorted = Array(neural.getGenomesLength()).fill(-5);
        for (var i = 0; i < neural.getGenomesLength(); i++) {
            if (neural.getActive(i)) {
                unsorted[i] = neural.getFitness(i);
            }
        }
        var maxId = unsorted.indexOf(this.quickSort(unsorted.slice(0))[neural.getGenomesLength() - 1]);
        if (neural.getFitness(maxId) > this.maxFitness) {
            this.maxFitness = neural.getFitness(maxId);
        }
        for (var i = 0; i < this.rewards.length; i++) {
            if (this.vehicles[maxId].rewards[i]) {
                ctx.fillRect(this.rewards[i].x1, this.rewards[i].y1, Math.max(this.rewards[i].x2 - this.rewards[i].x1, 1), Math.max(this.rewards[i].y2 - this.rewards[i].y1, 1));
            }
        }
    }
    drawOverlay() {
        var genomeRem = 0;
        var unsorted = Array(neural.getGenomesLength()).fill(-5);
        for (var i = 0; i < neural.getGenomesLength(); i++) {
            if (neural.getActive(i)) {
                unsorted[i] = neural.getFitness(i);
                genomeRem++;
            }
        }
        var maxId = unsorted.indexOf(this.quickSort(unsorted.slice(0))[neural.getGenomesLength() - 1]);
        ctx.fillStyle = '#b5b5b5';
        ctx.fillRect(0, 0, canvas.width, offset);
        ctx.fillStyle = '#000000';
        ctx.font = (offset / 6) + 'px Arial';
        ctx.fillText('Generation: ' + neural.getCount(), 10, offset * 0.25);
        ctx.fillText('Genomes remaining: ' + genomeRem + '/' + (neural.getGenomesLength()), 10, offset * 0.5);
        ctx.fillText('Current Fitness: ' + Math.round(neural.getFitness(maxId) * 1000) / 1000, 10, offset * 0.75);
        ctx.fillText('Max Fitness: ' + Math.round(this.maxFitness * 1000) / 1000, 10, offset);
        if (this.showNeuralNetwork) {
            ctx.fillStyle = '#000000';
            for (var i = 0; i < layerWidth.length; i++) {
                for (var j = 0; j < layerWidth[i]; j++) {
                    ctx.beginPath();
                    ctx.arc(canvas.width / 3 + canvas.width / 3 * i / (layerWidth.length - 1), offset / 10 + offset * 0.9 * j / (layerWidth[i] - 1), Math.abs(neural.getValue(maxId, i, j)) * (0.02 + 0.98 * 10 * (i != 0)), 0, 2 * Math.PI, false);
                    ctx.fill();
                    if (i < layerWidth.length - 1) {
                        for (var k = 0; k < layerWidth[i + 1] - 1 + (i == layerWidth.length - 2); k++) {
                            ctx.beginPath();
                            ctx.lineWidth = Math.abs(neural.getWeight(maxId, i + 1, k, j)) * 1;
                            ctx.moveTo(canvas.width / 3 + canvas.width / 3 * i / (layerWidth.length - 1), offset / 10 + offset * 0.9 * j / (layerWidth[i] - 1));
                            ctx.lineTo(canvas.width / 3 + canvas.width / 3 * (i + 1) / (layerWidth.length - 1), offset / 10 + offset * 0.9 * k / (layerWidth[i + 1] - 1));
                            ctx.stroke();
                        }
                    }
                }
            }
        }
    }
    drawVehicle(x, y, dir, generated) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(dir * Math.PI / 180);
        if (generated == 0) {
            ctx.fillStyle = '#00ff1d';
        }
        else if (generated == 1) {
            ctx.fillStyle = '#2700ff';
        }
        else {
            ctx.fillStyle = '#00a7ff';
        }
        ctx.fillRect(-vehicleWidth / 2, -vehicleHeight / 2, vehicleWidth, vehicleHeight);
        ctx.restore();
    }
    cycleGen() {
        for (var i = 0; i < this.genVehicles.length; i++) {
            this.genVehicles[i].x += this.genVehicles[i].speed * Math.sin(this.genVehicles[i].dir * Math.PI / 180);
            this.genVehicles[i].y += this.genVehicles[i].speed * -Math.cos(this.genVehicles[i].dir * Math.PI / 180);
        }
        if (this.genVehicles.length < this.minGenVehicles || Math.random() < this.probGen) {
            var r = Math.floor(Math.random() * 4);
            while (!this.junctions[r]) {
                r = Math.floor(Math.random() * 4);
            }
            if (this.spawnTimeout[r] > this.genTimeout) {
                this.spawnTimeout[r] = 0;
                this.genVehicles.push({x: this.spawns[r].x, y: this.spawns[r].y, speed: Math.floor(Math.random() * 4) + 1, dir: this.spawns[r].dir, controlled: false});
            }
        }
        for (var i = 0; i < this.spawnTimeout.length; i++) {
            this.spawnTimeout[i] += 10;
        }
    }
    cycle(commands, id) {
        this.vehicles[id].x += this.vehicles[id].speed * Math.sin(this.vehicles[id].dir * Math.PI / 180);
        this.vehicles[id].y += this.vehicles[id].speed * -Math.cos(this.vehicles[id].dir * Math.PI / 180);
        if (commands[0] < 0.3) {
            this.vehicles[id].dir -= (0.3 - commands[0]) * 10;
        }
        else if (commands[0] > 0.7) {
            this.vehicles[id].dir += (commands[0] - 0.7) * 10;
        }
        if (commands[1] < 0.3) {
            this.vehicles[id].speed -= 0.01;
        }
        else if (commands[1] > 0.7) {
            this.vehicles[id].speed += 0.01;
        }
        this.vehicles[id].speed = this.vehicles[id].speed * 0.999;
    }
    quickSort(nums) {
        var solved = [];
        for (var i = 0; i < nums.length; i++) {
            solved[i] = -1;
        }
        for (var count = 0; count < nums.length; count++) {
            var pivotPos = 0;
            for (var i = 0; i < nums.length; i++) {
                if (solved[i] === -1) {
                    pivotPos = i;
                    break;
                }
            }
            var startPos = pivotPos;
            var endPos = pivotPos;
            while (endPos < nums.length - 1 && solved[endPos + 1] === -1) {
                endPos++;
            }
            var leftPos = startPos + 1;
            var rightPos = endPos;
            var temp = 0;
            while (leftPos <= rightPos) {
                while (leftPos <= rightPos && nums[leftPos] < nums[pivotPos]) {
                    leftPos++;
                }
                while (leftPos <= rightPos && nums[rightPos] >= nums[pivotPos]) {
                    rightPos--;
                }
                if (leftPos > rightPos) {
                    break;
                }
                temp = nums[rightPos];
                nums[rightPos] = nums[leftPos];
                nums[leftPos] = temp;
            }
            temp = nums[pivotPos];
            nums[pivotPos] = nums[rightPos];
            nums[rightPos] = temp;
            pivotPos = rightPos;
            solved[pivotPos] = nums[pivotPos];
        }
        return solved;
    }
}