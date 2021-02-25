class ClienteEspecial extends Cliente {
    constructor(_nome, _cpf, _conta, _dependentes) {
        super(_nome, _cpf, _conta);
        this._dependentes = _dependentes;
    }
}
