window.onresize = doSomething;

function doSomething() {
  console.log("Code that does something");
  var mySplitText = new SplitText("#text", { type: "lines" });
  var lines = mySplitText.lines; //an array of all the divs that wrap each character
  console.log("Check console logs to see how the lines.length is increased when a new line is added as you resize.");
  console.log(lines.length);
}