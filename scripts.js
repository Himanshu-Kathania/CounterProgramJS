let count = 0;

document.getElementById("Decrease").onclick = function () {
  count -= 1;
  document.getElementById("counterLable").innerHTML = count;
};

document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("counterLable").innerHTML = count;
};

document.getElementById("increse").onclick = function () {
  count += 1;
  document.getElementById("counterLable").innerHTML = count;
};
