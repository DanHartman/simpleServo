var five = require("johnny-five");
var board = new five.Board({ 
  //port: 'COM12',
  repl: false,
  debug: false
});

board.on("ready", function() {
  var servo = new five.Servo({
    id: "MyServo",
    pin: 10, 
    type: "standard",
    range: [50,150],
    fps: 10, 
    invert: false, 
    offset: 5,
    center: false, 
  });

  servo.sweep();
});
