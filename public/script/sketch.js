// variables for dimensions
var videoHeight = 600;
var videoWidth = 800;
var canvasHeight = 600;
var canvasWidth = 800;
var pictureHeight = 600;
var pictureWidth = 800;

// variables for video data stream
var video;
var video2;
var imageData;
var imageSnap;

// variables for the qr code analysis
var qrcode;
var jsQR;
var picture;
var particle;
var particles = [];

// variables for interacton on website
var button;
var snap;
var snapshot;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;

var capture;
var options;

function preload() {
  // video = createCapture(VIDEO);
  // video.size(videoWidth, videoHeight);
  // video.hide();

  // video2 = createCapture(VIDEO);
  // video2.size(videoWidth, videoHeight);
  // video2.hide();

  picture = loadImage('P4200010.JPG');


}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  pixelDensity(1);
  button = createButton('scan QR-code');
  button.mousePressed(qrScan);
  snap = image(picture, 0, 0);
  // snap.loadPixels();
  // console.log(pixels);
}

function draw() {
  loadPixels();
  // let buffer = new ArrayBuffer()
  // console.log(pixels[]);

}

function make2Darray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function qrScan() {
  qrcode = jsQR(picture, pictureWidth, pictureHeight, {
    inversionAttempts: "dontInvert",
  });

  if (qrcode) {
    console.log("Found QR code", qrcode);
  }
}

// Learn from the getImageData() method and translate this into javascript for p5js

// The getImageData() method returns an ImageData object that copies the pixel data for the specified rectangle on a canvas.
// image(picture, 0, 0, width, height);

// let pictureDataSize = 4 * (width * d) * heigth * d);

// let pictureData = make2Darray(width, heigth);
// // Take the pixels of the image
// picture.loadPixels();
// for (let i = 0; i > 4 * (width * height / 2); i += 4) {
//   pictureData.picture.pixels[i]
// }
//
// Note: The ImageData object is not a picture, it specifies a part (rectangle) on the canvas, and holds information of every pixel inside that rectangle.
//
// For every pixel in an ImageData object there are four pieces of information, the RGBA values:
//
// R - The color red (from 0-255)
// G - The color green (from 0-255)
// B - The color blue (from 0-255)
// A - The alpha channel (from 0-255; 0 is transparent and 255 is fully visible)
//
// put the pixels into a 2 D Array()
// The color/alpha information is held in an array, and is stored in the data property of the ImageData object.
//
// Tip: After you have manipulated the color/alpha information in the array, you can copy the image data back onto the canvas with the putImageData() method.
// pass the array to the jsQR.
