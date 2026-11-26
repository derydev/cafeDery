const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-links");
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
  });
}

document.querySelectorAll(".ambient-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("ambient");
    button.textContent = document.body.classList.contains("ambient")
      ? "Voltar à cor original"
      : "Mudar cor do ambiente";
  });
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#form-success");
    message.textContent = "Obrigado! A tua mensagem foi enviada com sucesso. Entraremos em contacto em breve.";
    message.classList.add("show");
    contactForm.reset();
  });
}

document.querySelectorAll("[data-year]").forEach((item) => item.textContent = new Date().getFullYear());

const passwordToggle = document.querySelector(".password-toggle");
const passwordInput = document.querySelector("#login-password");

if (passwordToggle && passwordInput) {
  passwordToggle.addEventListener("click", () => {
    const passwordIsVisible = passwordInput.type === "text";

    passwordInput.type = passwordIsVisible ? "password" : "text";
    passwordToggle.setAttribute("aria-pressed", String(!passwordIsVisible));
    passwordToggle.setAttribute(
      "aria-label",
      passwordIsVisible ? "Mostrar palavra-passe" : "Ocultar palavra-passe"
    );
  });
}

const loginForm = document.querySelector("#login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const loginMessage = document.querySelector("#login-message");
    loginMessage.textContent = "Dados verificados. Esta é uma demonstração do início de sessão.";
    loginMessage.classList.add("show");
  });
}


// Parte da Conexão com o PHP funcional com backend

function criarGuardar(){

   let primeiro_nome = document.getElementById("primeiro-nome").value;
   let ultimo_nome = document.getElementById("ultimo-nome").value;
   let telefone = document.getElementById("telefone").value;
   let criar_email = document.getElementById("criar-email").value;
   let generos = document.getElementById("generos").checked;
   let morada = document.getElementById("morada").value;
   let username = document.getElementById("username").value;
   let password = document.getElementById("criar-password").value;
   let confirm_password = document.getElementById("confirm-password").value;

  ajax({
     url: "../php/criar-conta.php",
     type: "POST",
     dataType:"json",
     data:{
        primeiro_nome: primeiro_nome,
        ultimo_nome: ultimo_nome,
        telefone: telefone,
        criar_email: criar_email,
        generos: generos,
        morada: morada,
        username: username,
        password: password,
        confirm_password: confirm_password,
        op:1
     },
     success: function(resposta){
      alert(resposta);
     },
     error:function(){
      alert("Erro no pedido");
     }
  })


}

