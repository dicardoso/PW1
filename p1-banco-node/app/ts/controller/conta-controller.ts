class ContaController {

    private _inputNumero: HTMLInputElement;
    private _inputSaldo: HTMLInputElement;

    private contas: Contas;

    constructor() {
        this._inputNumero = <HTMLInputElement>document.querySelector("#conta")
        this._inputSaldo = <HTMLInputElement>document.querySelector("#saldo");
        this.contas = new Contas();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        if (this.contas.pesquisar(this._inputNumero.value) == undefined) {
            let contaNova = new Conta(this._inputNumero.value,
                parseFloat(this._inputSaldo.value));

            this.contas.inserir(contaNova);
            this.inserirElement(contaNova);
        }
        else{
            alert("Essa conta já sendo utilizada!");
        }
    }

    listar() {
        this.contas.listar().forEach(conta => {
            this.inserirElement(conta);
        });
    }

    inserirElement(conta: Conta) {
        const elemP = document.createElement('p');
        elemP.textContent = conta.toString();

        const btnApagar = document.createElement('button');
        btnApagar.textContent = 'X';
        btnApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + conta.toString());
            this.contas.remover(conta.numero);
            (<Element>event.target).parentElement.remove();
        });

        elemP.appendChild(btnApagar);
        document.body.appendChild(elemP);
    }


}
