const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
};

let dados = '';
for (let info in paciente) {
    if (typeof paciente[info] !== 'function') {
        console.log(`NA CHAVE ${info} TEMOS ${paciente[info]}`);
    } else {
        dados += `${info} ==> ${paciente[info]} `
        console.log("\n",dados);
    };
};
