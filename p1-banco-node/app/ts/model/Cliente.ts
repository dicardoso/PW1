class Cliente {
    protected _nome: string;
    protected _cpf: string;
    protected _conta : Conta;

    constructor(nome: string, cpf: string, conta: Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }

    get conta(): Conta {
        return this._conta;
    }
    set conta(conta){
        this._conta = conta;
    }


    toString(): string {
        return `
         Nome: ${this._nome}
         Cpf: ${this._cpf} 
         Número da Conta: ${this._conta.numero}
         Saldo: ${this._conta.saldo}`;
    }
}