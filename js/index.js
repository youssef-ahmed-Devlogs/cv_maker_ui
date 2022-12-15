// ====================== START DARK MODE ======================
const darkModeToggle = document.querySelector("header .dark-mode-toggle");
let currentMode = localStorage.getItem("current_mode")
  ? localStorage.getItem("current_mode")
  : "light";

const cssColors = {
  lightColor: "#fff",
  darkColor: "#0e3048",
  blueLightColor: "#eff6ff",
  blueDarkColor: "#1a73e842",
  bodyColor: "#eff6ff",
  bodyDarkColor: "#0e3048f2",
};

changeIcon(darkModeToggle);
changeColors();

darkModeToggle.addEventListener("click", function () {
  changeMode();
  changeIcon(this);
  changeColors();
});

// Dark Mode Functions

function changeMode() {
  currentMode == "light" ? (currentMode = "dark") : (currentMode = "light");
  localStorage.setItem("current_mode", currentMode);
}

function changeIcon(button) {
  const icon = button.querySelector(".icon");
  if (currentMode == "light") {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

function changeColors() {
  const headerLogo = document.querySelector("header .navbar-brand img");
  const footerLogo = document.querySelector("footer .top-footer .logo img");

  if (currentMode == "dark") {
    setCssVar("--light-color", cssColors.darkColor);
    setCssVar("--dark-color", cssColors.lightColor);
    setCssVar("--blue-light-color", cssColors.blueDarkColor);
    setCssVar("--body-color", cssColors.bodyDarkColor);

    headerLogo.src = "../images/logo/logo-light.png";
    footerLogo.src = "../images/logo/logo-dark.png";
  } else {
    setCssVar("--light-color", cssColors.lightColor);
    setCssVar("--dark-color", cssColors.darkColor);
    setCssVar("--blue-light-color", cssColors.blueLightColor);
    setCssVar("--body-color", cssColors.bodyColor);

    headerLogo.src = "../images/logo/logo-dark.png";
    footerLogo.src = "../images/logo/logo-light.png";
  }
}

function setCssVar(property, value) {
  document.documentElement.style.setProperty(property, value);
}

// ====================== END DARK MODE ======================
