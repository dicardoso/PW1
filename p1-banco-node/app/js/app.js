let clienteController = new ClienteController();
const clientes = new Clientes();
let conta = new Conta('1', 1000);
let cliente = new Cliente('Huguinho', '123', conta);
clientes.inserir(cliente);
conta = new Conta('2', 2000);
cliente = new Cliente('Luizinho', '456', conta);
clientes.inserir(cliente);
conta = new Conta('3', 500);
cliente = new Cliente('Zezinho', '789', conta);
clientes.inserir(cliente);
console.log(clientes.pesquisar('11100322311'));
console.log(clientes.pesquisar('20022222211'));
clientes.remover('20022222211');
let lista = clientes.listar();
for (let i in lista) {
    console.log(lista[i]);
}
clientes.remover('11100322311');
