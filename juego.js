let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (!amigo) {
        Swal.fire({
            title: "Error al ingresar nombre!",
            text: "Por favor, ingresa un nombre válido.",
            icon: "error",
            confirmButtonText: "OK",
            timer: 3000
        });
        return;
    }

    for (let i = 0; i < listaAmigos.length; i++) {
        if (amigo == listaAmigos[i]) {
            Swal.fire({
                title: "Nombre ya ingresado!",
                text: "Si es otra persona, por favor coloca el apellido.",
                icon: "error",
                confirmButtonText: "OK",
                timer: 3200
            });
            return;
        }
    }

    listaAmigos.push(amigo);
    exibirAmigos();

    if (listaAmigos.length > 1) {
        document.querySelector('.button-draw').disabled = false;
    }

    limpiarCampo();
}

function exibirAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        listaHTML.appendChild(item);
    }
}

function exibeSorteado(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortearAmigo() {
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    
    exibeSorteado('#resultado', `El amigo sorteado es: ${amigoSorteado}`);
    document.querySelector('.button-draw').disabled = true;
    document.querySelector('.button-new-draw').disabled = false;
    document.querySelector('.button-add').disabled = true;
    document.getElementById('amigo').disabled = true;
}

function limpiarCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}

function nuevoSorteo() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = "";
    exibeSorteado('#resultado', '');
    limpiarCampo();
    document.querySelector('.button-add').disabled = false;
    document.getElementById('amigo').disabled = false;
    document.querySelector('.button-new-draw').disabled = true;
    listaAmigos = [];
}