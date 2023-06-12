const right = document.getElementById("right");
const left = document.getElementById("left");
const action = document.getElementsByClassName("action");
var index = 0;
action[0].style.display = "block";

function prev() {
  calculation("prev");
}
function next() {
  calculation("next");
}
function calculation(direction) {
  if (direction == "next") {
    index++;
    if (index == action.length) {
      index = 0;
    }
  } else if (index == 0) {
    index = action.length - 1;
  } else {
    index--;
  }

  for (var i = 0; i < action.length; i++) {
    action[i].style.display = "none";
  }

  action[index].style.display = "block";
}
