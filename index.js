// Función para cambiar tema
const changeTheme = () => {
  const body = document.body;
  
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    localStorage.setItem("theme", "dark");
    updateThemeButton();
  } else {
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    updateThemeButton();
  }
};

// Actualizar el ícono del botón
const updateThemeButton = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (!themeBtn) return;
  
  if (document.body.classList.contains("light")) {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

// Cargar tema guardado al iniciar
const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const body = document.body;
  
  if (savedTheme === "light") {
    body.classList.add("light");
  } else {
    body.classList.remove("light");
  }
  
  updateThemeButton();
  
  // Agregar event listener al botón
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", changeTheme);
  }
};

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", loadTheme);
