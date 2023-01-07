document.getElementById("head").style.display = "none";

function removeProperty() {
  document.getElementById("head").style.removeProperty("display");
}
setTimeout(removeProperty, 8000);

document.getElementById("bubble-div").style.display = "none";

function removeHiddenBubbleProperty() {
  document.getElementById("bubble-div").style.removeProperty("display");
}
setTimeout(removeHiddenBubbleProperty, 5320);
