
// var add = document.getElementById("adicionar");
// adicionar.addEventListener("clicar" ,)
function adicionarCompras(){

    var itens = document.getElementById("adicionar").value;
    document.getElementById("itensAdicionados").textContent = itens;

    var listaCompras = document.getElementById(listaCompras);
    var novaLista = document.createElement("li");

    novaLista.textContent = itens

    listaCompras.appendChild("novaLista");

    adicionar.value = ""


};

