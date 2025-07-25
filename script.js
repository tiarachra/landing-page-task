const navBar = document.querySelector(".navbar");
const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".navigation");
const iconClose = document.querySelector(".ri-close-line");

window.addEventListener("scroll", () => {
  const positionWindow = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", positionWindow);
  sideBar.classList.remove("menu-active");
});

menuBar?.addEventListener("click", () => {
  sideBar.classList.toggle("menu-active");
});

iconClose?.addEventListener("click", () => {
  sideBar.classList.remove("menu-active");
});

// Form logic
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  return { name, email, city, zipCode, status };
}

function isNumber(str) {
  return !isNaN(str);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  return (
    formData !== null &&
    formData.name !== "" &&
    formData.city !== "" &&
    formData.email !== "" &&
    formData.zipCode !== "" &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked()
  );
}

function submit() {
  const warning = document.getElementById("warning");
  const formData = handleGetFormData();

  if (!validateFormData(formData)) {
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    warning.textContent = "";
  }
}

document.getElementById("submit-form").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});