class ContaController {
    constructor() {
        this._inputNumero = document.querySelector("#conta");
        this._inputSaldo = document.querySelector("#saldo");
        this.contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        if (this.contas.pesquisar(this._inputNumero.value) == undefined) {
            let contaNova = new Conta(this._inputNumero.value, parseFloat(this._inputSaldo.value));
            this.contas.inserir(contaNova);
            this.inserirElement(contaNova);
        }
        else {
            alert("Essa conta já sendo utilizada!");
        }
    }
    listar() {
        this.contas.listar().forEach(conta => {
            this.inserirElement(conta);
        });
    }
    inserirElement(conta) {
        const elemP = document.createElement('p');
        elemP.textContent = conta.toString();
        const btnApagar = document.createElement('button');
        btnApagar.textContent = 'X';
        btnApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + conta.toString());
            this.contas.remover(conta.numero);
            event.target.parentElement.remove();
        });
        elemP.appendChild(btnApagar);
        document.body.appendChild(elemP);
    }
}
