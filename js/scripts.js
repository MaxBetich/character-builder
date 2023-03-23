function characterCreator(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const race = document.getElementById("race").value;
  const strength = document.querySelector("input[name='strength']:checked").value;
  let character;
  if (race === "Human") {
    if (strength === "strong") {
      character = "fighter";
      document.getElementById("fighter").removeAttribute("class");
    } else if (strength === "smart") {
      character = "wizard";
      document.getElementById("wizard").removeAttribute("class");
    }
  } else if (race === "Elf") {
    if (strength === "strong") {
      character = "ranger";
      document.getElementById("ranger").removeAttribute("class");
    } else if (strength === "smart") {
      character = "druid";
      document.getElementById("druid").removeAttribute("class");
    }
  } else if (race === "Orc") {
    if (strength === "strong") {
      character = "barbarian";
      document.getElementById("barbarian").removeAttribute("class");
    } else if (strength === "smart") {
      character = "shaman";
      document.getElementById("shaman").removeAttribute("class");
    }
  }

  document.getElementById("output").innerText = "Your character " + name + " would make an excellent " + character + "!";
}

window.addEventListener("load", function() {
  const form = document.getElementById("character");
  form.addEventListener("submit", characterCreator);
});