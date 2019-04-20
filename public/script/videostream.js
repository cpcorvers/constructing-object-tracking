// variables for video data stream
var video;
var video2;
var imageData;
var imageSnap;

// variables for the qr code analysis
var qrcode;
var jsQR;

// variables for interacton on website
var button;
var snap;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;

var videoHeight = 600 / 2;
var videoWidth = 800 / 2;


var capture;
var options;

function preload() {
  video = createCapture(VIDEO);
  video.size(videoWidth, videoHeight);
  video.hide();
  video2 = createCapture(VIDEO);
  video2.size(videoWidth, videoHeight);
  video2.hide();
}

function setup() {
  createCanvas(800, 600);
  pixelDensity(1);
  // background(51);
  // video = createCapture(VIDEO);
  // video.size(320, 240);
  // imageData.hide();


  // canvasPixelX = video.
  console.log('video size: ' + videoWidth + ' x ' + videoHeight);
  console.log('video readystate: ' + VIDEO.readyState);

  // button = createButton('snap');
  // button.mousePressed(takesnap);
  //
  // button = createButton('scan QR-code');
  // button.mousePressed(qrScan);

  // qrcode = jsQR(imageData, 320, 240);

  // tick();
  // requestAnimationFrame(tick);
}

// function to take a still immage of the video,
// store the video 'snap' in an array 'snapshots'
// analyse the 'snap' for qrcode

// function takesnap() {
//   snap = video.get(video, 0, 0, videoWidth / 2, videoHeight / 2);
//   image(snap, 0, 0, 320, 240);
//   // snap = video.copy();
//   snapshots.push(snap);
//   console.log(snap);
//   // image(video, 0, 0, 320, 240);
//
//
// }
// function qrScan() {
//   qrcode = jsQR(video, videoWidth, videoHeight, {
//     inversionAttempts: "dontInvert",
//   });
//
//   // if (code) {
//   //   console.log("Found QR code", code);
//   // }
//
//
//   // if (code) {
//   //   drawLine(qrcode.location.topLeftCorner, qrcode.location.topRightCorner, "#FF3B58");
//   //   drawLine(qrcode.location.topRightCorner, qrcode.location.bottomRightCorner, "#FF3B58");
//   //   drawLine(qrcode.location.bottomRightCorner, qrcode.location.bottomLeftCorner, "#FF3B58");
//   //   drawLine(qrcode.location.bottomLeftCorner, qrcode.location.topLeftCorner, "#FF3B58");
//   //   console.log("Found QR code", qrcode);
//   // } else {
//   //   console.log("not found");
//   // }
// }

function draw() {

  background(0);
  image(video, 0, 0);
  image(video, 0, videoHeight, videoWidth, videoHeight);
  // tick();

}


function tick() {
  // loadingMessage.innerText = "⌛ Loading video..."
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    // loadingMessage.hidden = true;
    // canvasElement.hidden = false;
    // outputContainer.hidden = false;


    var imageData = video.get(0, 0, videoWidth, videoHeight);
    // var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    var code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });
    if (code) {
      drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
      drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
      drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
      drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
      // outputMessage.hidden = true;
      // outputData.parentElement.hidden = false;
      // outputData.innerText = code.data;
      console.log('Succesful QR scan: ' + code.data);
    } else {
      // outputMessage.hidden = false;
      // outputData.parentElement.hidden = true;
      console.log('QR scan NOT succesful')
    }
  }

}
