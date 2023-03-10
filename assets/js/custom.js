var todoCount = document.querySelectorAll(".color-todo").length
var doneCount = document.querySelectorAll(".color-success").length

// document.getElementById("progress-value").innerHTML = `${doneCount}/${todoCount}`
document.getElementById("progress-value").innerHTML = `${(doneCount / todoCount * 100).toFixed(1)}%`

var logotext = document.getElementById("logotext")
var logotextGruntz = document.getElementById("logotext-gruntz")
var logotextUnityverse = document.getElementById("logotext-unityverse")

document.getElementById("logotext").addEventListener("mouseover", (event) => {
  logotextGruntz.style.opacity = "0.75"
  logotextUnityverse.style.opacity = "0.75"
})

document.getElementById("logotext").addEventListener("mouseout", (event) => {
  logotextGruntz.style.opacity = "1"
  logotextUnityverse.style.opacity = "1"
})

// Start of Color-coding
if (!localStorage.hasOwnProperty("isColorCodingOn")) {
  localStorage.setItem("isColorCodingOn", "false")
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
// End of Color-coding
