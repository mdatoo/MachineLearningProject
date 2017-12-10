class InputOutput {
    constructor() {
        document.getElementById('NNV').checked = env.showNeuralNetwork;
        document.getElementById('Raycasts').checked = env.showRaycasts;
        document.getElementById('slider0').value = genomes;
        document.getElementById('slider1').value = env.probGen;
        document.getElementById('slider2').value = env.genTimeout;
        document.getElementById('slider3').value = env.minGenVehicles;
        for (var i = 0; i < layerWidth.length - 1; i++) {
            document.getElementById('select' + i).value = layerWidth[i];
        }
        document.getElementById('select' + (maxLayerWidthLength - 1)).value = layerWidth[layerWidth.length - 1];
        for (var i = 0; i < 4; i++) {
            document.getElementById('text' + i).innerHTML = document.getElementById('slider' + i).value;
        }
        localStorage.setItem('Preset', '{"genomes":[{"layers":[{"neurons":[{"weights":[],"value":23.95},{"weights":[],"value":1.4685337309506465},{"weights":[],"value":93.46853373095064},{"weights":[],"value":119.95},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.170180254385953,-0.3373578396888872,1.2250704957358423,-0.5745857710352746,-1.991900427911668],"value":0.9999997150183701},{"weights":[-0.4191669538458962,3.129926972421785,4.234065506307502,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-2.6503135551247836,3.435246737549704,3.13807496554716,3.0850908585758656,2.821459783634157],"value":1},{"weights":[-3.090483199757972,-2.601870303692543,8.545321662087215,-3.733086211896284,-0.7495944082138526],"value":1},{"weights":[4.238647951449478,-4.6060477034475635,5.046084510084006,-4.702830568637022,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[-4.768244916199427,3.8710936581242805,1.8627001147547588,3.4813059391626044,-7.084036627936596],"value":0.06678354386404782},{"weights":[-2.5807236072041024,-0.6107899569655708,1.1510940829367553,1.3856342161905912,0.33852328749225435],"value":0.4215871810496506}]}],"fitness":5.4,"active":false},{"layers":[{"neurons":[{"weights":[],"value":102.95},{"weights":[],"value":1.4685337309506465},{"weights":[],"value":212.46853373095064},{"weights":[],"value":58.95},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.170180254385953,-0.3373578396888872,1.2250704957358423,-0.5745857710352746,-2.7728874699373227],"value":1},{"weights":[0.4592042083772552,3.129926972421785,4.234065506307502,-1.6194186627312557,-1.2633443502155135],"value":1},{"weights":[-2.627684767625146,3.435246737549704,2.7506376695291346,2.1430103561379883,2.821459783634157],"value":1},{"weights":[-3.090483199757972,-2.601870303692543,9.383365542903402,4.656775477186617,-0.7495944082138526],"value":1},{"weights":[4.238647951449478,-4.6060477034475635,5.046084510084006,-4.702830568637022,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[-0.25798726157390384,3.8710936581242805,1.8627001147547588,3.4813059391626044,-7.084036627936596],"value":0.8668137747750978},{"weights":[-2.5807236072041024,-0.6107899569655708,1.1510940829367553,1.2057612726199358,0.33852328749225435],"value":0.378449405670207}]}],"fitness":31.099999999999945,"active":false},{"layers":[{"neurons":[{"weights":[],"value":59.95},{"weights":[],"value":94.46853373095064},{"weights":[],"value":260.46853373095064},{"weights":[],"value":2.9499999999999993},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.170180254385953,-0.3373578396888872,1.6369304819925037,-0.5745857710352746,-2.7728874699373227],"value":1},{"weights":[-0.4191669538458962,3.129926972421785,4.234065506307502,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-2.6503135551247836,4.020712876882834,2.7506376695291346,2.3501028759231666,2.821459783634157],"value":1},{"weights":[-3.090483199757972,-2.601870303692543,9.383365542903402,1.623435922975533,-0.3426032519333826],"value":1},{"weights":[3.992751667921457,-4.2789805695522105,5.046084510084006,-4.702830568637022,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[2.4864491758024365,3.8710936581242805,1.8627001147547588,3.4813059391626044,-7.084036627936596],"value":0.9902192698047728},{"weights":[-2.5807236072041024,-0.6252791610795918,1.1510940829367553,2.110256332585713,0.5396473633010497],"value":0.6445104105382626}]}],"fitness":173.80000000000146,"active":false},{"layers":[{"neurons":[{"weights":[],"value":110.95},{"weights":[],"value":94.46853373095064},{"weights":[],"value":325.46853373095064},{"weights":[],"value":5.949999999999999},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.170180254385953,-0.3373578396888872,1.2250704957358423,-0.5745857710352746,-2.7728874699373227],"value":1},{"weights":[-0.4191669538458962,3.129926972421785,4.234065506307502,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-2.6503135551247836,3.435246737549704,2.7506376695291346,2.3501028759231666,2.821459783634157],"value":1},{"weights":[-3.090483199757972,-2.601870303692543,9.383365542903402,-3.733086211896284,-0.7495944082138526],"value":1},{"weights":[4.238647951449478,-4.6060477034475635,5.046084510084006,-4.702830568637022,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[2.4864491758024365,3.8710936581242805,1.8627001147547588,3.4813059391626044,-7.084036627936596],"value":0.9902192698047728},{"weights":[-2.5807236072041024,-0.6107899569655708,1.1510940829367553,1.3856342161905912,0.33852328749225435],"value":0.4215870017069762}]}],"fitness":8970.399999996367,"active":false},{"layers":[{"neurons":[{"weights":[],"value":123.95},{"weights":[],"value":104.46853373095064},{"weights":[],"value":487.46853373095064},{"weights":[],"value":4.949999999999999},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.170180254385953,-0.3373578396888872,1.2250704957358423,-0.5745857710352746,-2.7728874699373227],"value":1},{"weights":[4.062247350184144,3.129926972421785,4.234065506307502,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-3.8225292081886653,0.45316403504778613,-4.266782901655093,2.890702730171391,2.821459783634157],"value":0},{"weights":[-3.090483199757972,4.614597607089401,9.383365542903402,-3.349063777553343,-0.7495944082138526],"value":1},{"weights":[4.238647951449478,-4.6060477034475635,2.2442910234189517,-4.583923393186499,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[2.4864491758024365,3.8710936581242805,1.8627001147547588,3.4813059391626044,-7.084036627936596],"value":0.9401845470847967},{"weights":[-2.5807236072041024,-0.6107899569655708,1.1510940829367553,1.3856342161905912,-0.4958770055776398],"value":0.09097760499607346}]}],"fitness":54.7999999999998,"active":false},{"layers":[{"neurons":[{"weights":[],"value":101.95},{"weights":[],"value":22.468533730950647},{"weights":[],"value":2.4685337309506465},{"weights":[],"value":64.95},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.170180254385953,-0.3373578396888872,1.2250704957358423,0.043117800037260956,-2.7728874699373227],"value":1.66783031739143e-54},{"weights":[2.2021862391812164,3.129926972421785,4.234065506307502,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-2.6503135551247836,3.435246737549704,2.7506376695291346,-4.563785401849573,2.821459783634157],"value":4.134698823533397e-209},{"weights":[-3.090483199757972,-2.4040997959246364,9.383365542903402,-4.429879578997729,-0.7495944082138526],"value":3.049590691507048e-276},{"weights":[4.238647951449478,-4.6060477034475635,5.046084510084006,2.583619706521816,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[2.4864491758024365,3.8710936581242805,1.8627001147547588,0.20772760659762568,-7.084036627936596],"value":0.03868155058247155},{"weights":[-2.5807236072041024,-0.6107899569655708,1.1510940829367553,1.3856342161905912,-3.3316557694776194],"value":0.019031483597195552}]}],"fitness":25.299999999999898,"active":false},{"layers":[{"neurons":[{"weights":[],"value":110.95},{"weights":[],"value":167.46853373095064},{"weights":[],"value":0.46853373095064654},{"weights":[],"value":18.95},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.170180254385953,-1.1145593839628813,1.2250704957358423,-0.5745857710352746,-2.7728874699373227],"value":7.387780840725587e-144},{"weights":[-0.4191669538458962,3.129926972421785,4.20466037226409,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-2.287472942610594,3.435246737549704,2.7506376695291346,2.3501028759231666,2.377199560063569],"value":1},{"weights":[-3.090483199757972,1.0491099334474168,9.383365542903402,-3.733086211896284,-0.7495944082138526],"value":1.7723669130719744e-102},{"weights":[4.238647951449478,-4.6060477034475635,5.046084510084006,3.831174283142925,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[2.4864491758024365,3.8710936581242805,1.8627001147547588,3.4813059391626044,-7.084036627936596],"value":0.20583067080721335},{"weights":[3.2384106507642585,-0.6107899569655708,1.1510940829367553,1.3856342161905912,0.35927208407034383],"value":0.7108624058732931}]}],"fitness":10.200000000000006,"active":false},{"layers":[{"neurons":[{"weights":[],"value":53.95},{"weights":[],"value":99.46853373095064},{"weights":[],"value":98.46853373095064},{"weights":[],"value":40.95},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.170180254385953,-0.3373578396888872,1.2250704957358423,-0.5745857710352746,-2.7728874699373227],"value":0.08635355178584854},{"weights":[-0.4191669538458962,3.129926972421785,4.234065506307502,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-2.6503135551247836,3.435246737549704,2.7506376695291346,2.3501028759231666,2.821459783634157],"value":1},{"weights":[-3.090483199757972,-2.601870303692543,9.383365542903402,-3.733086211896284,-0.7495944082138526],"value":1},{"weights":[4.238647951449478,-3.988634275529104,5.046084510084006,-4.702830568637022,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[2.4864491758024365,3.8710936581242805,1.8627001147547588,2.135664489694207,-7.084036627936596],"value":0.7310851896755236},{"weights":[-2.5807236072041024,-0.6107899569655708,1.1510940829367553,1.3856342161905912,0.33852328749225435],"value":0.88509679971608}]}],"fitness":45567.9000000977,"active":true},{"layers":[{"neurons":[{"weights":[],"value":93.95},{"weights":[],"value":289.46853373095064},{"weights":[],"value":0.46853373095064654},{"weights":[],"value":2.9499999999999993},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.732808562368246,-0.3373578396888872,1.2250704957358423,0.10569900086292794,3.685646041000121],"value":7.456839963176626e-112},{"weights":[-0.4191669538458962,2.221075232774674,4.234065506307502,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-2.005243055294965,3.435246737549704,3.170019556181968,0.8525631057140952,2.821459783634157],"value":1},{"weights":[-3.090483199757972,-2.601870303692543,8.543156760612154,-3.733086211896284,-0.7495944082138526],"value":0},{"weights":[4.238647951449478,-4.6060477034475635,5.046084510084006,-4.702830568637022,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[2.4864491758024365,3.8710936581242805,2.7370820371242144,3.4813059391626044,-6.13153163039017],"value":0.6169551070332197},{"weights":[-2.5807236072041024,-0.6107899569655708,-2.585011996198552,1.3856342161905912,0.33852328749225435],"value":0.05430629097583802}]}],"fitness":16.900000000000006,"active":false},{"layers":[{"neurons":[{"weights":[],"value":112.95},{"weights":[],"value":108.46853373095064},{"weights":[],"value":204.46853373095064},{"weights":[],"value":0.9499999999999993},{"weights":[],"value":1}]},{"neurons":[{"weights":[-1.8783164422423742,-0.3373578396888872,1.2250704957358423,-0.5745857710352746,-2.7728874699373227],"value":0.17094730915223996},{"weights":[-0.4191669538458962,3.129926972421785,4.55178930288994,0.7654034895053301,-1.2633443502155135],"value":1},{"weights":[-2.6503135551247836,3.435246737549704,2.7506376695291346,2.3501028759231666,2.821459783634157],"value":1},{"weights":[-3.090483199757972,-2.601870303692543,8.568152710303217,-3.733086211896284,-0.7495944082138526],"value":1},{"weights":[4.238647951449478,-4.206414403400183,5.046084510084006,-5.3434055581126305,1.8949878513428864],"value":1}]},{"neurons":[{"weights":[2.4864491758024365,3.8710936581242805,1.8627001147547588,1.5113597715453153,-7.084036627936596],"value":0.6424855883798786},{"weights":[-3.5538935751500946,-0.6107899569655708,1.1510940829367553,1.3856342161905912,-0.10532597888120376],"value":0.7708441405145015}]}],"fitness":84.7000000000002,"active":false}],"layers":[5,5,0,0,2],"generation":152,"maxFitness":45567.1000000977}');
        this.loadWeights('Preset');
        for (var i = 0; i < localStorage.length; i++) {
            document.getElementById('load').innerHTML += '<div onclick="IO.loadWeights(' + "'" + localStorage.key(i) + "'" + ')">' + localStorage.key(i) + '</div><br>';
        }
        this.keys = {left: false, up: false, right: false, down: false};
    }
    //when canvas clicked, checks no generated vehicle is being controlled currently, searches for collision with a generated vehicle (collision occurs if mouse is within vehicleDiagonal distance to a generated vehicle)
    controlVehicle(event) {
        var vehicleIndex = -1;
        for (var i = 0; i < env.getGenVehiclesLength(); i++) {
            if (env.getGenVehicles(i).controlled) {
                break;
            }
            if (Math.abs(event.clientX - canvas.offsetLeft - env.getGenVehicles(i).x) < vehicleDiagonal && Math.abs(event.clientY - canvas.offsetTop - env.getGenVehicles(i).y) < vehicleDiagonal) {
                vehicleIndex = i;
            }
            if (i == env.getGenVehiclesLength() - 1 && vehicleIndex > -1) {
                env.toggleGenControl(vehicleIndex);
            }
        }
    }
    reset() {
        neural.reset(genomes, layerWidth);
        env.reset();
    }
    dialog(type) {
        if (type == 'reset') {
            this.reset();
        }
        else if (document.getElementById(type).style.display == 'block') {
            document.getElementById(type).style.display = 'none';
        }
        else {
            document.getElementById('save').style.display = 'none';
            document.getElementById('load').style.display = 'none';
            document.getElementById('options').style.display = 'none';
            document.getElementById(type).style.display = 'block';
        }
    }
    setVal(type) {
        document.getElementById('text' + type.slice(-1)).innerHTML = document.getElementById('slider' + type.slice(-1)).value;
    }
    saveOptions() {
        document.getElementById('options').style.display = 'none';
        env.showNeuralNetwork = document.getElementById('NNV').checked;
        env.showRaycasts = document.getElementById('Raycasts').checked;
        genomes = document.getElementById('slider0').value;
        env.probGen = document.getElementById('slider1').value;
        env.genTimeout = document.getElementById('slider2').value;
        env.minGenVehicles = document.getElementById('slider3').value;
        for (var i = 0; i < maxLayerWidthLength; i++) {
            layerWidth[i] = document.getElementById('select' + i).value;
        }
        layerWidth = layerWidth.filter(function (el) {return (el != 0);});
        this.reset();
    }
    //saves neural system info to local storage, adds save file name to list in options modal
    saveWeights() {
        while (layerWidth.length < maxLayerWidthLength) {
            layerWidth.splice(layerWidth.length - 1, 0, 0);
        }
        document.getElementById('save').style.display = 'none';
        localStorage.setItem(document.getElementById('saveNameInput').value, JSON.stringify({genomes: neural.getGenomes(), layers: layerWidth, generation: neural.getCount(), maxFitness: env.getMaxFitness()}));
        document.getElementById('load').innerHTML += '<div onclick="IO.loadWeights(' + "'" + document.getElementById('saveNameInput').value + "'" + ')">' + document.getElementById('saveNameInput').value + '</div><br>';
        layerWidth = layerWidth.filter(function (el) {return (el != 0);});
    }
    loadWeights(id) {
        document.getElementById('load').style.display = 'none';
        for (var i = 0; i < maxLayerWidthLength; i++) {
            layerWidth[i] = JSON.parse(localStorage.getItem(id)).layers[i];
        }
        layerWidth = layerWidth.filter(function (el) {return (el != 0);});
        this.reset();
        neural.setCount(JSON.parse(localStorage.getItem(id)).generation);
        env.setMaxFitness(JSON.parse(localStorage.getItem(id)).maxFitness);
        neural.setGenomes(JSON.parse(localStorage.getItem(id)).genomes);
    }
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            IO.keys.left = true;
            break;
        case 38:
            IO.keys.up = true;
            break;
        case 39:
            IO.keys.right = true;
            break;
        case 40:
            IO.keys.down = true;
            break;
    }
};

document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            IO.keys.left = false;
            break;
        case 38:
            IO.keys.up = false;
            break;
        case 39:
            IO.keys.right = false;
            break;
        case 40:
            IO.keys.down = false;
            break;
    }
};