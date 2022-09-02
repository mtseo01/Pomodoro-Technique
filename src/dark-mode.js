function darkModeBtn() {
  let element = document.body;
  element.classList.toggle('dark-mode');
  let contents = document.getElementById('contanier');
  contents.classList.toggle('dark-mode');
}

const darkMode = document.getElementById('dark');
darkMode.addEventListener('click', darkModeBtn);

export { darkModeBtn };
