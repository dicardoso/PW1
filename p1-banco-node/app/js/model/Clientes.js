class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        let cliente = this.pesquisar(cpf);
        if (cliente) {
            let idCliente = this._clientes.indexOf(cliente);
            if (idCliente > -1) {
                this._clientes.splice(idCliente, 1);
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
