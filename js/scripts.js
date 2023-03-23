function characterCreator(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const race = document.getElementById("race").value;
  const strength = document.querySelector("input[name='strength']:checked").value;
  let character;
  if (race === "Human") {
    if (strength === "strong") {
      character = "fighter";
    } else if (strength === "smart") {
      character = "wizard";
    }
  } else if (race === "Elf") {
    if (strength === "strong") {
      character = "ranger";
    } else if (strength === "smart") {
      character = "druid";
    }
  } else if (race === "Orc") {
    if (strength === "strong") {
      character = "barbarian";
    } else if (strength === "smart") {
      character = "shaman";
    }
  }

  document.getElementById("output").innerText = "Your character " + name + " would make an excellent " + character + "!";
}

window.addEventListener("load", function() {
  const form = document.getElementById("character");
  form.addEventListener("submit", characterCreator);
});