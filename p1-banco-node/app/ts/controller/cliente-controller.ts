class ClienteController {

    private _inputNumero: HTMLInputElement;
    private _inputSaldo: HTMLInputElement;
    private _inputNome: HTMLInputElement;
    private _inputCpf: HTMLInputElement;

    private _contas: Contas;
    private _clientes: Clientes;

    constructor() {
        this._inputNumero = <HTMLInputElement>document.querySelector("#conta");
        this._inputSaldo = <HTMLInputElement>document.querySelector("#saldo");
        this._inputNome = <HTMLInputElement>document.querySelector("#nome");
        this._inputCpf = <HTMLInputElement>document.querySelector("#cpf");

        this._contas = new Contas();
        this._clientes = new Clientes();

        let conta = new Conta('1', 1000);
        let cliente = new Cliente('Huguinho', '123', conta);
        this._clientes.inserir(cliente);
        this._contas.inserir(conta);

        conta = new Conta('2', 2000);
        cliente = new Cliente('Luizinho', '456', conta);
        this._clientes.inserir(cliente);
        this._contas.inserir(conta);

        conta = new Conta('3', 500);
        cliente = new Cliente('Zezinho', '789', conta);
        this._clientes.inserir(cliente);
        this._contas.inserir(conta);
    }

    inserir(evento: Event) {
        evento.preventDefault();
        if (this._contas.pesquisar(this._inputNumero.value) == undefined) {
            let contaNova = new Conta(this._inputNumero.value, parseFloat(this._inputSaldo.value));
            
            if (this._clientes.pesquisar(this._inputCpf.value) == undefined || this._clientes.pesquisar(this._inputCpf.value).nome != this._inputNome.value) {
                let clienteNovo = new Cliente(this._inputNome.value, this._inputCpf.value, contaNova);
                this._clientes.inserir(clienteNovo);
                this._contas.inserir(contaNova);
                console.log(this._clientes.pesquisar(this._inputCpf.value).nome);
                this.inserirClienteContaNoHTML(clienteNovo, contaNova);
            }
            else {
                alert("CPF já está sendo utilizado!")
            }
        }
        else {
            alert("Essa conta já sendo utilizada!");

        }

    }
    pesquisar(evento: Event) {
        evento.preventDefault
        if (this._clientes.pesquisar(this._inputCpf.value) == undefined) {
            alert("Cliente inexistente!");
        }
        else {
            let resultado = this._clientes.pesquisar(this._inputCpf.value)
            alert(`Cliente: ${resultado.nome}`);
        }
    }

    listar() {
        this._clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteContaNoHTML(cliente: Cliente, conta: Conta) {
        const elemP = document.createElement('p');
        elemP.textContent = cliente.toString();
        const btnApagar = document.createElement('button');
        btnApagar.textContent = 'X';
        btnApagar.addEventListener('click',
            (event) => {
                this._clientes.remover(cliente.cpf);
                this._contas.remover(conta.numero);
                this._contas.remover(this._inputNumero.value);
                (<Element>event.target).parentElement.remove();
            }
        );
        elemP.appendChild(btnApagar);
        document.body.appendChild(elemP);
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elemP = document.createElement('p');
        elemP.textContent = cliente.toString();
        const btnApagar = document.createElement('button');
        btnApagar.textContent = 'X';
        btnApagar.addEventListener('click',
            (event) => {
                this._clientes.remover(cliente.cpf);
                this._contas.remover(this._inputNumero.value);
                (<Element>event.target).parentElement.remove();
            }
        );
        elemP.appendChild(btnApagar);
        document.body.appendChild(elemP);
    }

}