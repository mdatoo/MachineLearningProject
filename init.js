var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

const offset = canvas.height * 0.1;
const roadSize = Math.round(Math.min(canvas.width, canvas.height) / 8);
const vehicleWidth = Math.min(canvas.width, canvas.height) / 30;
const vehicleHeight = Math.min(canvas.width, canvas.height) / 20;
const vehicleDiagonal = Math.sqrt(Math.pow(vehicleWidth, 2) + Math.pow(vehicleHeight, 2));
const vehicleAngle = Math.atan(vehicleWidth / vehicleHeight) * 180 / Math.PI;
const rewardsSpacing = Math.min(canvas.width, canvas.height) / 100;
const maxLayerWidthLength = 5;

var layerWidth = [5, 5, 2];
var genomes = 10;