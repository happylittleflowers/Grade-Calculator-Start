// GRADE CALCULATOR

document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  // INPUT
  let scripting1 = prompt("Enter Cilent side scripting 1: %): ");
  let programming1 = prompt("Enter Stuctured programming 1 : %): ");
  let programming2 = prompt("Enter Stuctured programming 2 : %): ");
  let scriptimg2 = prompt("Enter Cilent side scripting 2 : %): ");
  let project = prompt("Enter Project A: %): ");
  // PROCESS

  var finalgrade = 81;
  alert(`Your Final CS10 Grade is: ${finalgrade}%`);

  // OUTPUT

  document.getElementById("finalgrade").innerHTML = finalgrade;
}
