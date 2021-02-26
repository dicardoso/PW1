class ClienteController {

    private _inputNumero: HTMLInputElement;
    private _inputSaldo: HTMLInputElement;
    private _inputNome: HTMLInputElement;
    private _inputCpf: HTMLInputElement;

    private _contas: Contas;
    private _clientes : Clientes;

    constructor() {
        this._inputNumero =<HTMLInputElement>document.querySelector("#conta");
        this._inputSaldo = <HTMLInputElement>document.querySelector("#saldo");
        this._inputNome= <HTMLInputElement>document.querySelector("#nome");
        this._inputCpf= <HTMLInputElement>document.querySelector("#cpf");

        this._contas = new Contas();
        this._clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        if (this._contas.pesquisar(this._inputNumero.value) == undefined){
            let contaNova  = new Conta(this._inputNumero.value,parseFloat(this._inputSaldo.value));
            
            if(this._clientes.pesquisar(this._inputCpf.value) == undefined || this._clientes.pesquisar(this._inputCpf.value).nome == this._inputNome.value){
                let clienteNovo = new Cliente(this._inputNome.value, this._inputCpf.value,contaNova);
                this._clientes.inserir(clienteNovo);
                this._contas.inserir(contaNova);
                this.inserirClienteContaNoHTML(clienteNovo, contaNova);
            }
            else {
                alert("CPF já está sendo utilizado!")
            }
        }
        else{
            alert("Essa conta já sendo utilizada!");
            
        }
        
    }
    pesquisar(evento : Event){
        evento.preventDefault
        if (this._clientes.pesquisar(this._inputCpf.value) == undefined){
            alert("Cliente inexistente!");
        }
        else{
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
    
    inserirClienteContaNoHTML(cliente: Cliente, conta : Conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                this._clientes.remover(cliente.cpf); 
                this._contas.remover(conta.numero);
                this._contas.remover(this._inputNumero.value);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                this._clientes.remover(cliente.cpf); 
                this._contas.remover(this._inputNumero.value);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

}