document.addEventListener("DOMContentLoaded", function () {
  const activeCheckbox = document.getElementById("active");
  const bannerContent = document.getElementById("bannerContent");

  activeCheckbox.addEventListener("change", function () {
    if (activeCheckbox.checked) {
      bannerContent.style.display = "none";
    } else {
      bannerContent.style.display = "block";
    }
  });
});

// Evitar rolagem

// Seleciona o checkbox #active
const checkbox = document.getElementById("active");

// Adiciona um evento 'change' ao checkbox
checkbox.addEventListener("change", function () {
  // Seleciona o body
  const body = document.body;

  // Adiciona ou remove a classe .no-scroll com base no estado do checkbox
  if (this.checked) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
});

// Fecha o menu quando um item do menu é clicado
const menuItems = document.querySelectorAll(".menu a");
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    checkbox.checked = false;
  });
});

// interação descrição
// Função para verificar quando a div é visível na janela
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight * 0.7;
}

var descricaoDiv = document.querySelector(".descricao");
var descricaoImg = document.querySelector(".descricao img");

// Função para ativar o efeito quando a div for visível
function activateEffect() {
  if (isElementInViewport(descricaoDiv)) {
    descricaoImg.style.right = "0";
    window.removeEventListener("scroll", activateEffect); // Remove o evento após ativar o efeito
  }
}

window.addEventListener("scroll", activateEffect);
