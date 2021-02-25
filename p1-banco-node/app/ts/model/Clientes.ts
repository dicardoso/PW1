class Clientes {

    private _clientes: Array<Cliente>;

    constructor() {
        this._clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
            this._clientes.push(cliente);
    }

    remover(cpf: string): void {
        const cliente = this.pesquisar(cpf);
        
        if (cliente) {
            const indiceCliente = this._clientes.indexOf(cliente);
            
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
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