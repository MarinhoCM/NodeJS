const cliente = {
    nome: 'marin',
    idade: 19,
    email:'marinemail.com',
    telefone: [
        '11 888898989', '11 888898888'
    ],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log(`SALDO INSUFICIENTE!`);
        } else {
            this.saldo -= valor;
            console.log(`pagamento realizado! ${this.saldo}`);
        }
    }
};
// cliente.efetuaPagamento(250) //insufiente;
cliente.efetuaPagamento(25)//pagamento realizado!;
