let contaController = new ContaController();
let clienteController = new ClienteController();

const clientes = new Clientes();


let lista = clientes.listar();

for(let i in lista){
    console.log(lista[i]);
}