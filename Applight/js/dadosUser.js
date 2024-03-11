const nome = document.querySelector("#nome")
const sobrenome = document.querySelector("#sobrenome")
const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const mostrarSenha = document.querySelector("#mostrarSenha")

mostrarSenha.addEventListener("click", () => {
    if (senha.type === "password") {
        senha.type = "text";
        mostrarSenha.textContent = "Ocultar senha"
    } else {
        senha.type = "password";
        mostrarSenha.textContent = "Mostrar senha"
    }
});

nome.value = getItem("nome")
sobrenome.value = getItem("sobrenome")
cidade.value = getItem("cidade")
estado.value = getItem("estado")
email.value = getItem("email");
senha.value = getItem("senha")

function getItem(item) {
    return localStorage.getItem(item)
}