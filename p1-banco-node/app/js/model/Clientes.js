class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const cliente = this.pesquisar(cpf);
        if (cliente) {
            const indiceCliente = this._clientes.indexOf(cliente);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf == cpf);
    }
    listar() {
        return this._clientes;
    }
}
