const inputText = document.querySelectorAll(".input-text");
const botaoEnviar = document.getElementById("btn")
const campoObrigatorio = document.querySelectorAll(".msg-error");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\. [a-zA-Z]{2,}$/;

botaoEnviar.addEventListener('submit', (e) => {
    e.preventDefault()
});

inputText.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.trim() === "") {
            input.classList.remove('valid')
            input.classList.add('required')
            campoObrigatorio[index].classList.add('required')
        } else {
            input.classList.remove('required')
            input.classList.add('valid')
            campoObrigatorio[index].classList.remove('required')
        }

    });
});