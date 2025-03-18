let inch = 42;
console.log("42 inches are "+(42/12).toFixed(2)+" feet");

const feetToMeter = 0.3048;
let lengthFeet = 60, widthFeet = 40;
let lengthMeters = lengthFeet * feetToMeter;
let widthMeters = widthFeet * feetToMeter;
let areaPerPlotMeters = lengthMeters * widthMeters;
console.log("Area of Rectangular Plot of 60 feet x 40 feet in meters is " + areaPerPlotMeters.toFixed(2) + " meter^2");

let totalAreaMeters = areaPerPlotMeters * 25;
const squareMetersToAcres = 4046.86;
let totalAreaAcres = totalAreaMeters / squareMetersToAcres;
console.log("Area of 25 such plots is " + totalAreaAcres.toFixed(2) + " acres");