//returns the method for getUserMedia if it exists otherwise return false
var getUserMedia = function() {
  return navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia || false;
}
//initialize the webcam video stream
init = function () {
  console.log('Initializing');
  videoElem = $('#webcam-view')[0];
  if(getUserMedia) {
    if(navigator.getUserMedia) {
      navigator.getUserMedia({audio:true, video:true}, function(stream) {
        //create url for webcam data
        videoElem.src = window.URL.createObjectURL(stream);

      }, function(e) {
        console.log('Error getting userMedia');
        console.log(e);
      });
    } else if(navigator.webkitGetUserMedia) {
      navigator.webkitGetUserMedia({audio:true, video:true}, function(stream) {
        //create url for webcam data
        videoElem.src = window.webkitURL.createObjectURL(stream);

      }, function(e) {
        console.log('Error getting userMedia');
        console.log(e);
      });
    } else if(navigator.mozGetUserMedia) {
      console.log('Mozilla Fuck!');
      navigator.mozGetUserMedia({audio:true, video:true}, function(stream) {
        //create url for webcam data
        videoElem.src = window.URL.createObjectURL(stream);

      }, function(e) {
        console.log('Error getting userMedia');
        console.log(e);
      });
    } else {
      navigator.msGetUserMedia({audio:true, video:true}, function(stream) {
        //create url for webcam data
        videoElem.src = window.URL.createObjectURL(stream);

      }, function(e) {
        console.log('Error getting userMedia');
        console.log(e);
      });
    }
    
  } else {
    console.log('It seems that your browser does not support getUserMedia.');
  }
  //canvas = document.getElementById('draw');
  //canvasContext = canvas.getContext('2d');
}

$(function() {
  //initialize the webcam stream
  init();
});
//document.onload = init();