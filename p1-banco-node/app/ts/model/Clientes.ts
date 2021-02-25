class Clientes {

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
            this._clientes.push(cliente);
    }

    remover(cpf: string): void {
        let cliente = this.pesquisar(cpf);
        
        if (cliente) {
            let idCliente = this._clientes.indexOf(cliente);
            
            if (idCliente > -1) {
                this._clientes.splice(idCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this._clientes.find(
            cliente => cliente.cpf == cpf
        );
    }

    listar(): Array<Cliente> {
        return this._clientes;
    }
}