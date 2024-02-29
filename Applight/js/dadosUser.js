const email = document.querySelector("#email")
const senha = document.querySelector("#senha")

email.value = localStorage.getItem("email")
senha.value = localStorage.getItem("senha")