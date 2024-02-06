const botaoEnviar = document.getElementById("enviar");
const caixaMensagem = document.getElementById("texto"); // pesquisar sobre querySelector
const chat = document.getElementById("mensagens");

const socket = io();

botaoEnviar.addEventListener("click", () => {
    if (caixaMensagem.value !== "") {
        socket.emit("nova mensagem", caixaMensagem.value);
       // alert(caixaMensagem.value);
        caixaMensagem.value = "";
        
    }
})

socket.addEventListener("nova mensagem", (msg) => {
    const user = document.createElement("li");
    user.textContent = "Dionne diz:" 
    const elementoMensagem = document.createElement("li"); // cria um tag vazia <li></li>
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem'); // class=mensagem 
    chat.appendChild(user);
    chat.appendChild(elementoMensagem); // insere a nova tag dentro de DIV (pai)
})