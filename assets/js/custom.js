if (!localStorage.hasOwnProperty("isColorCodingOn")) {
  localStorage.setItem("isColorCodingOn", "true")
}

if (localStorage.getItem("isColorCodingOn") === "true") {
  toggleColorCoding("true")
} else {
  toggleColorCoding("false")
}

document.getElementById("color-coding-toggle-container").addEventListener("click", () => {
  if (localStorage.getItem("isColorCodingOn") === "true") {
    toggleColorCoding("false")
  } else {
    toggleColorCoding("true")
  }
})

function toggleColorCoding(onOffValue) {
  localStorage.setItem("isColorCodingOn", onOffValue)

  if (onOffValue === "true") {
    document.getElementById("color-coding-toggle-icon").classList.add("fa-toggle-on")
    document.getElementById("color-coding-toggle-text").textContent = "Color-Coding On"
    document.getElementById("color-coding-toggle-icon").style.color = "green"

    document.querySelectorAll(".game-object").forEach((element) => {
      element.classList.remove("color-off")
    });
  } else {
    document.getElementById("color-coding-toggle-icon").classList.add("fa-toggle-off")
    document.getElementById("color-coding-toggle-text").textContent = "Color-Coding Off"
    document.getElementById("color-coding-toggle-icon").style.color = "red"

    document.querySelectorAll(".game-object").forEach((element) => {
      element.classList.add("color-off")
    });
  }
}
